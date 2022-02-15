import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Heading from '../components/Heading';
import SEO from '../components/SEO';
import BlockText from '../components/BlockText';

const SectionStyles = styled.section`
  padding: var(--section-padding-large);

  p {
    margin-bottom: 8rem;

    @media (max-width: 700px) {
      margin-bottom: 4rem;
    }
  }

  .row {
    width: 100%;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: auto auto;
    align-items: center;
    margin-bottom: 2rem;

    @media (max-width: 700px) {
      margin-bottom: 1rem;
    }

    .body-large {
      text-transform: uppercase;
    }

    .find-more {
      text-align: right;
    }
  }
`;

export default function FormatsPage({ data: { settings, formats } }) {
  return (
    <>
      <SEO title="Formats" />
      <SectionStyles>
        <Heading title="Formats" type="02" />
        <div className="body-large">
          <BlockText rawText={settings._rawFormatsPageText} />
        </div>
        <p className="heading heading-02">All ({formats.nodes.length}) →</p>
        {formats.nodes.map((format) => (
          <div className="row" key={format.id}>
            <Link to={`/formats/${format.slug.current}`} className="body-large">
              {format.title}
            </Link>
            {format.findMoreLink && (
              <a
                href={format.findMoreLink}
                className="label find-more"
                target="_blank"
                rel="noreferrer"
              >
                Find more →
              </a>
            )}
          </div>
        ))}
      </SectionStyles>
    </>
  );
}

export const query = graphql`
  query {
    settings: sanitySettings {
      _rawFormatsPageText
    }
    formats: allSanityFormat {
      nodes {
        findMoreLink
        title
        slug {
          current
        }
        id
      }
    }
  }
`;
