import React from 'react'
import TheoplayerStyles from '../styles/TheoplayerStyles';
import { playerContext } from './provider';
import Mixcloud from '../assets/images/Mixcloud_Logo_White.png';
import videojs from "video.js";
import "video.js/dist/video-js.css";
import ToggleSwitch from './ToggleSwitch';

const chatScript = `<iframe class="chatbox__iframe" src="https://embed.wordy.chat/?room=mondonero.org" frameborder="0" style="width: 100%;height: 100%;"font-family:RebondBold;"></iframe>`;

export default class Player extends React.Component {
  _player = null;

  _el = React.createRef();

  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      readyState: null,
    };
  }

  componentWillUnmount() {
    if (this._player) {
      this._player.destroy();
    }
  }

  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
    });
    document.getElementById("vjs_video_3_html5_api").setAttribute("playsinline", "");
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  handleReadyStateChange = ({ readyState }) => {
    this.setState(() => ({
      readyState,
    }));
  };

  handleControlClick = (context) => {
    context.setMixcloudIsPlaying(false);
    context.setTheoPlayerIsPlaying(true);

    var vid = document.getElementById("vjs_video_3_html5_api");
    var vid2 = document.getElementById("vjs_video_3");
    var playButton = document.getElementById("play-stream-button");
    var controlButton = document.getElementById("control-button");
    if (vid.muted === false) {
      vid.muted = true;
      vid2.muted = true;
      vid.pause(); 
      playButton.classList.remove("hidden");
      controlButton.classList.remove("pause");
      vid2.classList.remove("force-unmute-symbol");
    } else {
      vid.muted = false;
      vid2.muted = false;
      vid.play(); 
      playButton.classList.add("hidden");
      controlButton.classList.add("pause");
      vid2.classList.add("force-unmute-symbol");
    }

    this.setState((state) => ({
      isPlaying: !state.isPlaying,
    }));
  };

  handleAvClick = (context) => {
    const type = context.playerType === 'audio' ? 'video' : 'audio';
    context.updatePlayerType(type);
  };

  render() {
    return (
      <playerContext.Consumer>
        {(context) => (
          <>
            <TheoplayerStyles />
            <div
              className={
                context.playerType === 'video'
                  ? 'chat-player-container'
                  : 'chat-player-container audio'
              }
            >
              <div
                id="video"
                className={
                  context.playerType === 'video'
                    ? 'theoplayer-container'
                    : 'theoplayer-container audio'
                }
                ref={this._el}
              >
                <div data-vjs-player>
                  <video onClick={() => this.handleControlClick(context)} playsinline muted ref={ node => this.videoNode = node } className="video-js"></video>
                </div>
                <a
                   href="https://www.mixcloud.com/live/mondonero/"
                   className="mixcloud"
                 >
                   <img src={Mixcloud} alt="Mixcloud" />
                 </a>
                <button
                  className={
                    this.state.isPlaying || context.playerType === 'audio'
                      ? 'control-button-video play-btn'
                      : 'control-button-video play-btn'
                  }
                  type="button"
                  id="play-stream-button"
                  onClick={() => this.handleControlClick(context)}
                >
                  ENTER
                </button>
              </div>
              {/* only render for video */}
              <div
                className={
                  context.playerType === 'video' ? 'chat' : 'chat hidden'
                }
                dangerouslySetInnerHTML={{ __html: chatScript }}
              />
            </div>
            <div className="controls">
              <div className="control-bar">
                <div className="on-air">
                  <p className="label">On Air</p>
                  <span
                    className={
                      this.state.isPlaying && this.state.readyState < 3
                        ? 'loading'
                        : null
                    }
                  />
                </div>
                <div className="control-button-container">
                  <button
                    type="button"
                    id="control-button"
                    className={
                      this.state.isPlaying
                        ? 'control-button'
                        : 'control-button'
                    }
                    aria-label="player control button"
                    onClick={() => this.handleControlClick(context)}
                  />
                  <div className="tune-in">
                    <ToggleSwitch onChange={() => this.handleAvClick(context)} />
                    {/* <p className="text--xx-small">Tune In</p> */}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </playerContext.Consumer>
    );
  }
}

Player.contextType = playerContext;
