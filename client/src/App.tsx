import { useState } from 'react';
import { Typography } from '@mui/material';
import strings from './constants/strings';
import Filters from './components/Filters';
import IngredientInput from './components/IngredientInput';
import RecipeDisplay from './components/RecipeDisplay';
import { fetchRecipe } from './api/fetchRecipe';

const App = () => {
  const [recipe, setRecipe] = useState<string>('');
  const [filters, setFilters] = useState<RecipeFilters>({
    cuisine: '',
    dietary: '',
    time: ''
  });

  const handleGenerate = async (ingredients: string[]) => {
    const result = await fetchRecipe(ingredients, filters);
    setRecipe(result ?? '');
  };

  return (
    <div>
      <Typography variant='h2' component='h1'>
        {strings.title}
      </Typography>
      <IngredientInput onSubmit={handleGenerate} />
      <Filters onChange={setFilters} />
      <RecipeDisplay recipe={recipe} />
    </div>
  );
};

export default App;
