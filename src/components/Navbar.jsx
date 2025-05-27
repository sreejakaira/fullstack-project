import React from 'react';
import { Link } from 'react-router-dom';
import { Clipboard } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container d-flex justify-content-center">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <Clipboard className="me-2" size={24} />
          <span>Task Manager</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;