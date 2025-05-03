import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

const Hero = () => {
  const typedText = useTypewriter({
    words: ['Full Stack Developer', 'Charmeel Vodouhe'],
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseTime: 2000,
  });

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#6049ea]/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {typedText}
            <span className="text-[#6049ea] animate-pulse">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Crafting exceptional digital experiences with modern technologies
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/LuckMeelo" target="_blank" rel="noopener noreferrer" 
               className="p-2 hover:text-[#6049ea] transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/charmeel-vodouhe/" target="_blank" rel="noopener noreferrer"
               className="p-2 hover:text-[#6049ea] transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="mailto:charmeel.vodouhe@epitech.eu"
               className="p-2 hover:text-[#6049ea] transition-colors duration-300">
              <Mail size={24} />
            </a>
            <a href="tel:+33616720418"
               className="p-2 hover:text-[#6049ea] transition-colors duration-300">
              <Phone size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;