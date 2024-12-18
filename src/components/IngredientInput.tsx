import { FormEvent, useState } from 'react';

const IngredientInput = ({ onSubmit }: IngredientInput) => {
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
