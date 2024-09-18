import React from 'react';
import UnityGame from './UnityGame';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="my-16">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">My Projects</h2>
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <h3 className="text-xl font-semibold mb-2 p-6">Unity WebGL Project</h3>
          <UnityGame />
        </div>
        {[1, 2, 3].map((project) => (
          <div key={project} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="h-48 bg-gray-300"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
              <p className="text-gray-600">Short description of the project goes here.</p>
              <a href="#" className="mt-4 inline-block bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;