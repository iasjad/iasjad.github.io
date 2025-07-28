import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

const Contact = () => {
  return (
    <footer id="contact" className="py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
        <div className="w-20 h-1 bg-brand-accent mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          I'm currently open to new opportunities and collaborations. Whether
          you have a question or just want to say hi, feel free to reach out. My
          inbox is always open!
        </p>

        <div className="flex justify-center items-center space-x-6 text-gray-300 mb-8">
          <a
            href="mailto:asjad673@gmail.com"
            className="flex items-center space-x-2 hover:text-brand-accent transition-colors"
          >
            <MdEmail size={24} />
            <span>asjad673@gmail.com</span>
          </a>
          <a
            href="tel:+918429881903"
            className="flex items-center space-x-2 hover:text-brand-accent transition-colors"
          >
            <MdPhone size={24} />
            <span>+91 8429881903</span>
          </a>
        </div>

        <div className="flex justify-center space-x-6 mb-10">
          <a
            href="https://github.com/iasjad/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-brand-accent transition-colors"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/iasjad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-brand-accent transition-colors"
          >
            <FaLinkedin size={30} />
          </a>
        </div>

        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Asjad Akhtar. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-2">
          Designed & Built with React and Tailwind CSS.
        </p>
      </motion.div>
    </footer>
  );
};

export default Contact;
