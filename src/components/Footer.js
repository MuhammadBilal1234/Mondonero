import { Link, StaticQuery, graphql } from 'gatsby';
import ThemeToggle from './ThemeToggle';
import React from 'react';
import styled from 'styled-components';
import MailingListSignup from './MailingListSignup';
import Marquee from './Marquee';

const FooterStyles = styled.footer`
  padding: 0;

  > p {
    padding: 0 4rem 2rem;

    @media (max-width: 700px) {
      padding: 0 2rem 2rem;
    }
  }
`;

const ContainerStyles = styled.footer`
  padding: var(--section-padding-large);
  display: grid;
  grid-template-columns: auto auto 320px;
  text-transform: uppercase;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    grid-gap: 4rem;

    .newsletter-signup > p {
      margin-bottom: 2rem;
    }
  }

  a:not(:last-of-type) {
    margin-bottom: 1rem;
  }

  .justify-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  form {
    max-width: 320px;
  }
`;

export default function Footer() {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          settings: allSanitySettings {
            nodes {
              facebookUrl
              instagramUrl
              mixcloudUrl
              youtubeUrl
              address
              email
            }
          }
        }
      `}
      render={({ settings }) => (
        <FooterStyles>
          <Marquee />
          <ContainerStyles>
            <div>
              <a
                href={settings.nodes[0].instagramUrl}
                className="body-small"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                href={settings.nodes[0].facebookUrl}
                className="body-small"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <a
                href={settings.nodes[0].mixcloudUrl}
                className="body-small"
                target="_blank"
                rel="noreferrer"
              >
                Mixcloud
              </a>
              <a
                href={settings.nodes[0].youtubeUrl}
                className="body-small"
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </a>
            </div>
            <div className="body-small justify-column">
              <p>
                {settings.nodes[0].address.split('\n')[0]}
                <br />
                {settings.nodes[0].address.split('\n')[1]}
              </p>
              <a href={`mailto:${settings.nodes[0].email}`}>
                {settings.nodes[0].email}
              </a>
            </div>
            <div className="body-small justify-column newsletter-signup">
              <p>
                Subscribe to
                <br />
                Newsletter
              </p>
              <MailingListSignup />
            </div>
          </ContainerStyles>
          <p>&copy; Mondonero {new Date().getFullYear()}
             <br />
<ThemeToggle style="margin:10px 0px 0px 0px;justify-content: flex-end;" />
</p>
        </FooterStyles>
      )}
    />
  );
}
