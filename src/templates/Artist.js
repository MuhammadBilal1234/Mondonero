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

export default function SingleArtistPage({ data: { artist, episodes } }) {
  return (
    <>
      <SEO title={artist.name} image={artist.image?.asset?.fluid} />
      <FullWidthHeader image={artist.image.asset.fluid} name={artist.name} />
      <SectionStyles>
        <div
          className={
            artist.instaHandle || (artist.contactName && artist.email)
              ? 'description'
              : 'description inactive'
          }
        >
          {artist.instaHandle && (
            <p className="body-small">
              Instagram
              <br />
              <a
                href={`https://instagram.com/${artist.instaHandle}`}
                target="_blank"
                rel="noreferrer"
              >
                @{artist.instaHandle}
              </a>
            </p>
          )}
          {artist.contactName && artist.email && (
            <p className="body-small">
              Contact {artist.contactName} at:
              <br />
              <a href={`mailto:${artist.email}`}>{artist.email}</a>
            </p>
          )}
        </div>
        <div className="body-small">
          {artist._rawArtistDescription && (
            <BlockText rawText={artist._rawArtistDescription} />
          )}
        </div>
      </SectionStyles>
      <EpisodeList episodes={episodes} />
    </>
  );
}

export const query = graphql`
  query($slug: String!, $artist: [String]) {
    artist: sanityArtist(slug: { current: { eq: $slug } }) {
      name
      id
      artistType
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
      _rawArtistDescription
    }
    episodes: allSanityEpisode(
      filter: { associatedArtists: { elemMatch: { name: { in: $artist } } } }
      sort: { fields: releaseDate }
    ) {
      nodes {
        id
        releaseDate
        name
        slug {
          current
        }
        associatedArtists {
          name
        }
        image {
          asset {
            fixed(height: 260, width: 260) {
              ...GatsbySanityImageFixed
            }
          }
        }
        show {
          name
        }
      }
    }
  }
`;
