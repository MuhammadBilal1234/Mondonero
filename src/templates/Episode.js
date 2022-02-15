import { graphql, Link } from 'gatsby';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import YoutubePlayer from '../components/YoutubePlayer';
import { playerContext } from '../components/provider';
import SEO from '../components/SEO';
import BlockText from '../components/BlockText';

const HeaderStyles = styled.section`
  flex: 1;
  height: 80vh;
  width: 100%;
  background: grey;
  position: relative;

  .content {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 4rem;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    .heading {
      margin: 2rem 0 4rem;
    }
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    img {
      filter: brightness(0.5);
    }
  }
`;

const SplitContent = styled.div`
  display: flex;

  @media (max-width: 700px) {
    display: block;
  }
`

const SectionStyles = styled.section`
  padding: 4rem;
  flex: 1;

  .body-small {
    font-size: 2rem;
    max-width: 58rem;
    margin: 0 auto;
  }

  a {
    text-transform: uppercase;
  }

  > div {
    width: 100%;

    @media (max-width: 700px) {
      width: 100%;
    }
  }

  @media (max-width: 700px) {
    padding: 4rem 2rem;
  }

  @media (min-width: 700px) {
    padding: 4rem;
  }

  .description {
    & > * {
      margin-bottom: 2rem;
    }

    &::after {
      transition: var(--transition);
      content: '';
      width: 100%;
      height: 2px;
      background: var(--text);
      display: block;
      margin-bottom: 4rem;
    }

    p {
      font-size: 1.8rem;

      @media (max-width: 1024px) {
        font-size: 1.5rem;
      }
    }

    a {
      font-family: rebondBold;
    }

    @media (min-width: 700px) {
      width: 100%;
      max-width: 58rem;
      margin: 0 auto;
    }
  }
`;

export default function SingleShowPage({ data: { episode } }) {
  const episodeUrl = episode.YoutubeUrl
    ? episode.YoutubeUrl
    : episode.MixcloudUrl;

  console.log(episode);

  const [videoIsPlaying, setVideoIsPlaying] = useState(false);

  const releaseDate = episode.releaseDate.replace(/-/g, '.');

  function muted() {
    var vid = document.getElementById("vjs_video_3_html5_api");
    var vid2 = document.getElementById("vjs_video_3");
    var playButton = document.getElementById("play-stream-button");
    var controlButton = document.getElementById("control-button");
    vid.muted = true;
    vid2.muted = true;
    vid2.classList.remove("force-unmute-symbol");
    vid.pause(); 
    playButton.classList.remove("hidden");
    controlButton.classList.remove("pause");
  }

  useEffect(() => {
    document.getElementById("playButton").addEventListener("click", muted); 
  }, [muted]);

  return (
    <>
      <SEO title={episode.name} image={episode.image?.asset?.fluid} />
      <playerContext.Consumer>
        {(context) => (
          <SplitContent>
            <HeaderStyles>
              {episode.image.asset && (
                <Img fluid={episode.image.asset.fluid} alt={episode.name} />
              )}
              <div className="content">
                <p className="body-small">{releaseDate}</p>
                <h2 className="heading heading-01">
                  {episode.show
                    ? `${episode.show.name} - ${episode.name}`
                    : episode.name}
                </h2>
                <button
                  type="button"
                  id="playButton"
                  className="play-btn"
                  onClick={
                    episodeUrl.indexOf('mixcloud') > -1
                      ? () => context.playEpisode(episodeUrl)
                      : () => setVideoIsPlaying(true)
                  }
                >
                  Play Episode
                </button>
              </div>
              {episode.YoutubeUrl && (
                <YoutubePlayer
                  episode={episode.YoutubeUrl}
                  playVideo={videoIsPlaying}
                />
              )}
            </HeaderStyles>
            <SectionStyles>
              <div className="description">
                {episode.show && (
                  <>
                    <p className="body-small">{episode.show.description}</p>
                    <Link
                      to={`/shows/${episode.show.slug.current}`}
                      className="body-small link"
                    >
                      Go to show →
                    </Link>
                  </>
                )}
              </div>
              {episode._rawEpisodeDescription && (
                <div className="body-small">
                  <div className="intro body-small">
                    <BlockText
                      rawText={episode._rawEpisodeDescription}
                      cssClasses="testing"
                    />
                  </div>
                </div>
              )}
            </SectionStyles>
          </SplitContent>
        )}
      </playerContext.Consumer>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    episode: sanityEpisode(slug: { current: { eq: $slug } }) {
      id
      name
      show {
        name
        description
        slug {
          current
        }
      }
      MixcloudUrl
      YoutubeUrl
      releaseDate(formatString: "DD-MM-YY")
      image {
        asset {
          fluid(maxWidth: 1920) {
            ...GatsbySanityImageFluid
          }
        }
      }
      _rawEpisodeDescription
    }
  }
`;
