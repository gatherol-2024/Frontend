import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface CommonProps {
  size?: Size;
  className?: string;
}

interface ItemType {
  itemTitle: string;
  itemValue: string;
}

export interface ButtonProps
  extends CommonProps,
    ButtonHTMLAttributes<HTMLButtonElement> {}

export interface DropdownProps extends CommonProps {
  items: ItemType[];
  value: any;
  setValue: (v: any) => void;
}

export interface InputProps
  extends CommonProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {}
