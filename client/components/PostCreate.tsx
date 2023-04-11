import { useState } from 'react';
import axios from 'axios';

const PostCreate = ({ posts, setPosts }: any) => {
  const [title, setTitle] = useState('');
  const newPost = async () => {
    const { data } = await axios.post('http://localhost:4000/posts', {
      title,
    });
    setPosts({ ...posts, [data.id]: data });
    setTitle('');
  };
  return (
    <div>
      <h1>Create new post</h1>
      <div className="flex space-x-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="post title..."
          className="border border-cyan-700 px-3 py-1 rounded"
        />
        <button className="p-3 bg-green-400 rounded" onClick={newPost}>
          Add
        </button>
      </div>
    </div>
  );
};

export default PostCreate;
