import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import ParticlesBackground from './ParticlesBackground';
import CodeBlock from './CodeBlock';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <ParticlesBackground />

      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 flex items-center"
          >
            <span className="text-lg md:text-xl font-mono text-gray-400">
              asjad@portfolio:~$
            </span>
            <span className="text-lg md:text-xl text-brand-accent ml-2">
              Hi, my name is
            </span>
            <span className="blinking-cursor text-2xl">|</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 tracking-tighter drop-shadow-lg"
          >
            Asjad Akhtar<span className="text-brand-accent">.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-3"
          >
            <TypeAnimation
              sequence={[
                'I build solutions for the web.',
                1500,
                'I engineer low-level systems.',
                1500,
                'I craft elegant code, from browser to bare metal.',
                2000,
              ]}
              wrapper="h2"
              speed={40}
              className="text-2xl md:text-4xl font-bold text-gray-300 tracking-tight h-10 md:h-auto"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-400 max-w-xl mt-6 text-lg"
          >
            A passionate software engineer with a knack for solving complex
            problems across the full stack and deep into the system.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex items-center flex-wrap gap-4"
          >
            <a
              href="/Asjad_Akhtar_CV.pdf"
              download
              className="bg-brand-accent text-brand-dark font-bold py-3 px-6 rounded-md hover:bg-brand-accent-hover transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl shadow-brand-accent/20"
            >
              <HiOutlineDocumentDownload size={22} />
              <span>Download CV</span>
            </a>
            <div className="flex space-x-5">
              <a
                href="https://github.com/iasjad/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transform hover:-translate-y-1 hover:text-brand-accent transition-all duration-300"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/iasjad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transform hover:-translate-y-1 hover:text-brand-accent transition-all duration-300"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="w-full">
          <CodeBlock />
        </div>
      </div>
    </section>
  );
};

export default Hero;
