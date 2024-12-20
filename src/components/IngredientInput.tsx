import { FormEvent, useState } from 'react';
import Text from './common/Text';
import { Button } from '@mui/material';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const IngredientInput = ({ onSubmit }: IngredientInput) => {
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(ingredients.split(',').map((item) => item.trim()));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setIngredients(e.target.value);
  };

  // TODO: Add strings to str file
  return (
    <form onSubmit={handleSubmit}>
      <Text
        helperText='e.g. Tofu, buffalo sauce'
        id='outlined-number'
        label='Ingredients'
        maxRows={4}
        multiline
        name='time'
        onChange={handleChange}
        type='text'
        value={ingredients}
        variant='filled'
      />
      <Button type='submit' variant='contained' endIcon={<RestaurantIcon />}>
        Generate Recipe
      </Button>
    </form>
  );
};

export default IngredientInput;
