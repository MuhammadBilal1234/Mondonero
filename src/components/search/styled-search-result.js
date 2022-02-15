import styled, { css } from 'styled-components';
import SearchResult from './search-result';

const Popover = css`
  max-height: 80vh;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  z-index: 2;
  right: 0;
  top: 100%;
  width: 80vw;
  max-width: 35rem;
  box-shadow: 0 0 5px 0;
  padding: 1em;
  border-radius: 2px;
  background: var(--textHighlight);
`;

export default styled(SearchResult)`
  display: ${(props) => (props.show ? `block` : `none`)};
  ${Popover}

  .HitCount {
    display: flex;
    justify-content: flex-end;
  }

  .Hits {
    ul {
      list-style: none;
      margin-left: 0;
    }

    li.ais-Hits-item {
      margin-bottom: 1em;

      a {
        color: var(--text);

        h4 {
          margin-bottom: 0.2em;
        }
      }
    }
  }
`;
