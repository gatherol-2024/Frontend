'use client';
import { Button, Dropdown, Input } from '@lvc/ui';
import { useRef, useState } from 'react';
import { CATEGORY } from '../../../constants/category';
import dynamic from 'next/dynamic';

const Editor = dynamic(
  () => import('../../../components/community/write/editor')
);

const WritePage = () => {
  const editorRef = useRef();
  const [form, setForm] = useState({
    content: ' ',
    category: 'ALL',
    title: ''
  });

  const handleFormChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-1 flex-col gap-4 bg-white p-4 shadow-md">
      <div className="flex items-center gap-2">
        <Dropdown
          items={CATEGORY}
          value={form.category}
          setValue={(category) => handleFormChange('category', category)}
          className="rounded-md border border-gray-300"
        />
        <Input
          onChange={(e) => handleFormChange('title', e.target.value)}
          placeholder="제목을 입력해주세요"
          className="outline-primary flex-1 rounded-md border border-gray-300"
        />
      </div>
      <Editor
        editorRef={editorRef}
        content={form.content}
        setContent={(content) => handleFormChange('content', content)}
      />
      <div className="flex items-center justify-between">
        <Button
          size="lg"
          className="rounded-md border border-gray-300 hover:bg-gray-100">
          취소
        </Button>
        <Button size="lg" className="bg-primary rounded-md text-white">
          작성하기
        </Button>
      </div>
    </div>
  );
};

export default WritePage;
