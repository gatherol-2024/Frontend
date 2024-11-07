'use client';
import { ReactNode } from 'react';
interface SidebarMainProps {
  children: ReactNode;
  className?: string;
}
const SidebarMain = ({ children, className }: SidebarMainProps) => {
  return (
    <div
      className={`${className} sticky top-0 hidden h-fit w-64 flex-col gap-4 rounded-md lg:flex`}>
      {children}
    </div>
  );
};

export default SidebarMain;
