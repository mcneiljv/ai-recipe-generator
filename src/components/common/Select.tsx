import { FC } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as SelectMUI,
  SelectProps
} from '@mui/material';

type Select = SelectProps<string> & {
  data: InputData[];
  id: string;
  label: string;
};

const Select: FC<Select> = ({ data, id, label, ...rest }) => (
  <FormControl variant='filled' sx={{ m: 1, width: 300 }}>
    <InputLabel id={`${id}-label`}>{label}</InputLabel>
    <SelectMUI {...rest}>
      {data.map((item: InputData) => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </SelectMUI>
  </FormControl>
);

export default Select;
