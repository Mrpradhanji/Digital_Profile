import React, { useState } from 'react';
import Modal from './Modal';
import Profile from '../assets/Profile/Profile-photo.jpeg' // Ensure the image is correctly placed in the assets folder

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex flex-col items-center md:flex-row md:justify-between">
      <div className="flex items-center space-x-4">
        <img
          src={Profile}
          alt="Rohit Kumar Singh"
          className="w-24 h-24 rounded-full cursor-pointer"
          onClick={handleImageClick}
        />
        <div>
          <h1 className="text-3xl">Rohit Kumar Singh</h1>
          <p>Frontend Developer | MCA Student</p>
        </div>
      </div>
      <nav className="mt-4 md:mt-0">
        <ul className="flex space-x-4">
          <li><a href="#about" className="text-white hover:underline">About Me</a></li>
          <li><a href="#projects" className="text-white hover:underline">Projects</a></li>
          <li><a href="#contact" className="text-white hover:underline">Contact</a></li>
        </ul>
      </nav>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <img src={Profile} alt="Rohit Kumar Singh" className="w-full h-auto rounded" />
      </Modal>
    </header>
  );
};

export default Header;
