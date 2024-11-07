import { ReactNode } from 'react';

interface SidebarContainerProps {
  title: string;
  children: ReactNode;
}
const SidebarContainer = ({ title, children }: SidebarContainerProps) => {
  return (
    <div className="flex flex-col gap-2 rounded-md bg-white p-4 shadow-sm">
      <h2 className="font-bold">{title}</h2>
      {children}
    </div>
  );
};

export default SidebarContainer;
