import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import strings from '../constants/strings';
import { dietaryRestrictions } from '../constants/dietaryRestrictions';

const Filters = ({ onChange }: Filters) => {
  const [filters, setFilters] = useState<RecipeFilters>({
    cuisine: '',
    dietary: '',
    time: ''
  });

  // TODO: add type
  const handleChange = (e: any) => {
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
      <FormControl variant='standard' sx={{ m: 1, width: 300 }}>
        <InputLabel id='demo-simple-select-label'>
          {strings.dietaryRestrictions}
        </InputLabel>
        <Select
          aria-label={strings.dietaryRestrictions}
          id='dietary-select'
          name='dietary'
          label={strings.dietaryRestrictions}
          labelId='dietary-select-label'
          onChange={handleChange}
          value={filters.dietary}
        >
          {dietaryRestrictions.map((restriction) => (
            <MenuItem key={restriction.value} value={restriction.value}>
              {restriction.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <label>Max Cooking Time (minutes):</label>
      <input name='time' type='number' onChange={handleChange} />
    </div>
  );
};

export default Filters;
