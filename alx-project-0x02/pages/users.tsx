import { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import UserCard from '../components/common/UserCard';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <>
      <Header />
      <main className="p-4">
        <h1 className="text-xl font-bold mb-4">Users</h1>
        {users.map((user: any) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            address={`${user.address.street}, ${user.address.city}`}
          />
        ))}
      </main>
    </>
  );
}
