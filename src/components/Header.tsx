import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link to="/" className="font-bold">AI Website</Link>
        <div>
          <Link to="/" className="px-2">Home</Link>
          <Link to="/about" className="px-2">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;