import React from 'react';
import styled from 'styled-components';
import BlockText from './BlockText';

const SectionStyles = styled.div`
  width: 50%;
  margin-left: auto;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export default function SanityTextSection({ content }) {
  return (
    <SectionStyles className="body-small">
      <BlockText rawText={content._rawText} />
    </SectionStyles>
  );
}
