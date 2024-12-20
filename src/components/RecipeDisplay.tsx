import { Typography } from '@mui/material';
import strings from '../constants/strings';

const RecipeDisplay = ({ recipe }: RecipeDisplay) => (
  <div>
    <Typography variant='h3' component='h2'>
      {strings.recipeSuggestion}
    </Typography>
    {recipe ? (
      <Typography variant='body1'>{recipe}</Typography>
    ) : (
      <Typography variant='body1'>{strings.noRecipeGenerated}</Typography>
    )}
  </div>
);

export default RecipeDisplay;
