import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="my-16">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">About Me</h2>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <p className="text-gray-600 leading-relaxed">
          This is where you'll add information about yourself. Make it engaging and highlight your key skills and experiences.
        </p>
      </div>
    </section>
  );
};

export default About;