import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface CommonProps {
  size?: Size;
  className?: string;
}

export interface ButtonProps
  extends CommonProps,
    ButtonHTMLAttributes<HTMLButtonElement> {}

export interface DropdownProps extends CommonProps {
  items: string[];
  value: any;
  setValue: (v: any) => void;
}

export interface InputProps
  extends CommonProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {}
