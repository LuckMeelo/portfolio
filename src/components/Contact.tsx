import React from 'react';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-gray-300">
              <Mail className="text-[#6049ea]" size={24} />
              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <a href="mailto:charmeel.vodouhe@epitech.eu" className="hover:text-[#6049ea] transition-colors duration-300">
                  charmeel.vodouhe@epitech.eu
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <Phone className="text-[#6049ea]" size={24} />
              <div>
                <h3 className="font-semibold text-white">Phone</h3>
                <a href="tel:+33616720418" className="hover:text-[#6049ea] transition-colors duration-300">
                  +33 6 16 72 04 18
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <MapPin className="text-[#6049ea]" size={24} />
              <div>
                <h3 className="font-semibold text-white">Location</h3>
                <p>Paris, France</p>
              </div>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/LuckMeelo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#6049ea] transition-colors duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/charmeel-vodouhe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#6049ea] transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Charmeel Vodouhe"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#6049ea] text-white"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#6049ea] text-white"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-[#6049ea] text-white resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#6049ea] text-white py-3 px-6 rounded-lg hover:bg-[#6049ea]/90 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;