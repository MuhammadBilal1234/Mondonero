import { createGlobalStyle } from 'styled-components';

const TheoplayerStyles = createGlobalStyle`
    .video-js .vjs-big-play-button {
        display: none;
    }
    
    .audio #play-stream-button {
        display: none;
    }

    .chat-player-container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        transition: height var(--transition);

        @media (max-width: 700px) {
            margin-top: 6.5rem;
        }

        @media (min-width: 701px) {
            height: 80vh;
            display: flex;
            flex-wrap: wrap;
        }

        .chat {
            order: 1;
            width: 32rem;
            min-height: 40rem;

            @media (max-width: 700px) {
                width: 100%;
                height: 40rem;
                padding: 2rem;
                order: 2;
            }

            &.hidden {
                visibility: hidden;
                opacity: 0;
            }
        }

        &.audio {
            height: 0;
        }
    }

    .theoplayer-container {
        flex-grow: 1;
        height: 100%;
        position: relative;
        transition: height var(--transition);

        .video-js {
            width: 100%;
            height: 100%;
        }

        @media (max-width: 700px) {
            width: 100%;
            height: 57vw;

            &.audio {
                height: 0;
            }
        }

        video {
            position: absolute !important;
            top: 0 !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
        }

        .control-button-video {
            visibility: visible;
            z-index: 9999;       
            position: absolute;     
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);

            &.hidden {
                visibility: hidden;
            }
        }
                .mixcloud {
             width: 100px;
             padding: 10px;
             // background-color: #000;
             visibility: visible;
             z-index: 9999;       
             position: absolute;     
             left: 2%;
             top: 2%;

             @media (min-width: 768px) {
                  left: 2%;
                  top: 2%;
             }

             @media (min-width: 1024px) {
                  left: 2%;
                  top: 2%;
             }

             @media (min-width: 1280px) {
                  left: 2%;
                  top: 2%;
                 width: 200px;
             }

             @media (min-width: 1920px) {
                  left: 2%;
                  top: 2%;
             }

             @media (min-width: 3840px) {
                  left: 2%;
                  top: 2%;
                 width: 400px;
             }
         }
     }

     .theoplayer-container.expand {
         height: 100vh;
         width: 100vw;
    }

    .theoplayer-container.audio {
        overflow: hidden;
        height: 0;
    }

    .loading-spinner {
        height: 100%;
        width: 100%;
        position: relative;
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        visibility: hidden;
    }

    .loading-spinner.visible {
        visibility: visible;
    }

    .loading-spinner img {
        display: block;
        width: 10%;
        animation: spin 3s infinite;
        animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
            transform-origin: center;
        }
        100% {
            transform: rotate(360deg);
            transform-origin: center;
        }
    }

    .controls {
        width: 100%;
        padding: 0 4rem;
        transition: var(--transition);
        transition-property: background;
        background: var(--bg);
        position: sticky;
        top: 7.7rem;
        z-index: 9999;

        @media (max-width: 700px) {
            padding: 0 2rem;
            position: fixed;
            top: 7.7rem;
        }
    }
    .control-bar {
        width: 100%;
        padding: 2rem 0;
        transition: var(--transition);
        transition-property: border-bottom;
        border-bottom: 2px solid var(--text);
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
    }

    .control-bar > * {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .on-air {
        // width: clamp(80px, 20%, 200px);
        display: flex;
        align-items: baseline;
        // margin-right: auto;
    }

    .on-air span {
        background: var(--red);
        height: 12px;
        width: 12px;
        border-radius: 50%;
        margin-left: 0.5rem;
    }

    .on-air span.loading {
        animation: blinker 1s cubic-bezier(0.5, 0, 1, 1) infinite alternate;
    }

    @keyframes blinker {
        to {
            opacity: 0;
        }
    }

    .on-now, 
    .up-next {
        display: none;
        flex-grow: 1;
        margin: 0 2rem;
    }
 
    .up-next {
        @media (max-width: 1250px) {
            display: none;
        }
    }

    .control-button-container {
        height: 100%;
        display: flex;
        align-items: center;
    }

    .control-button {
        background: none;
        border: none;
        margin: 0;
        padding: 0;
        cursor: pointer;
    }

    .control-button:focus {
        outline: none;
        box-shadow: none;
    }

    .control-button {
        width: 1.6rem;
        height: 1.6rem;

        border-color: transparent transparent transparent var(--text);
        transition: 100ms all ease;
        will-change: border-width;

        /* play state */
        border-style: solid;
        border-width: 0.8rem 0 0.8rem 1.6rem;
    }

    /* paused state */
    .control-button.pause {
        border-style: double;
        border-width: 0 0 0 1.6rem;
    }

    .tune-in {
        margin-left: 3rem;
    }

    .theoplayer-poster {
        background-size: cover !important;
        background-color: var(--black);

        @media (max-width: 700px) {
            background-size: cover !important;
        }
    }

    .theoplayer-poster.visible {
        visibility: visible !important;
    }

`;

export default TheoplayerStyles;
