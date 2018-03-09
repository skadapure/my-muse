/**
 * A link to a certain page, an anchor tag
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import A from 'components/A';
import Img from './Img';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 750px) {
    min-height: 200px;
  }
  @media (min-width: 750px) {
    flex-direction: row;
    max-height: 150px;
  }
`;

const RecipeText = styled.div`
  flex: 1 1 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: justify;
  @media (min-width: 750px) {
    margin-left: 1rem;
    margin-top: 0;
  }
`;

export default function RecipeBrief(props) {
  return (
    <Div>
      <Img image={props.recipe.image} />
      <RecipeText>{props.recipe.shortDescription}<A href={props.recipe.path} style={{ marginLeft: '1rem' }}>show more...</A></RecipeText>
    </Div>
  );
}

RecipeBrief.propTypes = {
  recipe: PropTypes.object.isRequired,
};

