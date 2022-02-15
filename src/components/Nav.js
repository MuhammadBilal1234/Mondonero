import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Search from './search';
import { playerContext } from './provider';

const searchIndices = [{ name: `Artists`, title: `Artists` }];

const NavStyles = styled.nav`
  width: 100%;
  height: 77px;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 99999;

  .menu-wrapper {
    display: flex;
    background: var(--bgHighlight);
    transition: var(--transition);
    transition-property: all;
    padding: 0 2rem;

    @media (max-width: 1350px) {
      height: 100vh;
      position: fixed;
      padding: 2rem 4rem;
      top: 0;
      right: 0;
      z-index: 9999;
      flex-direction: column;
      background: var(--text);
      transform: translateX(100%);

      &.show {
        transform: translateX(0);
      }
    }

    @media (max-width: 700px) {
      width: 100%;
    }

    #close {
      display: none;
      height: 15px;
      width: 15px;
      margin: 12px 0 0 auto;
      position: relative;
      cursor: pointer;

      span {
        height: 2px;
        width: 100%;
        background: var(--textHighlight);
        position: absolute;
        top: 50%;

        &:first-of-type {
          transform: translateY(-1px) rotate(45deg);
        }
        &:last-of-type {
          transform: translateY(-1px) rotate(315deg);
        }
      }

      @media (max-width: 1350px) {
        display: block;
      }
    }
  }

  .menu {
    display: flex;
    align-items: center;

    li {
      display: inline-block;
    }

    a {
      display: block;
      margin: 0 2rem;
      transition: var(--transition);
      transition-property: color;
      color: var(--textHighlight);
      letter-spacing: -0.04em;

      &[aria-current] {
        font-family: RebondBold;
      }
    }

    @media (max-width: 1350px) {
      flex-direction: column;
      margin: 0;

      li {
        width: 100%;
        border-bottom: 1px solid var(--textHighlight);
        text-align: center;

        .label {
          font-size: 1.8rem;
        }

        a {
          color: var(--textHighlight);
          padding: 3rem 0;
        }
      }

      &.visible {
        display: flex;
        visibility: visible;
        transform: scale(1);
      }
    }
  }

  #hamburger {
    transition: var(--transition);
    display: none;
    text-transform: uppercase;
    background: var(--text);
    color: var(--textHighlight);
    padding: 2rem 4rem;

    @media (max-width: 700px) {
      font-size: 1.5rem;
      padding: 2rem;
    }

    i {
      height: 14px;
      width: 14px;
      margin-left: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: -2px;

      span {
        transition: var(--transition);
        width: 100%;
        height: 2px;
        background: var(--textHighlight);
      }
    }

    @media (max-width: 1350px) {
      display: flex;
      align-items: center;
    }
  }
`;

const LogoContainerStyles = styled.div`
  transition: var(--transition);
  transition-property: background;
  height: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding: 2rem 4rem;
  background: var(--bg);

  @media (max-width: 700px) {
    padding: 2rem;
  }

  #logo {
    width: 11rem;
    margin-right: 2rem;
    display: block;
    fill: var(--text);
    transition: 0.4s ease;

    @media (max-width: 700px) {
      width: 8rem;
    }
  }
`;

