/**
 * Recipe
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */
import React from 'react';

import MainMessage from 'components/MainMessage';
import RecipeBrief from 'components/RecipeBrief';
import messages from './messages';
import egglessPancakes from '../../recipes/eggless-pancakes';

export default function RecipesPage() {
  return (
    <div>
      <MainMessage header={messages.header} detail={messages.introduction} />
      <RecipeBrief recipe={egglessPancakes} />
      {/* <RecipeBrief recipe={egglessPancakes} /> */}
    </div>
  );
}
