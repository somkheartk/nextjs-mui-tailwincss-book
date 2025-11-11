import { Button as MuiButton } from '@mui/material';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
}

export default function Button({ 
  label, 
  onClick, 
  variant = 'contained',
  color = 'primary' 
}: ButtonProps) {
  return (
    <MuiButton 
      variant={variant}
      color={color}
      onClick={onClick}
      className="px-6 py-2"
    >
      {label}
    </MuiButton>
  );
}
