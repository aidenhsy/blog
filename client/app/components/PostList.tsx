import PostCard from './PostCard';

const PostList = ({ posts }: any) => {
  return (
    <div className="grid grid-cols-2 gap-5 rounded">
      {Object.values(posts).map((post: any) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
