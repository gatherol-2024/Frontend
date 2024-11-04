import { CommentType } from '@lvc/shared/types';
import { timeSince } from '@lvc/shared/utils';
import { Button } from '@lvc/ui';
import { useState } from 'react';
import { LuThumbsUp } from 'react-icons/lu';
import CommentForm from './form';
interface CommentItemProps extends CommentType {
  isReply: boolean;
  createComment: (v: Partial<CommentType>) => void;
}
const CommentItem = ({
  author,
  createdAt,
  content,
  childComments,
  isReply,
  id,
  createComment
}: CommentItemProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleIsFormOpen = () => setIsFormOpen((prev) => !prev);

  const ReplyList = childComments?.map((comment, key) => (
    <CommentItem
      createComment={createComment}
      {...comment}
      key={key}
      isReply={true}
    />
  ));

  return (
    <div
      className={`${!isReply ? 'border-b border-gray-300' : 'pb-0 pl-8'} p-4`}>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="font-medium">{author.name}</span>
          <span className="text-xs text-gray-500">{timeSince(createdAt)}</span>
        </div>
        <span className="text-sm">{content}</span>
        <div className="mt-2 flex items-center gap-2">
          <Button
            size="xs"
            className="border-secondary hover:bg-secondary text-secondary rounded-md border hover:text-white">
            <LuThumbsUp size=".75rem" />2
          </Button>
          {!isReply && (
            <Button
              className="text-gray-500"
              size="xs"
              onClick={toggleIsFormOpen}>
              답글 쓰기
            </Button>
          )}
        </div>
        {isFormOpen && (
          <CommentForm createComment={createComment} parentId={id} />
        )}
        {ReplyList}
      </div>
    </div>
  );
};

export default CommentItem;
