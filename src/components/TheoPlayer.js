import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Player from './TheoPlayerWrapper';

export default function TheoPlayer({ page }) {

  const videoJsOptions = {
    autoplay: true,
    controls: false,
    preload: true,
    sources: [{
      src: 'https://server.studiostream.it:5443/LiveApp/streams/989131400610536211519660.m3u8?token=null',
      type: 'application/x-mpegurl'
    }]
  }

  return (
    <StaticQuery
      query={graphql`
        query {
          poster: allSanitySettings {
            nodes {
              theoplayerPoster {
                asset {
                  fluid(maxWidth: 2000) {
                    ...GatsbySanityImageFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={({ poster }) => (
        <Player { ...videoJsOptions } page={page} poster={poster} />
      )}
    />
  );
}
