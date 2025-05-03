import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Roadmaster',
      description: 'Roadmaster is a commercial cross-platform mobile application built with Flutter, accompanied by a RESTful API (Node.js, TypeScript) and an admin dashboard developed in Next.js. Designed to help users in Benin prepare for their driving license exam through a freemium model, it offers 920 questions, 42 topics, and 278 traffic signs based on the Code Rousseau. The app allows learners to review driving theory, study road signs, take mock exams, and track their progress over time. Additionally, a dedicated instructor interface enables driving school monitors to follow student activity and performance, making it a complete and collaborative educational tool.',
      image: 'https://lh3.googleusercontent.com/d/1n03HLdCPAyZr9Y5IEEQy6OHCiFpM0qag',
      tech: ['Flutter', 'Nodejs', 'Javascript', 'Typescript', 'Nextjs', 'Firebase', 'MongoDb', 'Figma', 'Postman'],
      github: 'https://github.com/AmanMenda/roadmaster',
      live: null,
    },
    {
      title: 'DressCode (Work in progress)',
      description: 'DressCode is more than a simple wardrobe organizer—it is a personal fashion assistant that uses artificial intelligence to enhance everyday outfit planning. The application enables users to digitize their wardrobe, receive personalized outfit suggestions based on their preferences, weather conditions, or upcoming events, and interact with a smart virtual assistant to get instant style advice. By combining interactive design and Retrieval-Augmented Generation (RAG), DressCode offers a seamless, intelligent, and inspiring fashion experience tailored to each user.',
      image: 'https://cdn.dribbble.com/userupload/15138722/file/original-b182b5cfdde42d696fa10197b0a4a495.png?resize=1928x1446&vertical=center',
      tech: ['Flutter', 'NestJs', 'PostgreSQL', 'DeepSeek API', 'HiveAI', 'Python', 'Postman', 'Swagger'],
      github: 'https://github.com/DressCodeTeam/dresscode',
      live: null,
    },
    {
      title: 'Neuralib',
      description: 'Neuralib is a lightweight Python library developed from scratch to explore the fundamentals of deep learning. Built using NumPy, Matplotlib, and Pandas, it supports dense neural networks and perceptrons, various activation and loss functions, and multiple weight initialization methods. It serves as a practical educational tool for understanding the building blocks of artificial neural networks and is available on GitHub for open-source contributions and experimentation.',
      image: 'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tech: ['Python', 'Numpy', 'Matplotlib', 'Pandas', 'Deep Learning'],
      github: 'https://github.com/LuckMeelo/neuralib',
      live: null,
    },
    {
      title: 'LibrApi',
      description: 'LibrApi is a .NET 8 library designed to streamline the development of RESTful APIs using C# and Entity Framework. It encapsulates common patterns such as CRUD operations, pagination, filtering, sorting, searching, partial responses, structured logging, and API versioning. The goal is to provide a robust, extensible, and developer-friendly foundation that minimizes repetitive code while ensuring clean architecture and maintainability across projects.',
      image: 'https://images.unsplash.com/photo-1690585703267-de31ea667ef0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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