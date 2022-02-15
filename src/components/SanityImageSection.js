import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import BlockText from './BlockText';

const SectionStyles = styled.div`
  display: flex;
  flex-wrap: wrap;

  .img-wrapper {
    width: 100%;
  }

  @media (min-width: 700px) {
    .img-wrapper {
      width: 25%;
      max-width: 54rem;
      margin: 0 auto;
      transform: translateX(-2rem);
    }

    .text-wrapper {
      width: 50%;
    }
  }
`;

export default function SanityImageSection({ content }) {
  const { image } = content;
  return (
    <SectionStyles>
      <div className="img-wrapper">
        {image.link ? (
          <a href={image.link} target="_blank" rel="noreferrer">
            <Img fluid={image.asset.fluid} alt="" />
          </a>
        ) : (
          <Img fluid={image.asset.fluid} alt="" />
        )}
      </div>
      <div className="text-wrapper body-small">
        <BlockText rawText={content._rawText} />
      </div>
    </SectionStyles>
  );
}
