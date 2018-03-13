import recipes from '../../recipes';

export default function selectRecipe(pathName) {
  let recipe = {};
  switch (pathName) {
    case 'eggless-pancakes':
      recipe = recipes.egglessPancakes;
      break;
    default:
      recipe = undefined;
      break;
  }
  return recipe;
}
