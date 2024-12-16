import { useState } from 'react';
import strings from './constants/strings';
import Filters from './components/Filters';
import IngredientInput from './components/IngredientInput';
import RecipeDisplay from './components/RecipeDisplay';
import { fetchRecipe } from './api/fetchRecipe';

// // TODO: Remove; Use openai npm pkg
// // TODO: Add proper types
// const fetchRecipe = async (ingredients: any, filters: any) => {
//   const messages = [
//     {
//       role: 'system',
//       content:
//         'You are a helpful assistant that generates recipes based on given ingredients and filters.'
//     },
//     {
//       role: 'user',
//       content: `
//         I have the following ingredients: ${ingredients.join(', ')}.
//         Please suggest a recipe considering these filters:
//         - Cuisine: ${filters.cuisine || 'any'}
//         - Dietary Restrictions: ${filters.dietary || 'none'}
//         - Cooking Time: ${filters.time || 'any'} minutes.
//       `
//     }
//   ];

//   try {
//     const response = await axios.post(
//       'https://api.openai.com/v1/chat/completions',
//       {
//         model: 'gpt-3.5-turbo-16k',
//         messages,
//         max_tokens: 200,
//         temperature: 0.7
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${import.meta.env.VITE_OPEN_AI_KEY}`
//         }
//       }
//     );

//     return response.data.choices[0].message.content.trim();
//   } catch (error) {
//     console.error('Error fetching recipe:', error);
//     throw new Error('Failed to fetch recipe. Please try again.');
//   }
// };

const App = () => {
  const [recipe, setRecipe] = useState('');
  const [filters, setFilters] = useState({});

  console.log('recipe', recipe);
  console.log(
    'import.meta.env.VITE_OPEN_AI_KEY',
    import.meta.env.VITE_OPEN_AI_KEY
  );

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
