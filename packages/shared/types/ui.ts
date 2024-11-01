import { ButtonHTMLAttributes } from 'react'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface CommonProps {
  size?: Size
  className?: string
}

export interface ButtonProps
  extends CommonProps,
    ButtonHTMLAttributes<HTMLButtonElement> {}
