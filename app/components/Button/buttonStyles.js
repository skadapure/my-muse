import { css } from 'styled-components';

const buttonStyles = css`
  vertical-align: middle;
  display: inline-block;
  box-sizing: border-box;
  padding: 0.1em .6em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #000000;
  color: #000000;
  &:active {
    background: #696969;
    color: #000;
  }
`;

export default buttonStyles;
