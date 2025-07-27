import React from 'react';

interface PostProps {
  title: string;
  content: string;
  userId: number;
}

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => (
  <div className="border p-4 shadow rounded-md bg-white mb-4">
    <h3 className="font-semibold">{title}</h3>
    <p>{content}</p>
    <span className="text-sm text-gray-500">User ID: {userId}</span>
  </div>
);

export default PostCard;
