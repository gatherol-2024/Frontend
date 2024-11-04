'use client';
import { usePost } from '@lvc/shared/hooks';
import PostContent from '../../../components/community/post';
import { use } from 'react';
import PostComments from '../../../components/community/post/comment';

const CommunityPostPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const id = use(params).id;
  const { post, comments, createComment } = usePost(id);
  return (
    <div className="flex flex-1 flex-col gap-2">
      {post && <PostContent {...post} commentsCount={comments?.length} />}
      <PostComments createComment={createComment} comments={comments} />
    </div>
  );
};

export default CommunityPostPage;
