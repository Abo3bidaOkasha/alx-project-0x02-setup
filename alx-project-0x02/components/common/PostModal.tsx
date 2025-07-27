import React, { useState } from 'react';

interface Props {
  onSubmit: (title: string, content: string) => void;
}

const PostModal: React.FC<Props> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    onSubmit(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md">
        <h2 className="text-lg font-bold mb-4">New Post</h2>
        <input className="border p-2 w-full mb-2" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <textarea className="border p-2 w-full mb-2" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
        <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded-md">Submit</button>
      </div>
    </div>
  );
};

export default PostModal;
