import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube';

const PlayerContainerStyles = styled.div`
  z-index: -1;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  #youtube-player {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
  }

  &.show {
    z-index: 1;
    background: rgba(0, 0, 0, 0.5);
  }
`;

export default function YoutubePlayer({ episode, playVideo }) {
  return (
    <PlayerContainerStyles id="youtube-player-wrapper" className={playVideo ? 'show' : ''}>
      <ReactPlayer
        id="youtube-player"
        url={episode}
        controls
        playing={playVideo}
      />
    </PlayerContainerStyles>
  );
}
