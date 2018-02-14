import styled from 'styled-components';

const Input = styled.input`
  outline: none;
  border: 1px solid;
  font-size: large;
  vertical-align: middle;
  border-radius: 4px;
  color: #808080;

  &:focus {
    color: #000000;
  }
`;

export default Input;
