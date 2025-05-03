import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      skills: ['C', 'C++', 'C#', 'Dart', 'Java', 'JavaScript', 'Python', 'Haskell'],
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['Flutter', '.Net', 'Angular', 'React', 'Nodejs', 'Expressjs', 'FastAPI'],
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'Firebase', 'PostgreSQL', 'MySQL', 'SQLServer'],
    },
    {
      title: 'DevOps',
      skills: ['Git', 'CI/CD', 'Docker', 'Jenkins', 'Microsoft Azure', 'Kubernetes'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-[#6049ea] mb-4">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="text-gray-300 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-[#6049ea] rounded-full" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;