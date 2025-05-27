import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="mb-0">© {new Date().getFullYear()} Task Manager. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0 d-flex align-items-center justify-content-md-end">
              Made with <Heart size={16} className="mx-1 text-danger" /> using MERN Stack
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;