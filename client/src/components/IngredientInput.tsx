import { FormEvent, useState } from 'react';
import { Button } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import strings from '../constants/strings';
import Text from './common/Text';

const IngredientInput = ({ onSubmit }: IngredientInput) => {
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(ingredients.split(',').map((item) => item.trim()));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Text
        helperText={strings.examples}
        id='ingredients-text'
        label={strings.ingredients}
        maxRows={4}
        multiline
        name='ingredients'
        onChange={(e) => setIngredients(e.target.value)}
        type='text'
        value={ingredients}
        variant='filled'
      />
      <Button
        endIcon={<RestaurantIcon />}
        type='submit'
        variant='contained'
        sx={{ m: 1 }}
      >
        {strings.generateRecipe}
      </Button>
    </form>
  );
};

export default IngredientInput;
