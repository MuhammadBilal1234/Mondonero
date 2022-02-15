import path from 'path';

async function turnShowsIntoPages({ graphql, actions }) {
  // 1. get a template for this page
  const showTemplate = path.resolve('./src/templates/Show.js');
  // 2. query all shows
  const { data } = await graphql(`
    query {
      shows: allSanityShow {
        nodes {
          name
          id
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. loop over each show and create a page for that show
  data.shows.nodes.forEach((show) => {
    actions.createPage({
      path: `shows/${show.slug.current}`,
      component: showTemplate,
      context: {
        slug: show.slug.current,
        showId: show.id,
      },
    });
  });
}

async function turnArtistsIntoPages({ graphql, actions }) {
  const artistTemplate = path.resolve('./src/templates/Artist.js');

  const { data } = await graphql(`
    query {
      artists: allSanityArtist {
        nodes {
          name
          id
          slug {
            current
          }
        }
      }
    }
  `);

  data.artists.nodes.forEach((artist) => {
    actions.createPage({
      path: `artists/${artist.slug.current}`,
      component: artistTemplate,
      context: {
        slug: artist.slug.current,
        artist: artist.name,
      },
    });
  });
}

async function turnEpisodesIntoPages({ graphql, actions }) {
  const episodeTemplate = path.resolve('./src/templates/Episode.js');

  const { data } = await graphql(`
    query {
      episodes: allSanityEpisode {
        nodes {
          name
          id
          slug {
            current
          }
        }
      }
    }
  `);

  data.episodes.nodes.forEach((episode) => {
    actions.createPage({
      path: `episodes/${episode.slug.current}`,
      component: episodeTemplate,
      context: {
        slug: episode.slug.current,
        episode: episode.name,
      },
    });
  });
}

async function turnStoriesIntoPages({ graphql, actions }) {
  const storyTemplate = path.resolve('./src/templates/Story.js');

  const { data } = await graphql(`
    query {
      stories: allSanityStory {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  data.stories.nodes.forEach((story) => {
    actions.createPage({
      path: `stories/${story.slug.current}`,
      component: storyTemplate,
      context: {
        slug: story.slug.current,
      },
    });
  });
}

async function turnFormatsIntoPages({ graphql, actions }) {
  const formatTemplate = path.resolve('./src/templates/Format.js');

  const { data } = await graphql(`
    query {
      formats: allSanityFormat {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  data.formats.nodes.forEach((format) => {
    actions.createPage({
      path: `formats/${format.slug.current}`,
      component: formatTemplate,
      context: {
        slug: format.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  // create pages dynamically
  await Promise.all([
    turnShowsIntoPages(params),
    turnArtistsIntoPages(params),
    turnEpisodesIntoPages(params),
    turnStoriesIntoPages(params),
    turnFormatsIntoPages(params),
  ]);
}
