import React from 'react';
import styled from 'styled-components';

const ContainerStyles = styled.div`
  h2 {
    margin-bottom: 8rem;

    @media (max-width: 1250px) {
      margin-bottom: 4rem;
    }

    @media (max-width: 700px) {
      margin-bottom: 2rem;
    }
  }
`;

export default function Heading({ title, type, style }) {
  return (
    <ContainerStyles>
      <h2 style={style} className={`heading heading-${type}`}>{title}</h2>
    </ContainerStyles>
  );
}
