import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center text-gray-400">
          <p>© {new Date().getFullYear()} Charmeel Vodouhe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;