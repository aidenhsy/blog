import PostCreate from '@/components/PostCreate';
import PostList from '@/components/PostList';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
      <PostCreate posts={posts} setPosts={setPosts} />
      <PostList posts={posts} />
    </main>
  );
};

export default HomePage;
