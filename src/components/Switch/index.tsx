import { ComponentProps } from 'react';
import { Switch as MuiSwitch } from '@mui/material';

type SwitchProps = ComponentProps<typeof MuiSwitch>;

function Switch(props: SwitchProps) {
  return (
    <MuiSwitch
      {...props}
      sx={{
        '& .MuiSwitch-track': {
          backgroundColor: 'var(--bg-color)',
        },
      }}
    />
  );
}

export { Switch };
