import { ChangeEvent, useState } from 'react';

const Filters = ({ onChange }: Filters) => {
  const [filters, setFilters] = useState<RecipeFilters>({
    cuisine: '',
    dietary: '',
    time: ''
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    onChange({ ...filters, [name]: value });
  };

  // TODO: Add strings to str file
  return (
    <div>
      <label>Cuisine:</label>
      <input
        name='cuisine'
        onChange={handleChange}
        placeholder='e.g., Italian'
      />
      <label>Dietary Restrictions:</label>
      <input
        name='dietary'
        onChange={handleChange}
        placeholder='e.g., vegetarian'
      />
      <label>Max Cooking Time (minutes):</label>
      <input name='time' type='number' onChange={handleChange} />
    </div>
  );
};

export default Filters;
