import React, { useContext, useState , useEffect } from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import sortIcon from '../assets/icons/sort.svg';
import ExploreFilter from '../components/ExploreFilter.js';
import SEO from '../components/SEO';
import { exploreContext } from '../components/provider';

const SectionStyles = styled.section`
  padding: 4rem;

  @media (max-width: 700px) {
    padding: 2rem;
  }
`;

const Table = styled.table`
  width: 100%;
  text-transform: uppercase;

  tr td:nth-of-type(even) {
    text-align: right;
    width: 20%;
  }

  tbody {
    .gatsby-image-wrapper {
      position: absolute !important;
      display: none !important;
      left: 50%;
      transform: translateX(-50%);
    }

    tr {
      position: relative;
    }

    a {
      display: inline-block;
      position: relative;

      &:hover {
        text-decoration: underline;

        + .gatsby-image-wrapper {
          display: inline-block !important;
          z-index: -1;
          margin-left: 4rem;
        }
      }
    }

    td {
      padding-bottom: 2rem;

      @media (max-width: 700px) {
        padding-bottom: 1rem;
      }
    }
  }

  button {
    color: var(--text);
    width: 2rem;
    margin-right: 0.5rem;

    @media (max-width: 700px) {
      margin: 1rem 0;
      width: 1rem;
    }
  }

  .desc {
    transform: rotate(180deg);
  }
`;

export default function ExplorePage({ data }) {
  const [isAscending, setIsAsc] = useState(true);


  

  const [
    activeCategory,
    setActiveCategory,
    activeItems,
    setActiveItems,
  ] = useContext(exploreContext);

  if (isAscending) {
    activeItems.sort((a, b) => (a.name > b.name ? 1 : -1));
  } else {
    activeItems.sort((a, b) => (a.name > b.name ? 1 : -1)).reverse();
  }

  const updateActiveItems = (itemType, category) => {
    setActiveItems(itemType);
    setActiveCategory(category);
  };

  return (
    <>
      <SEO title="Explore" />
      <SectionStyles>
        <ExploreFilter
          allItems={data}
          updateActiveItems={updateActiveItems}
          activeCategory={activeCategory}
        />
        <Table>
          <thead>
            <tr className="body-medium">
              <td />
              <td>
                <button type="button" onClick={() => setIsAsc(!isAscending)}>
                  <img
                    src={sortIcon}
                    alt="sort order"
                    className={isAscending ? '' : 'desc'}
                  />
                </button>
              </td>
            </tr>
          </thead>
          <tbody>
            {activeItems.map((item) => (
              <tr className="body-medium" key={item.id}>
                <td>
                  <Link
                    to={`/${
                      activeCategory === 'guests' ? 'artists' : activeCategory
                    }/${item.slug.current}`}
                  >
                    {item.name}
                  </Link>
                  <Img fixed={item.image.asset.fixed} alt={item.name} />
                </td>
                <td>{item.name.split(' ')[0].charAt(0)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </SectionStyles>
    </>
  );
}

export const query = graphql`
  query {
    shows: allSanityShow {
      nodes {
        name
        id
        slug {
          current
        }
        image {
          asset {
            fixed(width: 400, height: 400) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
    hosts: allSanityArtist(filter: { artistType: { eq: "host" } }) {
      nodes {
        name
        id
        artistType
        slug {
          current
        }
        image {
          asset {
            fixed(width: 400, height: 400) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
    guests: allSanityArtist(filter: { artistType: { eq: "guest" } }) {
      nodes {
        name
        id
        artistType
        slug {
          current
        }
        image {
          asset {
            fixed(width: 400, height: 400) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
  }
`;
