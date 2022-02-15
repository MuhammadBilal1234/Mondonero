import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const SectionStyles = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
  }

  > a {
    width: 50%;
    padding: 8rem;
    text-align: center;

    @media (max-width: 700px) {
      width: 100%;
      padding: 4rem;
    }

    .content {
      height: 100%;
      max-width: 380px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .body-small {
        font-family: rebondBold;
        margin: 2rem 0;
      }
    }

    &:first-of-type {
      transition: var(--transition);
      border: 2px solid var(--text);
      border-left: none;
      border-right: none;
      background: var(--textHighlight);
    }
    &:last-of-type {
      transition: var(--transition);
      background: var(--text);
      color: var(--textHighlight);
    }
  }
`;

export default function SanityFeaturedEpisodes({ content }) {
  const { episodes } = content;
  return (
    <SectionStyles>
      {episodes.map((episode) => (
        <Link to={`/episodes/${episode.slug.current}`} key={episode.id}>
          <div className="content">
            <p className="label">
              {episode.show
                ? episode.show.name
                : episode.associatedArtists[0].name}
            </p>
            <p className="body-small">{episode.name}</p>
            <p className="label">{episode.releaseDate}</p>
          </div>
        </Link>
      ))}
    </SectionStyles>
  );
}
