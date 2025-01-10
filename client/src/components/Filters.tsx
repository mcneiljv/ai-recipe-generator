import { useState } from 'react';
import { Box } from '@mui/material';
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

  const handleChange = (e: UnifiedChangeEvent) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    onChange({ ...filters, [name]: value });
  };

  return (
    <Box>
      <Select
        aria-label={strings.cuisine}
        data={cuisineTypes}
        id='cuisine-restriction-select'
        label={strings.cuisine}
        labelId='cuisine-select-label'
        name='cuisine'
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
        onChange={handleChange}
        value={filters.dietary}
      />
      <Text
        id='time-number-input'
        label={strings.maxCookingTime}
        name='time'
        onChange={handleChange}
        type='number'
        variant='filled'
      />
    </Box>
  );
};

export default Filters;
