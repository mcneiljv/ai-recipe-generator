import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPEN_AI_KEY,
  dangerouslyAllowBrowser: true
});

export const fetchRecipe = async (
  ingredients: string[],
  filters: RecipeFilters
): Promise<string | null> => {
  const chatCompletion: OpenAI.Chat.Completions.ChatCompletion =
    await client.chat.completions
      .create({
        max_tokens: 200,
        messages: [
          {
            role: 'system',
            content:
              'You are a helpful assistant that generates recipes based on given ingredients and filters.'
          },
          {
            role: 'user',
            content: `
            I have the following ingredients: ${ingredients.join(', ')}.
            Please suggest a recipe considering these filters:
            - Cuisine: ${filters.cuisine || 'any'}
            - Dietary Restrictions: ${filters.dietary || 'none'}
            - Cooking Time: ${filters.time || 'any'} minutes.
          `
          }
        ],
        model: 'gpt-3.5-turbo-16k'
      })
      .catch((error: Error) => {
        console.error('Error fetching recipe:', error);
        throw new Error('Failed to fetch recipe. Please try again.');
      });

  return chatCompletion.choices[0].message.content;
};
