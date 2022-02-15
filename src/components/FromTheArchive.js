import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import placeholder from '../assets/images/feature-2.jpg';
import PostItem from './PostItem';

const SectionStyles = styled.section`
  padding: var(--section-padding-large);
`;

const GridStyles = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  article {
    grid-template-rows: 240px auto auto;

    @media (min-width: 701px) {
      grid-template-rows: 20vw auto auto;
    }
  }
`;

export default function FromTheArchive({ posts }) {
  return (
    <SectionStyles>
      <Heading title="From the Archive" size="small" />
      <GridStyles>
        {posts.map((item) => (
          <PostItem post={item} size="small" />
        ))}
      </GridStyles>
    </SectionStyles>
  );
}
