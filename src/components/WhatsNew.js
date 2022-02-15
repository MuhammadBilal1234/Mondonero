import React from 'react';
import styled from 'styled-components';
import FeaturePosts from './FeaturePosts';
import Heading from './Heading';

const SectionStyles = styled.section`
  padding: var(--section-padding-large);
`;

export default function WhatsNew({ featurePosts }) {
  return (
    <SectionStyles>
      <Heading title="What's New" type="02" />
      <FeaturePosts posts={featurePosts} />
    </SectionStyles>
  );
}
