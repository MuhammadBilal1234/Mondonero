import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const FullWidthSectionStyles = styled.section`
  width: 100%;
  display: flex;

  @media (max-width: 420px) {
    flex-direction: column;
  }

  > a {
    width: 50%;
    padding: 8rem;
    text-align: center;

    @media (max-width: 700px) {
      padding: 4rem;
    }

    @media (max-width: 420px) {
      width: 100%;
    }

    .content {
      height: 100%;
      max-width: 380px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .title.title--x-small {
        @media (max-width: 1250px) {
          font-size: 4rem;
        }
        @media (max-width: 700px) {
          font-size: 2rem;
        }
      }

      .title.title--xx-small {
        @media (max-width: 700px) {
          font-size: 1.5rem;
        }
      }
    }

    p:not(:last-of-type) {
      margin-bottom: 4rem;

      @media (max-width: 700px) {
        margin-bottom: 2rem;
      }
    }

    &:first-of-type {
      border: 2px solid var(--text);
      border-left: none;
      border-right: none;
      background: var(--textHighlight);
    }
    &:last-of-type {
      background: var(--text);

      .title {
        color: var(--textHighlight);
      }
    }
  }
`;

export default function EpisodeLinks({ episodes }) {
  return (
    <FullWidthSectionStyles>
      {episodes.map((episode, index) => (
        <Link to={`/episodes/${episode.slug.current}`} key={index}>
          <div className="content">
            <p className="title title--x-small">
              {episode.show
                ? episode.show.name
                : episode.associatedArtists[0].name}
            </p>
            <p className="title title--x-small">{episode.name}</p>
            <p className="title title--xx-small">{episode.releaseDate}</p>
          </div>
        </Link>
      ))}
    </FullWidthSectionStyles>
  );
}
