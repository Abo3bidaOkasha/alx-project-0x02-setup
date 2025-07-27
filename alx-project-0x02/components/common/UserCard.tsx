import React from 'react';

interface UserProps {
  name: string;
  email: string;
  address: string;
}

const UserCard: React.FC<UserProps> = ({ name, email, address }) => (
  <div className="border p-4 shadow rounded-md bg-white mb-4">
    <h3 className="font-semibold">{name}</h3>
    <p>{email}</p>
    <p className="text-sm text-gray-500">{address}</p>
  </div>
);

export default UserCard;
