import React from 'react';

const ProjectCard = ({ project }) => {
  const handleClick = () => {
    console.log(`Project ${project.id} clicked!`);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg hover:opacity-75 cursor-pointer mx-4 md:mx-0" onClick={handleClick}>
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-semibold">{project.title}</h3>
    </div>
  );
};

export default ProjectCard;
