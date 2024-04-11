import { ComponentProps } from 'react';
import { InputBase as MuiInput } from '@mui/material';
import { input } from './input.module.css';

type InputProps = ComponentProps<typeof MuiInput>;

function Input(props: InputProps) {
  return (
    <MuiInput
      {...props}
      sx={{
        '& .MuiInputBase-input': {
          color: 'var(--bg-color)',
        },
        '&': {
          border: '2px solid var(--bg-color)',
          borderRadius: '8px',
          padding: '8px',
        },
      }}
    />
  );
}

export { Input };
