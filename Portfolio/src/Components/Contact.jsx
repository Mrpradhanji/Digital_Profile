import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-6">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <p>Phone: 8429746195</p>
      <p>Email: <a href="mailto:rohit@example.com" className="text-blue-500 hover:underline">rohit@example.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/rohit-singh-29981a298/" target="_blank" className="text-blue-500 hover:underline">Rohit Kumar Singh</a></p>
      <p>GitHub: <a href="https://github.com/Mrpradhanji" target="_blank" className="text-blue-500 hover:underline">Mrpradhanji</a></p>
    </section>
  );
};

export default Contact;
