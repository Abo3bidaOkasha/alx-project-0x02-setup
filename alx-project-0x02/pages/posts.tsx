import { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import PostCard from '../components/common/PostCard';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <>
      <Header />
      <main className="p-4">
        <h1 className="text-xl font-bold mb-4">Posts</h1>
        {posts.map((post: any) => (
          <PostCard key={post.id} title={post.title} content={post.body} userId={post.userId} />
        ))}
      </main>
    </>
  );
}
