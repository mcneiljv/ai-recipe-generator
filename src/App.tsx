import './App.css';
import strings from './constants/strings';
import Filters from './components/Filters';
import IngredientInput from './components/IngredientInput';
import RecipeDisplay from './components/RecipeDisplay';

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
