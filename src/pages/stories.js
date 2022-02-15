import React, { useEffect } from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Heading from "../components/Heading";
import FullWidthFeature from "../components/FullWidthFeature";
import LatestArticles from "../components/LatestArticles";
import FromTheArchive from "../components/FromTheArchive";
import SEO from "../components/SEO";

const HeaderContainer = styled.div`
  padding: 8rem 4rem 0;

  @media (max-width: 1250px) {
    padding: 4rem 4rem 0;
  }

  @media (max-width: 700px) {
    padding: 2rem 2rem 0;
  }
`;

export default function StoriesPage({
  data: { settings, featurePosts, posts },
}) {
  const { featuredEpisodes } = settings.nodes[0];

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "../../grained-master/grained.js";
    script.async = true;

    script.onload = () => scriptLoaded();

    console.log(script);

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  function scriptLoaded() {
    // window.G.Grained();
    // console.log("G" ,window.G);
  }

  return (
    <>
      <SEO title="Stories" />
      {/* <HeaderContainer>
        <Heading title="Stories" type="02" />
      </HeaderContainer> */}
      {/* <FullWidthFeature item={featuredEpisodes[0]} /> */}
      <LatestArticles featurePosts={featurePosts.nodes} />
      {/* <FullWidthFeature item={featuredEpisodes[1]} /> */}
      <FromTheArchive posts={posts.nodes} />
    </>
  );
}

export const query = graphql`
  {
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
              fluid(maxWidth: 1600) {
                ...GatsbySanityImageFluid
              }
              fixed {
                src
              }
            }
          }
        }
      }
    }
    featurePosts: allSanityStory(
      sort: { fields: _createdAt, order: DESC }
      limit: 3
    ) {
      nodes {
        id
        slug {
          current
        }
        gallery {
          images {
            asset {
              fluid(maxWidth: 1600) {
                ...GatsbySanityImageFluid
              }
              fixed {
                src
              }
            }
          }
        }
        title
        excerpt
      }
    }
    posts: allSanityStory(sort: { fields: _createdAt, order: DESC }, skip: 3) {
      nodes {
        id
        slug {
          current
        }
        gallery {
          images {
            asset {
              fluid(maxWidth: 1600) {
                ...GatsbySanityImageFluid
              }
              fixed {
                src
              }
            }
          }
        }
        title
        excerpt
      }
    }
  }
`;
