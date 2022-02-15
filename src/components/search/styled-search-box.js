import styled, { css } from 'styled-components';
import SearchBox from './search-box';

const open = css`
  width: 20rem;
  background: transparent;
  cursor: text;
  margin-left: -1.6em;
  padding-left: 1.6em;

  @media (max-width: 700px) {
    width: 10rem;
  }
`;

const closed = css`
  width: 0;
  background: transparent;
  cursor: pointer;
  margin-left: -1em;
  padding-left: 1em;
`;

export default styled(SearchBox)`
  transition: var(--transition);
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 0;
  height: 100%;
  background: var(--text);
  padding: 2rem 4rem 2rem 0;

  @media (max-width: 700px) {
    padding: 2rem 2rem 2rem 0;
  }

  .SearchInput {
    outline: none;
    border: ${({ hasFocus }) => (hasFocus ? 'auto' : 'none')};
    font-size: 1em;
    transition: 100ms;
    border-radius: 2px;
    color: var(--textHighlight);
    ::placeholder {
      color: var(--textHighlight);
      opacity: 0.75;
    }
    ${({ hasFocus }) => (hasFocus ? open : closed)}

    @media (max-width: 700px) {
      font-size: 1.5rem;
    }
  }

  .SearchIcon {
    transition: var(--transition);
    width: 1em;
    margin: 0.3em;
    color: var(--textHighlight);
    pointer-events: none;

    @media (max-width: 700px) {
      width: 1.5rem;
    }
  }
`;
