import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { FaBook } from 'react-icons/fa';
import { IoIosPaper } from 'react-icons/io';
import publications from '../data/publications.json';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const Publications = () => {
  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-2">Publications</h2>
        <div className="w-20 h-1 bg-brand-accent mx-auto mb-16"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mx-auto flex flex-col gap-8"
        >
          {publications.map((pub) => (
            <motion.div
              key={pub.title}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 transition-all duration-300 hover:border-brand-accent/50 hover:shadow-lg hover:shadow-brand-accent/10"
            >
              <div className="flex items-start gap-6">
                <div className="text-brand-accent mt-1">
                  {pub.type === 'Book Chapter' ? (
                    <FaBook size={24} />
                  ) : (
                    <IoIosPaper size={28} />
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-gray-400">
                      {pub.type} • {pub.date}
                    </span>
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-brand-accent transition-colors duration-300"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {pub.title}
                  </h3>
                  <p className="text-gray-300 mt-3 text-sm">
                    {pub.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
