import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import Select from './common/Select';
import Text from './common/Text';
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

  return (
    <div>
      <Select
        aria-label={strings.cuisine}
        data={cuisineTypes}
        id='cuisine-restriction-select'
        label={strings.cuisine}
        labelId='cuisine-select-label'
        name='cuisine'
        // @ts-ignore TODO: Fix type
        onChange={handleChange}
        value={filters.cuisine}
      />
      <Select
        aria-label={strings.dietaryRestrictions}
        data={dietaryRestrictions}
        id='dietary-restriction-select'
        label={strings.dietaryRestrictions}
        labelId='dietary-select-label'
        name='dietary'
        // @ts-ignore TODO: Fix type
        onChange={handleChange}
        value={filters.dietary}
      />
      {/* TODO:Add helper text that says minutes */}
      <Text
        id='outlined-number'
        label='Max Cooking Time'
        name='time'
        // @ts-ignore TODO: Fix type
        onChange={handleChange}
        type='number'
        variant='filled'
      />
    </div>
  );
};

export default Filters;
