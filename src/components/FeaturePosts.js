import React from "react";
import styled from "styled-components";
import { staticQuery, graphql, StaticQuery } from "gatsby";
import PostItem from "./PostItem";

const GridStyles = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-areas:
    "hero hero aside1"
    "hero hero aside2";
  /* grid-template-rows: repeat(2, 1fr); */

  .hero {
    grid-area: hero;
    min-height: 400px;

    @media (max-width: 700px) {
      min-height: 0;
    }
  }

  @media (max-width: 1023px) {
    grid-template-areas:
      "hero hero"
      "aside1 aside2";
  }

  @media (max-width: 700px) {
    grid-template-areas: "hero";
    grid-gap: 2rem;
  }
`;

export default function FeaturePosts({ posts }) {
  return (
    <GridStyles>
      {posts.map((item, index) => (
        <PostItem
          post={item}
          size={index === 0 ? "large" : "small"}
          key={item.id}
        />
      ))}
    </GridStyles>
  );
}
