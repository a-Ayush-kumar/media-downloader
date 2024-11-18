import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-transparent text-white p-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/a-ayush-kumar" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
            <FaGithub size={30} />
          </a>
          
          <a href="https://linkedin.com/in/ayush-kumar-b75713286" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
            <FaLinkedin size={30} />
          </a>
        </div>
        <p className="text-sm font-bold">© 2024 Ayush Kumar - designed and developed.</p>
      </div>
    </footer>
  );
}
