// TODO: Add strings to str file
const RecipeDisplay = ({ recipe }: RecipeDisplay) => (
  <div>
    <h2>Recipe Suggestion:</h2>
    {recipe ? <p>{recipe}</p> : <p>No recipe generated yet.</p>}
  </div>
);

export default RecipeDisplay;
