import Link from 'next/link';

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <nav className="space-x-4">
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/users">Users</Link>
    </nav>
  </header>
);

export default Header;
