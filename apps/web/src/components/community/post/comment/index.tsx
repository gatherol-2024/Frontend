import { CommentType } from '@lvc/shared/types';
import { useState } from 'react';
import CommentForm from './form';
import CommentItem from './item';
interface PostCommentsProps {
  comments?: CommentType[];
  createComment: (v: Partial<CommentType>) => void;
}
const PostComments = ({ comments, createComment }: PostCommentsProps) => {
  const CommentList = comments?.map((item, key) => (
    <CommentItem
      createComment={createComment}
      key={key}
      {...item}
      isReply={false}
    />
  ));
  return (
    <div className="flex flex-col rounded-t-md bg-white shadow-sm">
      <div className="sticky top-0 z-10 border-b border-gray-300 bg-inherit p-4">
        <span className="text-xl font-semibold">
          댓글 <span className="text-primary">{comments?.length || 0}</span>
        </span>
      </div>
      <CommentForm createComment={createComment} />
      {CommentList}
    </div>
  );
};

export default PostComments;
