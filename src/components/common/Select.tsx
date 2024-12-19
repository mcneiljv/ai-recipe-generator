import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as SelectMUI,
  SelectProps
} from '@mui/material';

interface Select extends Omit<SelectProps<string>, 'children'> {
  data: InputData[];
  label: string;
}

const Select = ({ data, id, label, onChange, value, ...rest }: Select) => (
  <FormControl variant='standard' sx={{ m: 1, width: 300 }}>
    <InputLabel id={`${id}-label`}>{label}</InputLabel>
    <SelectMUI
      aria-label={label}
      id={id}
      name={id}
      label={label}
      labelId={`${id}-label`}
      onChange={onChange}
      value={value}
      {...rest}
    >
      {data.map((item: InputData) => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </SelectMUI>
  </FormControl>
);

export default Select;