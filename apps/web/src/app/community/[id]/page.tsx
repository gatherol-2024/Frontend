'use client';
import { usePost } from '@lvc/shared/hooks';
import PostContent from '../../../components/community/post';
import { use, useEffect } from 'react';
import PostComments from '../../../components/community/post/comment';
import { addPost, useAppDispatch } from '@lvc/shared/store';

const CommunityPostPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const id = use(params).id;
  const { post, comments, createComment } = usePost(id);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (post) dispatch(addPost(post));
  }, [post]);
  return (
    <div className="flex flex-1 flex-col gap-2">
      {post && <PostContent {...post} commentsCount={comments?.length} />}
      <PostComments createComment={createComment} comments={comments} />
    </div>
  );
};

export default CommunityPostPage;
