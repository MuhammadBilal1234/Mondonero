import { Link, navigate } from "gatsby";
import React from "react";
import styled from "styled-components";
import { playerContext } from "./provider";
import "./grainy.css";

const LinkContainerStyles = styled.ul`
  display: flex;

  li:first-of-type {
    margin-right: 8rem;
  }
`;

const ArticleStyles = styled.article`
  display: grid;
  grid-gap: 3rem;
  grid-template-rows: minmax(220px, 1fr) auto auto;

  @media (max-width: 700px) {
    grid-template-rows: 240px auto auto;
    grid-gap: 2rem;
  }

  .aside {
    grid-template-rows: 240px auto auto;
  }

  span {
    font-family: RebondBold;
    text-transform: uppercase;
  }

  button {
    color: var(--text);
    display: block;
  }
`;

const options = {
  // animate: true,
  patternWidth: 70,
  patternHeight: 70,
  grainOpacity: 1.5,
  grainDensity: 0.8,
  grainWidth: 3,
  grainHeight: 0.6,
};

export default function FeaturePostItem({ post, size }) {
  const handleClick = (context) => {
    context.updatePlayerType("audio");
    navigate("/stories");
  };
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    //Adding film Grain

    // Generating Canvas

    // change these settings
    var patternSize = 164,
      patternScaleX = 3,
      patternScaleY = 1,
      patternRefreshInterval = 4,
      patternAlpha = 15; // int between 0 and 255,

    var patternPixelDataLength = patternSize * patternSize * 4,
      patternCanvas,
      patternCtx,
      generatedCanvas,
      patternData,
      frame = 0;

    var zindex = 15;
    generatedCanvas = document.createElement("canvas");
    generatedCanvas.className = "canvases";
    generatedCanvas.id = "can";
    generatedCanvas.style.zIndex = zindex;
    zindex++;
    canvasRef.current.append(generatedCanvas);
    console.log(canvasRef);
    var viewWidth,
      viewHeight,
      canvas = generatedCanvas,
      ctx;

    initCanvas();
    initGrain();
    requestAnimationFrame(loop);
    window.onload = function () {};

    // create a canvas which will render the grain
    function initCanvas() {
      console.log("cavas", canvas);
      viewWidth = canvas.width = canvasRef.current.style.width;
      viewHeight = canvas.height = canvasRef.current.style.width;
      ctx = canvas.getContext("2d");

      ctx.scale(patternScaleX, patternScaleY);
    }

    // create a canvas which will be used as a pattern
    function initGrain() {
      patternCanvas = document.createElement("canvas");
      canvas.width = patternSize;
      canvas.height = patternSize;
      patternCtx = canvas.getContext("2d");
      patternData = patternCtx.createImageData(patternSize, patternSize);
    }

    // put a random shade of gray into every pixel of the pattern
    function update() {
      var value;

      for (var i = 0; i < patternPixelDataLength; i += 4) {
        value = (Math.random() * 255) | 0;

        patternData.data[i] = value;
        patternData.data[i + 1] = value;
        patternData.data[i + 2] = value;
        patternData.data[i + 3] = patternAlpha;
      }

      patternCtx.putImageData(patternData, 0, 0);
    }

    // fill the canvas using the pattern
    function draw() {
      ctx.clearRect(0, 0, viewWidth, viewHeight);

      ctx.fillStyle = ctx.createPattern(canvas, "repeat");
      ctx.fillRect(0, 0, viewWidth, viewHeight);
    }

    function loop() {
      if (++frame % patternRefreshInterval === 0) {
        update();
        draw();
      }

      requestAnimationFrame(loop);
    }
  }, []);

  return (
    <playerContext.Consumer>
      {(context) => (
        <ArticleStyles
          // id="container"
          className={size === "large" ? "hero" : "aside"}
        >
          {/* <BackgroundImage
              fluid={post.gallery.images[0].asset.fluid}
              alt=""
            /> */}
          <div
            style={{
              background: `url(${post.gallery.images[0].asset.fluid.src}) no-repeat`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
              position: "relative",
            }}
            ref={canvasRef}
            id="image"
            // className="page-header"
          />

          <p className="body-small">
            <span className="excerpt-title">{post.title}. </span>
            {post.excerpt}
          </p>
          <LinkContainerStyles>
            <li>
              <Link
                to="/stories"
                className="label"
                onClick={() => context.updatePlayerType("audio")}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to={`/stories/${post.slug.current}`}
                className="label"
                onClick={() => context.updatePlayerType("audio")}
              >
                Read more →
              </Link>
            </li>
          </LinkContainerStyles>
        </ArticleStyles>
      )}
    </playerContext.Consumer>
  );
}
