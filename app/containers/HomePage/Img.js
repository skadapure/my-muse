import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Img(props) {
  const Image = styled.div`
  flex: 1 1 0;
  
  min-height: 200px;
  background-size: 100%;
  background-image: url("${props.image}");
  @media (max-width: 750px) {
  }
  @media (min-width: 750px) {
    max-width: 200px;
    max-height: 150px;
    background-size: 200px;
  }
  `;
  return (<Image />);
}

Img.propTypes = {
  image: PropTypes.string,
};

export default Img;
