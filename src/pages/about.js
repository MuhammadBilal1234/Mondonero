import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import PortableText from 'react-portable-text';
import SEO from '../components/SEO';

const SectionStyles = styled.section`
  padding: var(--section-padding-large);
`;

const ContainerStyles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16rem;

  @media (max-width: 1100px) {
    flex-direction: column;
    margin-top: 8rem;
  }

  @media (max-width: 700px) {
    margin-top: 4rem;
  }

  div {
    &:first-of-type {
      flex-basis: 30%;
      padding-right: 4rem;
    }

    &:last-of-type {
      flex-basis: 50%;

      @media (max-width: 1100px) {
        order: -1;
      }

      p {
        margin-bottom: 4rem;
      }
    }
  }

  h2 {
    margin-bottom: 8rem;

    @media (max-width: 1250px) {
      margin-bottom: 4rem;
    }

    @media (max-width: 700px) {
      margin-bottom: 2rem;
    }
  }

  h5 {
    margin-bottom: 8rem;

    @media (max-width: 1100px) {
      margin-bottom: 4rem;
    }
  }

  a {
    margin-bottom: 2rem;
  }

  .credits {
    p {
      margin-bottom: 8rem;

      @media (max-width: 700px) {
        margin-bottom: 4rem;
      }
    }
  }

  .right {
    strong {
      font-family: RebondBold;
    }

    a {
      display: inline;
      text-decoration: underline;
    }
  }
`;

export default function AboutPage({ data: { allSanityAbout } }) {
  return (
    <>
      <SEO title="About" />
      <SectionStyles>
        <h2 className="heading heading-02">THE INTERNET IS FRAGILE</h2>
        <ContainerStyles>
          <div className="body-small credits">
            <p>
              Our Channels
              <br />
              <br />
              {allSanityAbout.nodes[0].ourChannels
                .split('\n')
                .map((item, idx) => (
                  <span key={idx}>
                    {item}
                    <br />
                  </span>
                ))}
            </p>
            <p>
              Credits
              <br />
              <br />
              {allSanityAbout.nodes[0].credits.split('\n').map((item, idx) => (
                <span key={idx}>
                  {item}
                  <br />
                </span>
              ))}
            </p>
            <a
              href={allSanityAbout.nodes[0].privacyPolicyLink}
              target="_blank"
              rel="noreferrer"
            >
              → Privacy Policy
            </a>
            <a
              href={allSanityAbout.nodes[0].privacyPolicyLink}
              target="_blank"
              rel="noreferrer"
            >
              → Cookie Policy
            </a>
            <a
              href={allSanityAbout.nodes[0].privacyPolicyLink}
              target="_blank"
              rel="noreferrer"
            >
              → Terms &amp; Conditions
            </a>
          </div>
          <div className="body-large right">
            <PortableText content={allSanityAbout.nodes[0]._rawPostText} />
          </div>
        </ContainerStyles>
      </SectionStyles>
    </>
  );
}

export const query = graphql`
  query {
    allSanityAbout {
      nodes {
        _rawPostText
        ourChannels
        credits
        privacyPolicyLink
        termsConditionsLink
        cookiePolicyLink
      }
    }
  }
`;
