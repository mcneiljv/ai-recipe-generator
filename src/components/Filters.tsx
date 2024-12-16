import { useState } from 'react';

// TODO: Add proper type
const Filters = ({ onChange }: any) => {
  const [filters, setFilters] = useState({
    cuisine: '',
    dietary: '',
    time: ''
  });

  // TODO: Add proper type
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    onChange({ ...filters, [name]: value });
  };

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
