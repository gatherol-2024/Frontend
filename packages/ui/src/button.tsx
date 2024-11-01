import { type ButtonProps } from '@lvc/shared/types';
const Button = ({
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) => {
  const SIZE: Record<typeof size, string> = {
    xs: 'px-2 py-1 text-xs font-medium',
    sm: 'px-3 py-1.5 text-sm font-medium',
    md: 'px-4 py-2 text-base font-semibold',
    lg: 'px-5 py-3 text-lg font-semibold',
    xl: 'px-6 py-4 text-xl font-bold'
  };
  return (
    <button
      className={`${className} ${SIZE[size]} flex items-center justify-center gap-2 outline-none`}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
