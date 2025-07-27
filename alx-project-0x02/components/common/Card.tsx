import React from 'react';
import { type CardProps };
interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => (
  <div className="border p-4 shadow rounded-md bg-white">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p>{content}</p>
  </div>
);

export default Card;
