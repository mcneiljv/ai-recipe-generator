import { useState } from 'react';
import strings from '../constants/strings';
import { dietaryRestrictions } from '../constants/dietaryRestrictions';
import Select from './common/Select';
import { SelectChangeEvent } from '@mui/material';

const Filters = ({ onChange }: Filters) => {
  const [filters, setFilters] = useState<RecipeFilters>({
    cuisine: '',
    dietary: '',
    time: ''
  });

  const handleChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    onChange({ ...filters, [name]: value });
  };

  // TODO: Add strings to str file
  // NOTE: Add food allergies
  return (
    <div>
      <label>Cuisine:</label>
      <input
        name='cuisine'
        onChange={handleChange}
        placeholder='e.g., Italian'
      />
      <Select
        ariaLabel={strings.dietaryRestrictions}
        data={dietaryRestrictions}
        id='dietary-restriction-select'
        label={strings.dietaryRestrictions}
        labelId='dietary-select-label'
        name='dietary'
        onChange={handleChange}
        value={filters.dietary}
      />
      <label>Max Cooking Time (minutes):</label>
      <input name='time' type='number' onChange={handleChange} />
    </div>
  );
};

export default Filters;
