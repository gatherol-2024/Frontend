import { CommentType } from '@lvc/shared/types';
import { Button } from '@lvc/ui';
import { useState } from 'react';
import { IoImageOutline } from 'react-icons/io5';

interface CommentFormProps {
  parentId?: number;
  createComment: (v: Partial<CommentType>) => void;
}
const CommentForm = ({ createComment, parentId }: CommentFormProps) => {
  const [comment, setComment] = useState('');
  return (
    <div className="p-4">
      <textarea
        onChange={(e) => setComment(e.target.value)}
        placeholder="댓글을 입력하세요"
        className="outline-primary min-h-24 w-full rounded-md border border-gray-300 p-2 text-sm"
      />
      <div className="flex justify-between">
        <Button
          size="sm"
          className="rounded-md border border-gray-300 hover:bg-gray-100">
          <IoImageOutline />
          이미지 첨부
        </Button>
        <Button
          onClick={() =>
            createComment({ content: comment, parentId: parentId })
          }
          size="sm"
          disabled={!!!comment}
          className="bg-primary rounded-md text-white">
          작성하기
        </Button>
      </div>
    </div>
  );
};

export default CommentForm;
