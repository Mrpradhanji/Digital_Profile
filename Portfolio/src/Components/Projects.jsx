import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="p-6">
      <h2 className="text-2xl font-bold mb-4">projects</h2>
      <div className="border p-4 mb-4">
        <h3 className="text-xl font-semibold">Rock, Paper, Scissors Game</h3>
        <p>A simple implementation of the classic game using HTML, CSS, and JavaScript.</p>
      </div>
      <div className="border p-4">
        <h3 className="text-xl font-semibold">Amazon Clone</h3>
        <p>Developing a full-stack Amazon clone using Firebase and React.</p>
      </div>
    </section>
  );
};

export default Projects;
