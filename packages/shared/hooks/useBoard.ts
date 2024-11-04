import { useEffect, useState } from 'react';
import { createSocket } from '../api';
const useBoard = (category: string) => {
  const ws = createSocket();
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = () => {
      if (category !== 'ALL') ws.emit('getPostByCategory', category);
      else ws.emit('getAllPosts');
    };

    fetchPosts();

    ws.on('postsFetched', (fetchedPosts: any) => {
      console.log(fetchedPosts);
      setPosts(fetchedPosts);
    });

    ws.on('getPostByCategory', (filteredPosts: any) => {
      setPosts(filteredPosts);
    });

    ws.on('newPost', (newPost: any) => {
      setPosts((prevPosts) => [newPost, ...prevPosts]);
    });

    ws.on('postDeleted', (deletedPostId: any) => {
      setPosts((prevPosts) =>
        prevPosts.filter((post) => post.id !== deletedPostId)
      );
    });

    ws.on('postUpdated', () => {
      fetchPosts();
    });

    return () => {
      ws.off('postsFetched');
      ws.off('getPostByCategory');
      ws.off('newPost');
      ws.off('postDeleted');
      ws.off('postUpdated');
    };
  }, [category]);

  const deletePost = (id: number) => {};

  const updatePost = (data: any) => {
    ws.emit('updatePost', data);
  };

  const createPost = (data: any) => {
    console.log('created');
    ws.emit('createPost', data);
  };

  return { posts, deletePost, createPost, updatePost };
};

export default useBoard;
