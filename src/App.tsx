import { useState } from 'react';
import strings from './constants/strings';
import Filters from './components/Filters';
import IngredientInput from './components/IngredientInput';
import RecipeDisplay from './components/RecipeDisplay';
import { fetchRecipe } from './api/fetchRecipe';

const App = () => {
  const [recipe, setRecipe] = useState('');
  const [filters, setFilters] = useState({});

  // TODO: Add proper type
  const handleGenerate = async (ingredients: any) => {
    const result = await fetchRecipe(ingredients, filters);
    setRecipe(result ?? '');
  };

  return (
    <div>
      <h1>{strings.title}</h1>
      <IngredientInput onSubmit={handleGenerate} />
      <Filters onChange={setFilters} />
      <RecipeDisplay recipe={recipe} />
    </div>
  );
};

export default App;
