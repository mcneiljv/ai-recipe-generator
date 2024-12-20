import {
  BaseSelectProps,
  FormControl,
  InputLabel,
  MenuItem,
  Select as SelectMUI
} from '@mui/material';

interface Select extends BaseSelectProps {
  data: InputData[];
}

const Select = ({ data, id, label, ...rest }: Select) => (
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
