import React from 'react';
import styled from 'styled-components';

const ShowsFilterStyles = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid var(--text);
  padding-bottom: 4rem;

  @media (max-width: 700px) {
    padding-bottom: 2rem;
    flex-direction: column;

    .heading-02 {
      text-align: left;
    }

    button {
      margin-bottom: 1rem;
    }
  }

  button {
    background: none;
    border: none;
    color: var(--text);
    opacity: 0.2;

    &.active {
      opacity: 1;
    }
  }
`;

export default function ExploreFilter({
  allItems,
  updateActiveItems,
  activeCategory,
}) {
  const shows = allItems.shows.nodes.filter((show) => show.image != null);

  return (
    <ShowsFilterStyles>
      <button
        type="button"
        className={
          activeCategory === 'shows'
            ? 'heading heading-02 active'
            : 'heading heading-02'
        }
        onClick={() => {
          updateActiveItems(shows, 'shows');
        }}
      >
        Shows ({shows.length})
      </button>

      <button
        type="button"
        className={
          activeCategory === 'artists'
            ? 'heading heading-02 active'
            : 'heading heading-02'
        }
        onClick={() => {
          updateActiveItems(allItems.hosts.nodes, 'artists');
        }}
      >
        Hosts ({allItems.hosts.nodes.length})
      </button>

      <button
        type="button"
        className={
          activeCategory === 'guests'
            ? 'heading heading-02 active'
            : 'heading heading-02'
        }
        onClick={() => {
          updateActiveItems(allItems.guests.nodes, 'guests');
        }}
      >
        Guests ({allItems.guests.nodes.length})
      </button>
    </ShowsFilterStyles>
  );
}
