import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import experiences from '../data/experiences.json';

const TimelineIcon = () => (
  <figure className="absolute left-0 stroke-brand-accent">
    <svg width="60" height="60" viewBox="0 0 75 75">
      <motion.circle
        cx="37.5"
        cy="37.5"
        r="15"
        className="fill-brand-accent"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
      />
      <circle cx="37.5" cy="37.5" r="15" className="fill-brand-dark" />
      <motion.circle
        cx="37.5"
        cy="37.5"
        r="25"
        className="stroke-[3px] fill-none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </svg>
  </figure>
);

const ExperienceItem = ({ details }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="ml-8 md:ml-16 pl-12 md:pl-16 py-8 relative"
    >
      <TimelineIcon />
      <motion.div
        className="bg-brand-dark/40 backdrop-blur-md border border-gray-700 rounded-lg p-6 transition-all duration-300 hover:border-brand-accent/70 hover:shadow-2xl hover:shadow-brand-accent/10"
        whileHover={{ scale: 1.03 }}
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-white">{details.role}</h3>
            <p className="text-brand-accent font-semibold">
              {details.company} | {details.location}
            </p>
            <p className="text-sm text-gray-400 mt-1">{details.date}</p>
          </div>
          {details.logo && (
            <img
              src={details.logo}
              alt={`${details.company} Logo`}
              className="w-14 h-14 object-contain rounded-md bg-white/10 p-1"
            />
          )}
        </div>

        <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
          {details.tasks.map((task, i) => (
            <li key={i}>{task}</li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-2">Work Experience</h2>
      <div className="w-20 h-1 bg-brand-accent mx-auto mb-16"></div>

      <div ref={ref} className="relative max-w-3xl mx-auto px-4">
        <motion.div
          style={{ scaleY }}
          className="absolute left-8 md:left-12 top-0 w-1 h-full bg-brand-accent/50 origin-top"
        />
        <div>
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} details={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
