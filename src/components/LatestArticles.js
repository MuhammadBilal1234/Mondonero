import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import FeaturePosts from './FeaturePosts';

const SectionStyles = styled.section`
  padding: var(--section-padding-large);
`;

export default function LatestArticles({ featurePosts }) {
  return (
    <SectionStyles>
      <Heading title="Latest Articles" type="02" />
      <FeaturePosts posts={featurePosts} />
    </SectionStyles>
  );
}
