import React from 'react';
import styled from 'styled-components';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';

const ThemeTogglerStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 1rem;
  position: relative;
  top: -30px;

  @media (max-width: 700px) {
    justify-content: flex-start;
    position: inherit;
    margin: 0;
    margin-top: 15px;
  }

  label {
    position: relative;
    display: block;
    width: 8rem;
    height: 3.5rem;
    border-radius: 1.75rem;
    transition: var(--transition);
    transition-property: background;
    background: var(--white);
    overflow: hidden;
    cursor: pointer;

    @media (max-width: 700px) {
      width: 5rem;
      height: 2.1875rem;
    }

    &:before {
      display: block;
      position: absolute;
      content: '';
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      top: 3px;
      left: 3px;
      transition: var(--transition);
      background: var(--black);

      @media (max-width: 700px) {
        width: 1.6rem;
        height: 1.6rem;
      }
    }
  }

  input[type='checkbox'] {
    display: none;

    &:checked + label {
      transition: var(--transition);
      background: var(--black);

      &:before {
        background: var(--white);
        transform: translateX(44px);

        @media (max-width: 700px) {
          transform: translateX(27px);
        }
      }
    }
  }
`;

export default function ThemeToggle() {
  return (
    <>
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <ThemeTogglerStyles>
            <input
              type="checkbox"
              id="toggle"
              onChange={(e) => toggleTheme(e.target.checked ? 'light' : 'dark')}
              checked={theme === 'light'}
            />
            <label htmlFor="toggle" />
          </ThemeTogglerStyles>
        )}
      </ThemeToggler>
    </>
  );
}
