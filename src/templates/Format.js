import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import GalleryHeader from '../components/GalleryHeader';
import BlockText from '../components/BlockText';

const SectionStyles = styled.section`
  width: 100%;

  > div,
  > p {
    max-width: 1000px;
    margin: 0 auto;
    padding: 8rem 4rem;
  }

  p {
    /* font-size: 4rem; */

    strong {
      font-family: RebondBold;
    }

    a {
      display: inline;
      text-decoration: underline;
    }
  }

  .iframe-container {
    margin: 4rem 0;
  }

  @media (max-width: 700px) {
    > div {
      padding: 4rem 2rem;
    }
    p {
      font-size: 2rem;
    }
  }
`;

const FullWidthSectionStyles = styled.section`
  width: 100%;
  display: flex;

  @media (max-width: 420px) {
    flex-direction: column;
  }

  > a {
    width: 50%;
    padding: 8rem;
    text-align: center;

    @media (max-width: 700px) {
      padding: 4rem;
    }

    @media (max-width: 420px) {
      width: 100%;
    }

    .content {
      height: 100%;
      max-width: 380px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    p:not(:last-of-type) {
      margin-bottom: 4rem;

      @media (max-width: 700px) {
        margin-bottom: 2rem;
      }
    }

    &:first-of-type {
      border: 2px solid var(--text);
      border-left: none;
      border-right: none;
      background: var(--textHighlight);
    }
    &:last-of-type {
      background: var(--text);

      .title {
        color: var(--textHighlight);
      }
    }
  }
`;

export default function SingleShowPage({ data: { format } }) {
  return (
    <>
      <SEO title={format.title} image={format.gallery.images[0].asset.fluid} />
      <GalleryHeader images={format.gallery.images} title={format.title} />
      <SectionStyles>
        {format.pageBuilder.map((item, index) =>
          item._rawText ? (
            <div className="body-small">
              <BlockText rawText={item._rawText} key={index} />
            </div>
          ) : (
            <FullWidthSectionStyles>
              {item.episodes.map((episode) => (
                <Link to={`/episodes/${episode.slug.current}`} key={episode.id}>
                  <div className="content">
                    <p className="title title--x-small">
                      {episode.show
                        ? episode.show.name
                        : episode.associatedArtists[0].name}
                    </p>
                    <p className="title title--x-small">{episode.name}</p>
                    <p className="title title--xx-small">
                      {episode.releaseDate}
                    </p>
                  </div>
                </Link>
              ))}
            </FullWidthSectionStyles>
          )
        )}
      </SectionStyles>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    format: sanityFormat(slug: { current: { eq: $slug } }) {
      title
      excerpt
      id
      gallery {
        images {
          asset {
            fluid(maxWidth: 1600) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      pageBuilder {
        ... on SanityBodyText {
          _rawText
        }
        ... on SanityFeaturedEpisodes {
          _type
          episodes {
            id
            name
            slug {
              current
            }
            releaseDate
            show {
              name
            }
            associatedArtists {
              name
            }
          }
        }
      }
    }
  }
`;
