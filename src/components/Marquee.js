import React from 'react';
import styled from 'styled-components';

const ContainerStyles = styled.div`
  position: relative;
  overflow: hidden;
  --move-initial: calc(0%);
  --move-final: calc(-65.1%);

  hr {
    margin: 0 4rem;

    @media (max-width: 700px) {
      margin: 0 2rem;
    }
  }
`;

const InnerStyles = styled.div`
  width: fit-content;
  display: flex;
  position: relative;
  transform: translate3d(var(--move-initial), 0, 0);
  animation: marquee 35s linear infinite;
  padding: 4rem 0;

  @media (max-width: 700px) {
    padding: 2rem 0;
  }

  span {
    white-space: nowrap;
    text-transform: uppercase;
    font-size: 8rem;
    margin-left: 0.25em;

    @media (max-width: 700px) {
      font-size: 3rem;
    }
  }

  @keyframes marquee {
    0% {
      transform: translate3d(var(--move-initial), 0, 0);
    }

    100% {
      transform: translate3d(var(--move-final), 0, 0);
    }
  }
`;

export default function Marquee() {
  return (
    <ContainerStyles>
      <hr />
      <InnerStyles>
        <span>BORDER GATEWAYS CONGESTION - </span>
        <span>COMPROMISE COMMUNICATIONS - </span>
        <span>Routing errors undetected - </span>
        <span>The Internet is Fragile - </span>
        <span aria-hidden="true">BORDER GATEWAYS CONGESTION - </span>
        <span aria-hidden="true">COMPROMISE COMMUNICATIONS - </span>
      </InnerStyles>
      <hr />
    </ContainerStyles>
  );
}
