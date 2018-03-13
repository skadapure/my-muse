/**
 * About
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */
import React from 'react';
import styled from 'styled-components';
import Img from './Img';
import selectRecipe from './selectRecipe';

const H4 = styled.h4`
  margin: 1rem auto;
`;

export default function RecipePage(props) {
  const pathName = props.location.pathname; //eslint-disable-line
  const path = pathName.split('/')[pathName.split('/').length - 1];
  const recipe = selectRecipe(path);
  return (
    <article style={{ marginBottom: '1rem' }}>
      <h3>{recipe.title}</h3>
      <section >{recipe.shortDescription}</section>
      <div style={{ marginBottom: '1rem', marginTop: '1rem' }}>
        <Img image={recipe.image} />
      </div>
      <section>{recipe.details}</section>
      {recipe.ingredients &&
        <div>
          <H4>Ingredients</H4>
          <ul>
            { recipe.ingredients.map((item) => {
              const key = item;
              return (<li key={key}>{item}</li>);
            })}
          </ul>
        </div>
      }
      {recipe.steps &&
        <div>
          <H4>Steps</H4>
          <ul>
            { recipe.steps.map((item) => {
              const key = item;
              return (<li key={key}>{item}</li>);
            })}
          </ul>
        </div>
      }
      {recipe.taste &&
        <div>
          <H4>Taste</H4>
          <section>{recipe.taste}</section>
        </div>
      }
      {recipe.notes &&
        <div>
          <H4>Notes</H4>
          <section>{recipe.notes}</section>
        </div>
      }
    </article>
  );
}

