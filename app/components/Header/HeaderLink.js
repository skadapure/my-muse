import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  @media (min-width: 425px) {
    margin: 0.75rem;
  }
  display: inline-flex;
  padding: 0.1em .6em;
  margin: .55em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  border: 1px solid #000000;
  color: #000000;

  &:active {
    background: #DCDCDC;
    color: #000;
  }

  &:hover {
    text-decoration: underline;
  }
`;
