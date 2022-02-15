import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import GalleryHeader from '../components/GalleryHeader';
import SanityTextSection from '../components/SanityTextSection';
import SanityImageSection from '../components/SanityImageSection';
import SanityIntroSection from '../components/SanityIntroSection';
import SanityFeaturedEpisodes from '../components/SanityFeaturedEpisodes';

const components = {
  SanityTextSection,
  SanityImageSection,
  SanityIntroSection,
  SanityFeaturedEpisodes,
};

const ContainerStyles = styled.section`
  padding: 4rem 0 0;

  @media (min-width: 1300px) {
    padding: 8rem 0 0;
  }
  .content-wrapper {
    padding: 0 2rem;

    > * > * {
      margin-bottom: 4rem;
    }

    &:last-child {
      > * > * {
        margin-bottom: 2rem;
      }
    }

    @media (min-width: 700px) {
      padding: 0 4rem;

      > * > * {
        margin-bottom: 8rem;
      }

      &:last-child {
        > * > * {
          margin-bottom: 6rem;
        }
      }
    }

    .iframe-container {
      margin: 4rem 0;
    }

    &.full-width {
      padding: 0;

      @media (max-width: 700px) {
        a:first-of-type {
          margin-bottom: 0;
        }
      }
    }
  }
`;

export default function SingleStoryPage({ data: { story } }) {
  const { content, gallery, title } = story;
  return (
    <>
      <SEO title={story.title} image={gallery.images[0].asset.fluid} />
      <GalleryHeader images={gallery.images} title={title} />
      <ContainerStyles>
        {content.map((item) => {
          const SectionComponent = components[item.__typename];
          return (
            <div
              className={
                item.__typename === 'SanityFeaturedEpisodes'
                  ? 'content-wrapper full-width'
                  : 'content-wrapper'
              }
              key={item._key}
            >
              <SectionComponent content={item} />
            </div>
          );
        })}
      </ContainerStyles>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    story: sanityStory(slug: { current: { eq: $slug } }) {
      title
      excerpt
      gallery {
        images {
          asset {
            fluid(maxWidth: 1600) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      content {
        ... on SanityIntroSection {
          _key
          _rawIntro
          description {
            _rawText
            link {
              text
              url
            }
          }
        }
        ... on SanityImageSection {
          _key
          _rawText
          image {
            size
            link
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        ... on SanityTextSection {
          _key
          _rawText
        }
        ... on SanityFeaturedEpisodes {
          _key
          episodes {
            id
            name
            releaseDate
            slug {
              current
            }
            associatedArtists {
              name
            }
            show {
              name
              associatedArtists {
                name
              }
            }
          }
        }
      }
    }
  }
`;
