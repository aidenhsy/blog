'use client';
import PostCreate from '@/app/components/PostCreate';
import axios from 'axios';
import { useState, useEffect, Suspense } from 'react';
import PostList from './components/PostList';

const HomePage = () => {
  const [posts, setPosts] = useState({});
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get('http://localhost:4002/posts');
      console.log(data);
      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center space-y-10 p-24">
      <Suspense fallback={<div>loading ...</div>}>
        <PostCreate posts={posts} setPosts={setPosts} />
        <PostList posts={posts} />
      </Suspense>
    </main>
  );
};

export default HomePage;
