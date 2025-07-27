import { useState } from 'react';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';
@/components/common/Card
@/components/layout/Header
export default function Home() {
  const [posts, setPosts] = useState<{title: string, content: string}[]>([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
    setShowModal(false);
  };

  return (
    <>
      <Header />
      <main className="p-4">
        <h1 className="text-xl font-bold mb-4">Home Page</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setShowModal(true)}>
          Add Post
        </button>
        {showModal && <PostModal onSubmit={handleAddPost} />}
        <div className="grid gap-4 mt-4">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>
    </>
  );
}
