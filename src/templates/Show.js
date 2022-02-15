import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import FullWidthHeader from '../components/FullWidthHeader';
import EpisodeList from '../components/EpisodeList';
import SEO from '../components/SEO';
import BlockText from '../components/BlockText';

const SectionStyles = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 4rem;

  a {
    text-transform: uppercase;
  }

  > div {
    width: 50%;

    @media (max-width: 700px) {
      width: 100%;
    }
  }

  @media (max-width: 700px) {
    padding: 4rem 2rem;
  }

  @media (min-width: 700px) {
    padding: 8rem 4rem;
  }

  .description {
    & > * {
      margin-bottom: 2rem;
    }

    &::after {
      transition: var(--transition);
      content: '';
      width: 100%;
      height: 2px;
      background: var(--text);
      display: block;
      margin-bottom: 4rem;
    }

    &.inactive::after {
      display: none;
    }

    p {
      font-size: 1.8rem;

      @media (max-width: 1024px) {
        font-size: 1.5rem;
      }
    }

    a {
      font-family: rebondBold;
    }

    @media (min-width: 700px) {
      width: 25%;
      max-width: 54rem;
      margin: 0 auto;
      transform: translateX(-2rem);
    }
  }
`;

export default function SingleShowPage({ data: { show, episodes } }) {
  return (
    <>
      <SEO title={show.name} image={show.image?.asset?.fluid} />
      <FullWidthHeader image={show.image.asset.fluid} name={show.name} />
      <SectionStyles>
        <div
          className={
            show.instaHandle || (show.contactName && show.email)
              ? 'description'
              : 'description inactive'
          }
        >
          {show.instaHandle && (
            <p className="body-small">
              Instagram
              <br />
              <a
                href={`https://instagram.com/${show.instaHandle}`}
                target="_blank"
                rel="noreferrer"
              >
                @{show.instaHandle}
              </a>
            </p>
          )}
          {show.contactName && show.email && (
            <p className="body-small">
              Contact {show.contactName} at:
              <br />
              <a href={`mailto:${show.email}`}>{show.email}</a>
            </p>
          )}
        </div>
        <div className="body-small">
          {show._rawShowDescription && (
            <BlockText rawText={show._rawShowDescription} />
          )}
        </div>
      </SectionStyles>
      <EpisodeList episodes={episodes} />
    </>
  );
}

export const query = graphql`
  query($slug: String!, $showId: String!) {
    show: sanityShow(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      contactName
      email
      instaHandle
      description
      _rawShowDescription
    }
    episodes: allSanityEpisode(
      filter: { show: { id: { eq: $showId } } }
      sort: { fields: releaseDate }
    ) {
      nodes {
        id
        name
        releaseDate
        show {
          name
        }
        slug {
          current
        }
        image {
          asset {
            fixed(height: 260, width: 260) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
  }
`;
