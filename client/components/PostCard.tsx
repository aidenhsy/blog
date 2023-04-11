import axios from 'axios';
import { useState } from 'react';

const PostCard = ({ post }: any) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<any[]>(post.comments);

  const addComment = async () => {
    const { data } = await axios.post(
      `http://localhost:4001/posts/${post.id}/comments`,
      { content: comment }
    );
    setComments(data);

    setComment('');
  };

  return (
    <div className="bg-gray-100 p-5 rounded-lg">
      <h1>
        {post.title} {post.id}
      </h1>
      {comments.length > 0 &&
        comments.map((comment: any) => {
          console.log(comment);
          let content;
          switch (comment.status) {
            case 'approved':
              content = comment.content;
              break;
            case 'rejected':
              content = 'the comment has been rejected';
              break;
            case 'pending':
              content = 'comment is pending approval';
              break;
            default:
              content = 'something went wrong';
          }

          return <div key={comment.id}>{content}</div>;
        })}
      <div className="flex space-x-2">
        <input
          className="border-slate-700 border rounded px-3"
          placeholder="add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={addComment} className="bg-violet-400 px-3 rounded">
          add
        </button>
      </div>
    </div>
  );
};

export default PostCard;
