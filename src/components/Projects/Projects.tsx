"use client";

import { useState } from "react";
import projectsData from "../../data/projects.json";
import Project from "../Project/Project";

const Projects = () => {
  const [projects] = useState(projectsData);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcase of my recent work demonstrating expertise in React,
            Next.js, and modern frontend development. Each project reflects my
            passion for creating efficient, user-friendly web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/codedByMojnu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
