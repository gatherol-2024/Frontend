'use client';
import { ReactNode } from 'react';
import Sidebar from '../../components/layout/sidebar';
import { useAppSelector } from '@lvc/shared/store';
import Link from 'next/link';
import { Button } from '@lvc/ui';

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const recentPost = useAppSelector((state) => state.recentPost);
  const Items = recentPost?.map(({ id, title }) => (
    <Link
      key={id}
      className="text-gray-600 hover:text-black"
      href={`/community/${id}`}>
      {title}
    </Link>
  ));
  return (
    <div className="flex w-full flex-col gap-8">
      <span>온라인 1234</span>
      <div className="relative flex h-full w-full gap-8">
        <Sidebar>
          <Link href={'http://localhost:8080/auth/google'}>
            <Button className="bg-primary w-full rounded-md text-white">
              로그인
            </Button>
          </Link>
          <Sidebar.Container title="최근 본 글">{Items}</Sidebar.Container>
        </Sidebar>
        {children}
      </div>
    </div>
  );
};

export default Layout;
