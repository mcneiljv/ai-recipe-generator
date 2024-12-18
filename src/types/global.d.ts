interface Filters {
  onChange: (filters: RecipeFilters) => void;
}

type HandleGenerate = (ingredients: string[]) => Promise<void>;

interface IngredientInput {
  onSubmit: HandleGenerate;
}

interface RecipeDisplay {
  recipe: string;
}

interface RecipeFilters {
  cuisine: string;
  dietary: string;
  time: string;
}
