import React from 'react';
import styled from 'styled-components';
import arrow from "../assets/icons/arrow.svg";

const ContainerStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 16rem;

  .item {
    width: 32%;

    @media (max-width: 1250px) {
      width: 48%;
    }

    @media (max-width: 700px) {
      width: 100%;
    }
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  padding: 1rem 0;
  text-transform: uppercase;

  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

const Title = styled.p`
  font-size: 2.5rem;
  font-family: RebondBold;

  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

const Button = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding: 2rem 4rem;
  padding-right: 0;
  border: 2px solid var(--bgHighlight);
  color: var(--text);

  .icon {
    padding-right: 2rem;
    width: 15%;
    -webkit-filter: invert(50%);
    filter: invert(50%);
  }
`;

export default function SupportLinks({ links }) {
  console.log(links);
  return (
    <ContainerStyles>
      {links.map((link) => (
        <div className="item" key={link._key}>
          <LinkWrapper>
            <Button href={link.linkUrl} target="_blank" rel="noreferrer">
              <Title>{link.title} → </Title>
            </Button>
          </LinkWrapper>
        </div>
      ))}
    </ContainerStyles>
  );
}
