// TODO: Add proper type
const RecipeDisplay = ({ recipe }: any) => {
  return (
    <div>
      <h2>Recipe Suggestion:</h2>
      {recipe ? <p>{recipe}</p> : <p>No recipe generated yet.</p>}
    </div>
  );
};

export default RecipeDisplay;
