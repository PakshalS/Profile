import React, { useState } from 'react';
import Tab from './projecttab';
import ProjectCard from './card';
import project1 from '../assets/project-img1.png';
import project2 from '../assets/project-img2.png';
import project3 from '../assets/project-img3.png';

const projects = {
  tab1: [
    { id: 1, title: 'Solar Monitoring System', image: project1 },
    { id: 2, title: 'Smart Meeting Manager', image: project2 },
    { id: 3, title: 'Profile Website', image: project3 },
  ],
  tab2: [
    { id: 4, title: 'Project 4', image: project1 },
    { id: 5, title: 'Project 5', image: project2 },
    { id: 6, title: 'Project 6', image: project3 },
  ],
  tab3: [
    
  ]
};

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div id="projects" className="py-16 bg-black text-white">
      <div className="container mx-auto text-center px-4 md:px-0">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="max-w-xl mx-auto mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, vel? Maiores voluptates culpa nihil modi voluptatum consectetur, ea totam quas saepe incidunt eveniet sit vero officia! Sint iste enim quos?
        </p>
        <div className="flex justify-center mb-8">
          <Tab label="Tab 1" activeTab={activeTab} setActiveTab={setActiveTab} />
          <Tab label="Tab 2" activeTab={activeTab} setActiveTab={setActiveTab} />
          <Tab label="Tab 3" activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects[activeTab].map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
