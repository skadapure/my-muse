/**
 * Recipe
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */
import React from 'react';
import styled from 'styled-components';
import MainMessage from 'components/MainMessage';
import RecipeBrief from 'components/RecipeBrief';
import messages from './messages';
import recipes from '../../recipes';

const UL = styled.ul`
  list-style-type: none;
  padding: 0;
`;
export default function RecipesPage() {
  let key = '';
  return (
    <div>
      <MainMessage header={messages.header} detail={messages.introduction} />
      <UL>
        {recipes.recipes.map((item) => {
          key = item.title;
          return (<li key={key}>
            <RecipeBrief recipeDetails={item} />
          </li>);
        })}
      </UL>
    </div>
  );
}
