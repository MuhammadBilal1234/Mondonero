import React from 'react';
import ReactPlayer from 'react-player/mixcloud';
import styled from 'styled-components';
import { playerContext } from './provider';

const ContainerStyles = styled.div`
  transition: var(--transition);
  position: fixed;
  width: 100%;
  bottom: -100%;
  margin: -5px 0;
  z-index: 9999;

  #mixcloud-player {
    width: 100% !important;
    height: 64px !important;
  }

  &.show {
    bottom: 0;
  }
`;

export default function MixcloudPlayer() {
  return (
    <playerContext.Consumer>
      {(context) => (
        <ContainerStyles className={context.mixcloudIsPlaying ? 'show' : ''}>
          <ReactPlayer
            id="mixcloud-player"
            url={context.mixcloudEpisode}
            controls
            config={{
              mixcloud: {
                options: { mini: 1, hide_tracklist: 1 },
              },
            }}
            playing={context.mixcloudIsPlaying}
          />
        </ContainerStyles>
      )}
    </playerContext.Consumer>
  );
}
