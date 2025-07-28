import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from 'react-icons/fa';
import { FiExternalLink, FiMaximize2 } from 'react-icons/fi';
import { BsDot } from 'react-icons/bs';
import projects from '../data/projects.json';

const ImageLightbox_Internal = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
      >
        <FaTimes size={28} />
      </button>
      <div
        className="relative w-full max-w-4xl h-full max-h-[80vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-0 sm:-left-12 text-white/70 hover:text-white transition-colors p-2 rounded-full bg-black/20 hover:bg-black/50"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 sm:-right-12 text-white/70 hover:text-white transition-colors p-2 rounded-full bg-black/20 hover:bg-black/50"
            >
              <FaChevronRight size={24} />
            </button>
          </>
        )}
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Project screenshot ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
const ProjectImageDisplay_Internal = ({ images, onImageClick }) => (
  <div
    className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-2xl shadow-black/30 group cursor-pointer"
    onClick={() => onImageClick(images)}
  >
    <img
      src={images[0]}
      alt="Project main screenshot"
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
      <FiMaximize2
        size={40}
        className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  </div>
);
const ProjectContent_Internal = ({ project }) => (
  <>
    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
    <p className="text-gray-300 mb-6">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-6">
      {project.tech.map((t) => (
        <span
          key={t}
          className="text-sm font-semibold bg-gray-800 text-brand-accent px-3 py-1 rounded-full"
        >
          {t}
        </span>
      ))}
    </div>
    <div className="flex items-center space-x-4">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-brand-accent"
        >
          <FaGithub size={24} />
        </a>
      )}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-brand-accent"
        >
          <FiExternalLink size={24} />
        </a>
      )}
    </div>
  </>
);

const ProjectSeparator = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="relative my-12"
  >
    <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t border-gray-700" />
    </div>
    <div className="relative flex justify-center">
      <span className="bg-brand-dark px-4 text-brand-accent flex gap-x-1">
        <BsDot size={24} />
        <BsDot size={24} />
        <BsDot size={24} />
      </span>
    </div>
  </motion.div>
);

const Projects = () => {
  const [lightboxImages, setLightboxImages] = useState([]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleOpenLightbox = (images) => {
    setLightboxImages(images);
    setIsLightboxOpen(true);
  };
  const handleCloseLightbox = () => setIsLightboxOpen(false);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-2">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-brand-accent mx-auto mb-16"></div>

        <div className="flex flex-col">
          {projects.map((project, index) => {
            const hasImages = project.images && project.images.length > 0;
            return (
              <React.Fragment key={project.title}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {hasImages ? (
                    <div
                      className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                        index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      <div className="w-full md:w-1/2">
                        <ProjectImageDisplay_Internal
                          images={project.images}
                          onImageClick={handleOpenLightbox}
                        />
                      </div>
                      <div className="w-full md:w-1/2">
                        <ProjectContent_Internal project={project} />
                      </div>
                    </div>
                  ) : (
                    <div className="max-w-3xl mx-auto text-center">
                      <ProjectContent_Internal project={project} />
                    </div>
                  )}
                </motion.div>

                {index < projects.length - 1 && <ProjectSeparator />}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {isLightboxOpen && (
          <ImageLightbox_Internal
            images={lightboxImages}
            onClose={handleCloseLightbox}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
