import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import PortableText from 'react-portable-text';
import { serializers } from '@sanity/block-content-to-react/lib/targets/dom';
import BlockText from './BlockText';

const SectionStyles = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    width: 50%;

    @media (max-width: 700px) {
      width: 100%;
    }
  }

  .description {
    & > * {
      margin-bottom: 2rem;
    }

    &::after {
      transition: var(--transition);
      content: '';
      width: 100%;
      height: 2px;
      background: var(--text);
      display: block;
    }

    p {
      font-size: 1.8rem;

      @media (max-width: 1024px) {
        font-size: 1.5rem;
      }
    }

    a {
      font-family: rebondBold;
    }

    @media (min-width: 700px) {
      width: 25%;
      max-width: 54rem;
      margin: 0 auto;
      transform: translateX(-2rem);
    }
  }
`;

export default function SanityIntroSection({ content }) {
  const { description } = content;

  return (
    <SectionStyles>
      <div className="description">
        <BlockText rawText={description._rawText} />

        {description.link && description.link.text && (
          <Link to={description.link.url} className="text strong">
            {description.link.text.toUpperCase()} →
          </Link>
        )}
      </div>

      <div className="intro body-small">
        <BlockText rawText={content._rawIntro} cssClasses="testing" />
      </div>
    </SectionStyles>
  );
}
