import { useState } from 'react';
import { SelectChangeEvent, TextField } from '@mui/material';
import Select from './common/Select';
import strings from '../constants/strings';
import { cuisineTypes, dietaryRestrictions } from '../constants/data';

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
      <Select
        ariaLabel={strings.cuisine}
        data={cuisineTypes}
        id='cuisine-restriction-select'
        label={strings.cuisine}
        labelId='cuisine-select-label'
        name='cuisine'
        onChange={handleChange}
        value={filters.cuisine}
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
      <TextField
        id='outlined-number'
        label='Max Cooking Time'
        name='time'
        // @ts-ignore TODO: Fix type
        onChange={handleChange}
        slotProps={{
          inputLabel: {
            shrink: true
          }
        }}
        type='number'
        variant='filled'
      />
    </div>
  );
};

export default Filters;
