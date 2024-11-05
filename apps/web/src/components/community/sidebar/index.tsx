'use client';
import { Button } from '@lvc/ui';
import SidebarItem from './item';
import Link from 'next/link';
import { useAppSelector } from '@lvc/shared/store';

const Sidebar = () => {
  const recentPost = useAppSelector((state) => state.recentPostReducer);
  return (
    <div className="sticky top-0 hidden h-fit w-64 flex-col gap-4 rounded-md lg:flex">
      <Link href="http://localhost:8080/auth/google">
        <Button className="bg-primary w-full rounded-md text-white">
          로그인
        </Button>
      </Link>
      <SidebarItem
        title="카테고리"
        items={['전체', '잡담', '팀 구하기', '전체', '잡담']}
      />
      <SidebarItem
        title="최근 본 글"
        items={recentPost?.map((post) => post?.title)}
      />
    </div>
  );
};

export default Sidebar;
