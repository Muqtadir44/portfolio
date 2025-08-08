import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Github, Linkedin, Code, Database, Zap, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const texts = useMemo(() => [
    'PHP Laravel Developer',
    'React Developer', 
    'Full Stack Engineer',
    'Problem Solver',
    'Code Enthusiast'
  ], []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Typing effect
  useEffect(() => {
    if (currentIndex < texts.length) {
      const timeout = setTimeout(() => {
        setCurrentText(texts[currentIndex].slice(0, currentText.length + 1));
        if (currentText.length === texts[currentIndex].length) {
          setTimeout(() => {
            setCurrentIndex(currentIndex + 1);
            setCurrentText('');
          }, 2000);
        }
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setCurrentIndex(0);
      setCurrentText('');
    }
  }, [currentText, currentIndex, texts]);

  // Floating animation for background elements
  const floatingElements = [
    { icon: Code, delay: 0, duration: 6 },
    { icon: Database, delay: 2, duration: 8 },
    { icon: Zap, delay: 4, duration: 7 },
    { icon: Sparkles, delay: 1, duration: 9 },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900/20"></div>
      
      {/* Animated mesh gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-primary-600/5 animate-pulse"></div>
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-20 -right-20 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-primary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-20 -left-20 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-primary-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-primary-400/5 rounded-full blur-2xl"
        />
      </div>

      {/* Floating Tech Icons */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [-20, -80, -20],
            x: [0, Math.sin(index) * 30, 0],
            rotate: [0, 360, 0]
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut"
          }}
          className="absolute text-primary-400/20 hidden sm:block"
          style={{
            left: `${15 + index * 15}%`,
            top: `${25 + index * 12}%`,
          }}
        >
          <element.icon className="w-6 h-6 sm:w-8 sm:h-8" />
        </motion.div>
      ))}

      {/* Particle effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
            animate={{
              y: [0, -800],
              x: [0, Math.sin(i) * 60],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 90}%`,
              top: '100%',
            }}
          />
        ))}
      </div>

      <div className="container-max px-3 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-6xl mx-auto pt-8 sm:pt-0">
          {/* Enhanced Greeting with sparkle effect */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="mb-6 relative"
          >
            {/* <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="absolute -left-4 sm:-left-8 top-0 text-primary-400"
            >
              ✨
            </motion.span> */}
            <span className="text-primary-400 font-medium text-base sm:text-lg">Hello, I'm</span>
            {/* <motion.span
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              className="absolute -right-4 sm:-right-8 top-0 text-primary-400"
            >
              ✨
            </motion.span> */}
          </motion.div>

          {/* Enhanced Name with letter-by-letter animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
          >
            <span className="gradient-text">
              {'Abdul Muqtadir'.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.3 + index * 0.05,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    color: "#38bdf8"
                  }}
                  className="inline-block cursor-pointer"
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Enhanced Title with typing effect */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-300 mb-6 sm:mb-8 min-h-[1.5rem] sm:min-h-[2rem]"
          >
            <span className="text-primary-400 font-semibold">
              {currentText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1"
              >
                |
              </motion.span>
            </span>
          </motion.h2>

          {/* Enhanced Description with staggered animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0"
          >
            Passionate about creating{' '}
            <motion.span
              whileHover={{ color: "#38bdf8", scale: 1.05 }}
              className="text-primary-400 font-semibold cursor-pointer"
            >
              robust web applications
            </motion.span>{' '}
            and scalable solutions. With 2+ years of experience in{' '}
            <motion.span
              whileHover={{ color: "#38bdf8", scale: 1.05 }}
              className="text-primary-400 font-semibold cursor-pointer"
            >
              Laravel development
            </motion.span>{' '}
            and growing expertise in React, I bring ideas to life through clean code and innovative solutions.
          </motion.p>

          {/* Enhanced CTA Buttons with magnetic effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(14, 165, 233, 0.3)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 sm:gap-3 shadow-lg text-sm sm:text-base"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="ml-1"
              >
                →
              </motion.div>
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(14, 165, 233, 0.2)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 sm:gap-3 backdrop-blur-sm text-sm sm:text-base"
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.button>
          </motion.div>

          {/* Enhanced Social Links with 3D effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center items-center gap-6 sm:gap-8 mb-8 sm:mb-12"
          >
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.2 + index * 0.2,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.2, 
                  y: -8,
                  rotateY: 180,
                  boxShadow: "0 10px 30px rgba(14, 165, 233, 0.4)"
                }}
                whileTap={{ scale: 0.9 }}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-all duration-300 p-2 sm:p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </motion.a>
            ))}
          </motion.div>

          {/* Enhanced Scroll indicator with pulse effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              animate={{ 
                y: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ 
                scale: 1.2,
                color: "#38bdf8"
              }}
              onClick={() => scrollToSection('#about')}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-200 p-1.5 sm:p-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <ChevronDown className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 