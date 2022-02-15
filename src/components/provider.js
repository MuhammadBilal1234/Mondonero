import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const playerContext = React.createContext();
export const exploreContext = React.createContext();

const Provider = ({ children }) => {
  // theoplayer
  // set default state based on url in case page accessed directly
  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  const pagePlayer = path === '/' || path === '' ? 'video' : 'audio';

  const [theoplayerIsPlaying, setTheoPlayerIsPlaying] = useState(false);
  const [playerType, setPlayerType] = useState(pagePlayer);

  const updatePlayerType = (type) => {
    setPlayerType(type);
  };

  // mixcloud/youtube
  const [mixcloudIsPlaying, setMixcloudIsPlaying] = useState(false);
  const [mixcloudEpisode, setMixcloudEpisode] = useState(null);

  const playEpisode = (episode) => {
    setTheoPlayerIsPlaying(false);
    setMixcloudEpisode(episode);
    setMixcloudIsPlaying(true);
  };

  // explore page
  const { shows } = useStaticQuery(
    graphql`
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
      }
    `
  );
  const [activeCategory, setActiveCategory] = useState('shows');
  const [activeItems, setActiveItems] = useState(shows.nodes);

  return (
    <playerContext.Provider
      value={{
        playerType,
        updatePlayerType,
        mixcloudIsPlaying,
        playEpisode,
        mixcloudEpisode,
        setMixcloudIsPlaying,
        setTheoPlayerIsPlaying,
      }}
    >
      <exploreContext.Provider
        value={[activeCategory, setActiveCategory, activeItems, setActiveItems]}
      >
        {children}
      </exploreContext.Provider>
    </playerContext.Provider>
  );
};

export default ({ element }) => <Provider>{element}</Provider>;
