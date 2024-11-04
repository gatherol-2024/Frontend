import { useEffect, useState } from 'react';
import { createSocket } from '../api';
import { BoardType, CommentType } from '../types';

const usePost = (id: string) => {
  const [post, setPost] = useState<BoardType>();
  const [comments, setComments] = useState<CommentType[]>([]);
  const ws = createSocket();

  useEffect(() => {
    const fetchPosts = () => ws.emit('getPostById', id);
    const fetchComment = () => ws.emit('getCommentsByPost', id);

    fetchComment();
    fetchPosts();

    ws.on('commentsFetched', (fetchedComments: CommentType[]) => {
      setComments(fetchedComments);
    });

    ws.on('newComment', (newComment: CommentType) => {
      setComments((prevComments) => [newComment, ...prevComments]);
    });

    ws.on('postFetched', (fetchedPost: any) => {
      setPost(fetchedPost);
    });

    return () => {
      ws.off('newComment');
      ws.off('commentFetched');
      ws.off('getCommentByPost');
      ws.off('postFetched');
      ws.off('getPostById');
    };
  }, []);

  const createComment = (comment: Partial<CommentType>) => {
    ws.emit('createComment', { ...comment, postId: id });
  };

  return { post, comments, createComment };
};
export default usePost;
