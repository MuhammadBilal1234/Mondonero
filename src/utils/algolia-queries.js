const indexName = `Artists`;

const artistQuery = `{
    artists: allSanityArtist {
        edges {
            node {
                id
                name
                slug {
                  current
                }
                _type
            }
        }
    }
}`;

const showQuery = `{
  shows: allSanityShow {
      edges {
          node {
              id
              name
              slug {
                current
              }
              _type
          }
      }
  }
}`;

function artistToAlgoliaRecord({ node: { id, name, slug } }) {
  return {
    objectID: id,
    name,
    slug: `artists/${slug.current}`,
  };
}

function showToAlgoliaRecord({ node: { id, name, slug } }) {
  return {
    objectID: id,
    name,
    slug: `shows/${slug.current}`,
  };
}

const queries = [
  {
    query: artistQuery,
    transformer: ({ data }) => data.artists.edges.map(artistToAlgoliaRecord),
    indexName,
  },
  {
    query: showQuery,
    transformer: ({ data }) => data.shows.edges.map(showToAlgoliaRecord),
    indexName,
  },
];

module.exports = queries;
