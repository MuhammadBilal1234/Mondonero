import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Moment from 'react-moment';
import Heading from './Heading';
import { playerContext } from './provider';

const SectionStyles = styled.section`
  padding: var(--section-padding-large);
`;

const GridStyles = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const ItemStyles = styled.article`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 200px 1fr;
  border-bottom: 1px solid var(--text);
  padding-bottom: 4rem;

  @media (max-width: 800px) {
    grid-template-columns: 150px 1fr;
    grid-template-rows: 150px 1fr;
    padding-bottom: 2rem;

    .gatsby-image-wrapper {
      width: 100% !important;
      height: 100% !important;
    }
  }

  @media (max-width: 700px) {
    &:last-of-type {
      border-bottom: none;
      padding-bottom: 0;
    }
  }

  .show-info {
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: auto 1fr auto;

    a {
      margin-bottom: 1rem;
    }
  }

  .show-name {
    padding: 1rem 0 0.5rem 0;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
`;

export default function LatestEpisodes({ episodes }) {
  return (
    <playerContext.Consumer>
      {(context) => (
        <SectionStyles>
          <Heading title="Latest Episodes" type="02" />
          <GridStyles>
            {episodes.nodes.map((episode) => (
              <ItemStyles key={episode.id}>
                <Img fixed={episode.image.asset.fixed} alt={episode.name} />
                <div className="show-info">
                  {episode.associatedArtists && (
                    <h6 className="label">
                      {episode.associatedArtists[0].name}
                      {episode.show &&
                        <p className="show-name">
                          {episode.show.name}
                        </p>
                      }
                    </h6>
                  )}
                  <h5 className="body-small">{episode.name}</h5>
                  <div className="label">
                    <Link
                      to={`/episodes/${episode.slug.current}`}
                      onClick={() => context.updatePlayerType('audio')}
                    >
                      Go To Episode →
                    </Link>
                    <Moment format="DD.MM.YYYY">{episode.releaseDate}</Moment>
                  </div>
                </div>
              </ItemStyles>
            ))}
          </GridStyles>
        </SectionStyles>
      )}
    </playerContext.Consumer>
  );
}
