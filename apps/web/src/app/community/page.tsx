'use client';
import { Button, Dropdown, Input } from '@lvc/ui';
import { useState } from 'react';
import BoardItem from '../../components/community/board/item';
import { CATEGORY } from '../../constants/category';
import { useBoard } from '@lvc/shared/hooks';

const CommunityPage = () => {
  const [category, setCategory] = useState('ALL');
  const { posts } = useBoard(category);
  const ItemList = posts?.map(({ ...props }) => (
    <BoardItem {...props} key={props.id} />
  ));
  return (
    <div className="flex flex-1 flex-col gap-8">
      <div className="w-full flex-1">
        <div className="sticky top-0 z-10 flex items-center gap-4 rounded-t-md bg-white p-4 shadow-md">
          <Dropdown
            className="rounded-md border border-gray-300 bg-inherit"
            value={category}
            setValue={setCategory}
            items={CATEGORY}
          />

          <Input
            className="outline-primary flex-1 rounded-md border border-gray-300"
            placeholder="제목 또는 내용으로 검색"
          />
          <Button className="bg-primary rounded-md text-white">글쓰기</Button>
        </div>
        <div className="mt-4 bg-white shadow-md">{ItemList}</div>
      </div>
    </div>
  );
};

export default CommunityPage;
