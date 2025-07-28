import React from 'react';
import { motion } from 'framer-motion';

import {
  SiCplusplus,
  SiC,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiDart,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiDocker,
  SiGit,
  SiLinux,
  SiArduino,
  SiStmicroelectronics,
  SiKicad,
  SiEspressif,
  SiRaspberrypi,
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { VscGithubAction } from 'react-icons/vsc';

const skills = [
  { name: 'C++', icon: <SiCplusplus className="text-blue-500" /> },
  { name: 'C', icon: <SiC className="text-gray-400" /> },
  { name: 'Python', icon: <SiPython className="text-yellow-400" /> },
  { name: 'Java', icon: <FaJava className="text-red-500" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-300" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" /> },
  { name: 'Dart', icon: <SiDart className="text-blue-400" /> },
  { name: 'React', icon: <SiReact className="text-cyan-400" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
  { name: 'Express', icon: <SiExpress className="text-gray-300" /> },
  { name: 'REST APIs', icon: <TbApi className="text-emerald-400" /> },
  { name: 'SQL', icon: <FaDatabase className="text-sky-500" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  { name: 'Docker', icon: <SiDocker className="text-blue-600" /> },
  { name: 'Git', icon: <SiGit className="text-orange-600" /> },
  { name: 'CI/CD', icon: <VscGithubAction className="text-cyan-300" /> },
  { name: 'Linux', icon: <SiLinux className="text-white" /> },
  { name: 'Arduino', icon: <SiArduino className="text-green-500" /> },
  { name: 'ESP32', icon: <SiEspressif className="text-red-700" /> },
  { name: 'Raspberry Pi', icon: <SiRaspberrypi className="text-red-600" /> },
  { name: 'Kicad', icon: <SiKicad className="text-blue-500" /> },
  {
    name: 'STMicroelectronics',
    icon: <SiStmicroelectronics className="text-yellow-500" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const pillVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const About = () => {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-2">About Me</h2>
        <div className="w-20 h-1 bg-brand-accent mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3">
            <p className="text-gray-300 text-lg mb-4">
              I am a dedicated software engineer with a strong foundation in
              both high-level application development and low-level systems
              programming. My passion lies in solving complex problems and
              building efficient, scalable, and robust software.
            </p>
            <p className="text-gray-300 text-lg">
              From architecting full-stack web applications with React and
              Node.js to implementing cycle-accurate emulators in C++, I enjoy
              bridging the gap between user-facing products and the underlying
              systems that power them.
            </p>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-4">
              Core Technologies
            </h3>
            <motion.div
              className="flex flex-wrap gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={pillVariants}
                  className="bg-gray-800 text-gray-300 text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2 transition-colors duration-300 hover:bg-brand-accent hover:text-brand-dark cursor-default"
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
