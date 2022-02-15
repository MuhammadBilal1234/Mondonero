import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const SectionStyles = styled.section`
  height: 80vh;
  width: 100%;
  background: grey;
  position: relative;

  .title-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    text-align: center;

    @media (min-width: 700px) {
      width: 75%;
    }

    .heading {
      color: var(--white);
      padding: 0 4rem;
      text-align: center;
    }
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    filter: brightness(0.8);
  }
`;

export default function FullWidthHeader({ image, name }) {
  return (
    <SectionStyles>
      <Img fluid={image} alt={name} />
      <div className="title-wrapper">
        <h1 className="heading heading-01">{name}</h1>
      </div>
    </SectionStyles>
  );
}
