import { FC } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

const Text: FC<TextFieldProps> = (props) => (
  <TextField sx={{ m: 1, width: 300 }} {...props} />
);

export default Text;
