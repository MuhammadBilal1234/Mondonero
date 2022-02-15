import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';

function createMarkup(string) {
  return { __html: string };
}

const serializers = {
  types: {
    code: ({ node }) => (
      <div
        className="iframe-container"
        dangerouslySetInnerHTML={createMarkup(node.code)}
      />
    ),
  },
  marks: {
    link: ({ mark, children }) => {
      const { blank, href } = mark;
      return blank ? (
        <a href={href} target="_blank" rel="noopener">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      );
    },
  },
};

const ContainerStyles = styled.div`
  strong {
    font-family: RebondBold;
  }

  a {
    transition: var(--transition);
    display: inline;
    line-break: anywhere;
    text-decoration: underline;
  }

  div > * {
    margin-bottom: 2rem;
  }
`;

export default function BlockText({ rawText }) {
  return (
    <ContainerStyles>
      <BlockContent blocks={rawText} serializers={serializers} />
    </ContainerStyles>
  );
}
