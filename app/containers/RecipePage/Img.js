import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Img(props) {
  const Image = styled.div`
  background-size: 100%;
  background-image: url("${props.image}");
  @media (max-width: 750px) {
    min-height: 200px;
  }
  @media (min-width: 750px) {
    min-height: 450px;
  }
  `;
  return (<Image />);
}

Img.propTypes = {
  image: PropTypes.string,
};

export default Img;
