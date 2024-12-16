import { useState } from 'react';

// TODO: Add proper type
const IngredientInput = ({ onSubmit }: any) => {
  const [ingredients, setIngredients] = useState('');

  // TODO: Add proper type
  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(ingredients.split(',').map((item) => item.trim()));
  };

  // TODO: Add strings to str file
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter Ingredients:</label>
      <input
        type='text'
        placeholder='e.g., eggs, milk, flour'
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <button type='submit'>Generate Recipe</button>
    </form>
  );
};

export default IngredientInput;