export default function Nav() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navItems = [
    'Explore',
    'Schedule',
    'Stories',
    'Formats',
    'Support',
    'About',
  ];

  const handleClick = (context) => {
    context.updatePlayerType('audio');
    setMobileNavOpen(false);
  };

  return (
    <playerContext.Consumer>
      {(context) => (
        <NavStyles>
          <LogoContainerStyles>
            <h1>
              <Link to="/" onClick={() => context.updatePlayerType('video')}>
                <svg
                  id="logo"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 377.71 130"
                >
                  <g id="Livello_2" data-name="Livello 2">
                    <g id="Livello_1-2" data-name="Livello 1-2">
                      <path
                        d="M127.23,38.29c-1,2.23-1.92,4.35-3,6.4A113.85,113.85,0,0,0,113,82.18c-.88,7-1.75,14.06-2.45,21.1a72,72,0,0,0-.5,11.28c.41,6.83,4.11,11.42,10.58,13.72a31.66,31.66,0,0,0,13.21,1.53c7.56-.58,13-4.29,16-11.36a24.56,24.56,0,0,0,2-9.78V34.48a28.91,28.91,0,0,0-2-10.48A37.44,37.44,0,0,0,110,.38,35.24,35.24,0,0,0,79.49,29.27c-1,5.5-.79,11.05-.62,16.59.43,13.56,2.5,27,4,40.43.26,2.36.55,4.71.83,7.1H68.27a3.09,3.09,0,0,1,0-.43c1.41-13.09,2.9-26.17,4.2-39.27a102.63,102.63,0,0,0,.37-21.1C71.34,18.93,64.36,9,52,3,44.7-.47,37-.58,29.23.9A35.46,35.46,0,0,0,0,36.15q0,35.78.05,71.53a30.35,30.35,0,0,0,1,7.53c1.92,7.4,6.4,12.51,14.09,14.14a30.58,30.58,0,0,0,16.39-1.12A14.56,14.56,0,0,0,40.14,121,19.49,19.49,0,0,0,42,110.14c-.53-5.86-1-11.75-1.79-17.57C39.1,85,37.86,77.43,36.36,69.93c-1.72-8.58-5.26-16.54-9.17-24.33-1.16-2.32-2.25-4.68-3.42-7.12l15.59-3.29c0,1-.07,1.75,0,2.51q1.86,16.86,3.75,33.73C44,79,44.71,86.51,45.57,94a101,101,0,0,0,1.65,11.75c3.18,13.5,13.33,22.4,26.63,23.47a28.71,28.71,0,0,0,18.82-4.58c6-4.06,9.49-9.94,11.56-16.75,1.83-6,1.91-12.22,2.56-18.38q1.26-12,2.43-24.12,1.13-11.55,2.22-23.11c.23-2.46.36-4.94.54-7.47l15.25,3.44"
                        transform="translate(0 0)"
                      />
                      <path
                        d="M188.38,60.75c1-8.5,4.74-16.6,11.2-24.07,12.67,1.73,25.61,3.07,38.45,4a89.25,89.25,0,0,0-3.18,20.08ZM277,94.19v29.58c-12.72-1.41-24.14-12.1-30.71-28.74,10.27-.5,20.6-.78,30.71-.84m-37,1.17c4.21,11.41,10.79,20.91,18.68,27-22.18-3.37-41.41-11.84-54.43-24,11.83-1.31,23.85-2.32,35.75-3m.84-28.57H277V88.14c-10.79.06-21.81.38-32.76.94a83.31,83.31,0,0,1-3.4-22.29m-.88-32c-11.49-.79-23.28-2-35.07-3.48,12.94-11.75,31.82-20,53.43-23.34-7.76,6-14.24,15.51-18.32,26.78m37,7.43V60.75H240.91a82.73,82.73,0,0,1,3.27-19.69c10.92.67,22,1,32.81,1.12m-30.77-7c6.36-16.24,17.49-27,29.81-28.79h1V36.13c-10.11-.06-20.46-.4-30.77-1m-8.17,54.28c-13.05.78-26.19,2-39.05,3.46C192.25,84.78,188.6,76,188.2,66.79h46.62a89.65,89.65,0,0,0,3.27,22.62M371.62,66.79c-.4,9.08-4.13,18.07-10.81,26-12.6-1.56-25.73-2.75-39.06-3.53A89.37,89.37,0,0,0,325,66.79Zm-46.69-6a89,89,0,0,0-3.16-20c13-.93,25.85-2.32,38.37-4.15,6.5,7.47,10.28,15.59,11.27,24.13ZM283,36.15V6.32h.65c12.4,1.81,23.55,12.6,29.91,28.89-10.12.58-20.39.89-30.56.93m35.83,24.6H283V42.2c10.83,0,21.79-.4,32.58-1.05a82.47,82.47,0,0,1,3.25,19.6M301.47,7.93c21.6,3.35,40.46,11.58,53.39,23.31-11.45,1.57-23.22,2.77-35,3.59-4.14-11.31-10.62-20.78-18.39-26.9m12.07,87C307,111.49,295.69,122.2,283,123.73V94.17c10.22,0,20.48.28,30.5.75m6.29.33c12.11.68,24.14,1.71,35.77,3.06-13,12.17-32.27,20.66-54.49,24,7.92-6.1,14.51-15.64,18.72-27.1M283,88.12V66.79h36A84,84,0,0,1,315.59,89c-10.82-.54-21.76-.82-32.55-.85m65.53-69.27C331.3,7.57,308.42,1,284.2.31a30.75,30.75,0,0,0-8.57,0C251.36,1,228.48,7.57,211.2,18.85c-18.79,12.26-29.13,28.69-29.13,46.27s10.34,34,29.13,46.26c18.4,12,42.8,18.62,68.69,18.62s50.29-6.6,68.68-18.61c18.79-12.26,29.14-28.69,29.14-46.26s-10.35-34-29.14-46.27"
                        transform="translate(0 0)"
                      />
                    </g>
                  </g>
                </svg>
              </Link>
            </h1>
     
          </LogoContainerStyles>
          <div className={mobileNavOpen ? 'menu-wrapper show' : 'menu-wrapper'}>
            <div
              id="close"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              role="button"
              tabIndex={0}
              onKeyPress={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span />
              <span />
            </div>
            <ul className={mobileNavOpen ? 'visible menu' : 'menu'}>
              {navItems.map((item) => (
                <li key={navItems.indexOf(item)}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    onClick={() => handleClick(context)}
                    className="label"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <a href="https://shop.mondonero.org/" className="label">
                  Shop
                </a>
              </li>
            </ul>
          </div>
          <button
            id="hamburger"
            type="button"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            Menu
            <i>
              <span />
              <span />
              <span />
            </i>
          </button>
          <Search indices={searchIndices} />
        </NavStyles>
      )}
    </playerContext.Consumer>
  );
}
