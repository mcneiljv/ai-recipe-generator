import './App.css';
import Filters from './components/Filters';
import IngredientInput from './components/IngredientInput';
import RecipeDisplay from './components/RecipeDisplay';

function App() {
  return (
    <>
      <h1>AI Recipe Generator</h1>
      <IngredientInput />
      <Filters />
      <RecipeDisplay />
    </>
  );
}

export default App;
