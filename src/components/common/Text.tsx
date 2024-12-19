import { BaseTextFieldProps, TextField } from '@mui/material';

interface Text extends BaseTextFieldProps {
  onChange: (e: unknown) => void;
}

const Text = ({
  id,
  label,
  name,
  onChange,
  type,
  value,
  variant,
  ...rest
}: Text) => (
  <TextField
    id={id}
    label={label}
    name={name}
    onChange={onChange}
    slotProps={{
      inputLabel: {
        shrink: true
      }
    }}
    sx={{ m: 1, width: 300 }}
    type={type}
    value={value}
    variant={variant}
    {...rest}
  />
);

export default Text;
