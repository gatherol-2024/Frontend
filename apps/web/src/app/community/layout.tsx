import { ReactNode } from 'react';
import Sidebar from '../../components/community/sidebar';

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex w-full flex-col gap-8">
      <span>온라인 1234</span>
      <div className="relative flex h-full w-full gap-8">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
