import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Roadmaster',
      description: 'Application mobile commerciale cross-platform, avec une API REST et un Dashboard admin. Elle facilite la préparation aux examens du permis de conduire via un modèle freemium et propose 920 questions, 42 sujets, et 278 panneaux tirés du Code Rousseau.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      tech: ['Flutter', 'Nodejs', 'Javascript', 'Typescript', 'Nextjs', 'Firebase', 'MongoDb', 'Figma', 'Postman'],
      github: 'https://github.com/AmanMenda/roadmaster',
      live: null,
    },
    {
      title: 'DressCode',
      description: 'DressCode is more than a simple wardrobe organizer—it is a personal fashion assistant that uses artificial intelligence to enhance everyday outfit planning. The application enables users to digitize their wardrobe, receive personalized outfit suggestions based on their preferences, weather conditions, or upcoming events, and interact with a smart virtual assistant to get instant style advice. By combining interactive design and Retrieval-Augmented Generation (RAG), DressCode offers a seamless, intelligent, and inspiring fashion experience tailored to each user.',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80',
      tech: ['Flutter', 'NestJs', 'PostgreSQL', 'DeepSeek API', 'HiveAI', 'Python', 'Postman', 'Swagger'],
      github: 'https://github.com/DressCodeTeam/dresscode',
      live: null,
    },
    {
      title: 'Neuralib',
      description: 'Neuralib is a lightweight Python library developed from scratch to explore the fundamentals of deep learning. Built using NumPy, Matplotlib, and Pandas, it supports dense neural networks and perceptrons, various activation and loss functions, and multiple weight initialization methods. It serves as a practical educational tool for understanding the building blocks of artificial neural networks and is available on GitHub for open-source contributions and experimentation.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tech: ['Python', 'Numpy', 'Matplotlib', 'Pandas', 'Deep Learning'],
      github: 'https://github.com/LuckMeelo/neuralib',
      live: null,
    },
    {
      title: 'LibrApi',
      description: 'LibrApi is a .NET 8 library designed to streamline the development of RESTful APIs using C# and Entity Framework. It encapsulates common patterns such as CRUD operations, pagination, filtering, sorting, searching, partial responses, structured logging, and API versioning. The goal is to provide a robust, extensible, and developer-friendly foundation that minimizes repetitive code while ensuring clean architecture and maintainability across projects.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tech: ['C#', '.Net', 'Swagger', 'SQL Server', 'Entity Framework', 'Postman'],
      github: 'git@github.com:LuckMeelo/libra-api.git',
      live: null,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black/95">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/5 rounded-lg overflow-hidden group hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm text-[#6049ea] bg-[#6049ea]/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                {project.github != null ? <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#6049ea] transition-colors duration-300 flex items-center gap-2"
                  >
                    <Github size={20} />
                    Code
                  </a> : null}
                  {project.live != null ? <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#6049ea] transition-colors duration-300 flex items-center gap-2"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a> : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;