import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const fullCodeString = `// main.cpp - Last updated: July 2025
#include <iostream>
#include <vector>
#include <string>

class Developer {
private:
    std::string name;
    std::vector<std::string> skills;

public:
    Developer(std::string n) : name(n) {
        skills = {"React", "C++", "Node.js", "Systems Design"};
    }

    void introduce() {
        std::cout << "Hello, World! I'm " << name << "." << std::endl;
        std::cout << "I build elegant solutions for the modern web." << std::endl;
    }
};

int main() {
    Developer asjad("Asjad Akhtar");
    asjad.introduce();

    // Continuously learning and improving...
    while (true) {
        asjad.learn("New Technologies");
    }

    return 0;
}
`;

const CodeBlock = () => {
  const [typedCode, setTypedCode] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    let charIndex = 0;
    setTypedCode('');

    const typingInterval = setInterval(() => {
      if (charIndex < fullCodeString.length) {
        setTypedCode((prev) => prev + fullCodeString[charIndex]);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setTypedCode(' ');
          setTimeout(() => setTypedCode(''), 100);
        }, 3000);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, [typedCode === ' ']);
  useEffect(() => {
    if (scrollRef.current) {
      const lineCount = typedCode.split('\n').length;
      if (lineCount > 10) {
        scrollRef.current.scrollTo({
          top: scrollRef.current.scrollHeight,
          behavior: 'smooth',
        });
      }
    }
  }, [typedCode]);
  const escapeHtml = (unsafe) =>
    unsafe.replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const highlightSyntaxInternal = (line) => {
    const escapedLine = escapeHtml(line);
    return escapedLine.replace(
      /(\/\/.*)|(".*?")|(#include\b|class\b|private:|public:|int\b|void\b|return\b|new\b|while\b|true\b)|(\bDeveloper\b|\bstd\b|string\b|vector\b)|(\bintroduce\b|\bmain\b|\blearn\b)/g,
      (match, comment, string, keyword, type, funcName) => {
        if (comment) return `<span class="text-gray-500">${comment}</span>`;
        if (string) return `<span class="text-green-400">${string}</span>`;
        if (keyword) return `<span class="text-purple-400">${keyword}</span>`;
        if (type) return `<span class="text-sky-400">${type}</span>`;
        if (funcName)
          return `<span class="text-brand-accent">${funcName}</span>`;
        return match;
      }
    );
  };

  const renderCodeInternal = () => {
    const lines = typedCode.split('\n');
    const lastLineIndex = lines.length - 1;

    return lines.map((line, i) => {
      const isLastLine = i === lastLineIndex;
      const content = isLastLine
        ? escapeHtml(line)
        : highlightSyntaxInternal(line);

      return (
        <div key={i} className="flex items-center">
          <span className="text-gray-500 mr-4 select-none w-6 text-right">
            {i + 1}
          </span>
          <span dangerouslySetInnerHTML={{ __html: content }} />
          {isLastLine && <span className="blinking-cursor">|</span>}
        </div>
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="hidden md:block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg shadow-xl overflow-hidden"
    >
      <div className="flex items-center gap-2 p-3 bg-gray-900/80 rounded-t-lg">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="ml-auto text-xs text-gray-400">main.cpp</span>
      </div>
      <pre
        ref={scrollRef}
        className="p-4 text-sm h-[400px] overflow-y-auto no-scrollbar"
      >
        <code className="font-mono text-gray-300">{renderCodeInternal()}</code>
      </pre>
    </motion.div>
  );
};

export default CodeBlock;
