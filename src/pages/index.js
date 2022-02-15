import { graphql } from 'gatsby';
import React from 'react';
import FullWidthFeature from '../components/FullWidthFeature';
import LatestEpisodes from '../components/LatestEpisodes';
import SEO from '../components/SEO';
import WhatsNew from '../components/WhatsNew';

export default function HomePage({
  data: { settings, featurePosts, latestEpisodes },
}) {
  const { featuredEpisodes } = settings.nodes[0];

  return (
    <>
      <SEO title="Home" />
      <WhatsNew featurePosts={featurePosts.featuredStoriesHome} />
      <FullWidthFeature item={featuredEpisodes[0]} />
      <LatestEpisodes episodes={latestEpisodes} />
      <FullWidthFeature item={featuredEpisodes[1]} />
    </>
  );
}

export const query = graphql`
  query {
    settings: allSanitySettings {
      nodes {
        featuredEpisodes {
          slug {
            current
          }
          name
          releaseDate
          show {
            name
          }
          image {
            asset {
              fluid(maxWidth: 1920) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
    featurePosts: sanitySettings {
      featuredStoriesHome {
        id
        title
        excerpt
        slug {
          current
        }
        gallery {
          images {
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
    latestEpisodes: allSanityEpisode(
      sort: { fields: releaseDate, order: DESC }
      limit: 6
    ) {
      nodes {
        name
        id
        releaseDate
        slug {
          current
        }
        associatedArtists {
          name
        }
        show {
          name
        }
        image {
          asset {
            fixed(width: 200, height: 200) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
  }
`;
