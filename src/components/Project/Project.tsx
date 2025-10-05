"use client";

import Image from "next/image";

interface ProjectProps {
  project: {
    name: string;
    img: string;
    description1: string;
    description2: string;
    live: string;
    client: string;
    server?: string;
  };
}

const Project = ({ project }: ProjectProps) => {
  const { name, img, description1, description2, live, client, server } =
    project;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="h-48 overflow-hidden relative">
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{name}</h3>
        <ul className="space-y-2 mb-6">
          <li className="text-gray-600 flex items-start">
            <span className="text-purple-600 mr-2 mt-1">•</span>
            <span>{description1}</span>
          </li>
          <li className="text-gray-600 flex items-start">
            <span className="text-purple-600 mr-2 mt-1">•</span>
            <span>{description2}</span>
          </li>
        </ul>
        <div className="flex flex-wrap gap-2">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition-colors duration-300 text-sm font-medium"
          >
            Live Demo
          </a>
          <a
            href={client}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-gray-800 hover:bg-black text-white py-2 px-4 rounded transition-colors duration-300 text-sm font-medium"
          >
            Code
          </a>
          {server && (
            <a
              href={server}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded transition-colors duration-300 text-sm font-medium"
            >
              Server
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
