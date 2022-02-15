import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import listenIcon from '../assets/icons/listen-back.svg';
import { playerContext } from './provider';

const SectionStyles = styled.section`
  position: relative;
  height: 80vh;

  @media (max-width: 700px) {
    height: 40vh;
  }

  img {
    filter: brightness(0.7);
  }

  .heading {
    color: var(--white);
  }

  .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
  }

  .content {
    width: 100%;
    max-width: 1300px;
    padding: 4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    p:first-of-type {
      position: relative;
      display: inline-block;

      &::before,
      &::after {
        content: '';
        background: no-repeat center url(${listenIcon});
        height: 100%;
        width: 6rem;
        position: absolute;
        top: 0;

        @media (max-width: 700px) {
          width: 2rem;
        }
      }
      &::before {
        left: -2rem;
        transform: translateX(-100%);

        @media (max-width: 700px) {
          left: -1rem;
        }
      }
      &::after {
        right: -2rem;
        transform: translateX(100%);

        @media (max-width: 700px) {
          right: -1rem;
        }
      }
    }
  }
`;

export default function FullWidthFeature({ item }) {
  return (
    <playerContext.Consumer>
      {(context) => (
        <SectionStyles>
          <Img fluid={item.image.asset.fluid} alt="listen back" />
          <Link
            to={`/episodes/${item.slug.current}`}
            className="content"
            onClick={() => context.updatePlayerType('audio')}
          >
            <p className="heading heading-01 listenBack">Listen back</p>
            <h4 className="heading heading-01">
              {item.show ? `${item.show.name} - ${item.name}` : item.name}
            </h4>
          </Link>
        </SectionStyles>
      )}
    </playerContext.Consumer>
  );
}
