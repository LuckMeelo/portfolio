import React from 'react';
import { MapPin, Calendar, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black/95">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin className="text-[#6049ea]" />
              <span>Based in Paris, France</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Calendar className="text-[#6049ea]" />
              <span>3+ Years of Experience</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Code2 className="text-[#6049ea]" />
              <span>Software Engineer</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
            I'm a passionate full-stack developer with a focus on building scalable and reliable software solutions—whether for the web, mobile, or embedded systems.
            My journey in tech has taken me through a wide range of technologies and frameworks, and I'm always eager to stay at the forefront of modern development practices.
            I'm especially enthusiastic about full-stack architecture, artificial intelligence, and Web3 technologies, always seeking opportunities to innovate and learn.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
            When I'm not coding, I enjoy exploring the vibrant streets of Paris and diving into new technologies to continuously sharpen my skills.
            </p>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Developer workspace"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-[#6049ea]/10 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;