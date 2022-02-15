import React from 'react';
import styled from 'styled-components';

const ToggleSwitchStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;

  label {
    position: relative;
    border-radius: 999px;
    display: block;
    width: 8rem;
    height: 3.6rem;
    transition: var(--transition);
    transition-property: background;
    background: var(--bgHighlight);
    overflow: hidden;
    cursor: pointer;
    color: var(--text);

    @media (max-width: 700px) {
      width: 5rem;
      height: 2.1875rem;
    }

    &:before {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      position: absolute;
      content: 'A';
      font-size: x-small;
      width: 3rem;
      height: 3rem;
      top: 3px;
      left: 3px;
      transition: 3s;
      background: var(--bg);
      font-weight: bold;

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

      &:before {
        content: "V";
        transform: translateX(44px) rotate(360deg);

        @media (max-width: 700px) {
          transform: translateX(27px) rotate(360deg);
        }
      }
    }
  }
`;

export default function ToggleSwitch({ onChange }) {
    const [checked, setChecked] = React.useState(false);

    const toggleSwitch = () => {
      setChecked((prev) => !prev);
      onChange();
    }

    return (
        <ToggleSwitchStyles>
            <input
                type="checkbox"
                id="av-switch"
                onChange={toggleSwitch}
                checked={checked}
            />
            <label htmlFor="av-switch" />
        </ToggleSwitchStyles>
    );
}
