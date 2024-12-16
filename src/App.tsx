import strings from './constants/strings';
import Filters from './components/Filters';
import IngredientInput from './components/IngredientInput';
import RecipeDisplay from './components/RecipeDisplay';
import axios from 'axios';

// TODO: Remove; Use openai npm pkg
// TODO: Add proper types
const fetchRecipe = async (ingredients: any, filters: any) => {
  const prompt = `
    I have the following ingredients: ${ingredients.join(', ')}.
    Please suggest a recipe considering these filters:
    - Cuisine: ${filters.cuisine || 'any'}
    - Dietary Restrictions: ${filters.dietary || 'none'}
    - Cooking Time: ${filters.time || 'any'} minutes
  `;

  const response = await axios.post(
    'https://api.openai.com/v1/completions',
    {
      model: 'text-davinci-003',
      prompt,
      max_tokens: 200,
      temperature: 0.7
    },
    {
      headers: {
        Authorization: `${import.meta.env.VITE_OPEN_AI_KEY}`
      }
    }
  );

  return response.data.choices[0].text.trim();
};

function App() {
  return (
    <>
      <h1>{strings.title}</h1>
      <IngredientInput />
      <Filters />
      <RecipeDisplay />
    </>
  );
}

export default App;
