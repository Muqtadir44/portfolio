import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Coffee, Target } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies', value: '10+' },
    { label: 'Happy Clients', value: '8+' },
  ];

  const interests = [
    { icon: Code, title: 'Clean Code', description: 'Writing maintainable and scalable code' },
    { icon: Coffee, title: 'Problem Solving', description: 'Finding elegant solutions to complex problems' },
    { icon: Target, title: 'Continuous Learning', description: 'Always exploring new technologies and best practices' },
  ];

  return (
    <section id="about" className="section-padding bg-dark-800/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know me better and understand my journey in software development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Passionate Software Engineer
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a dedicated software engineer with over 2 years of experience specializing in 
                PHP Laravel development. My journey in web development started with a curiosity 
                about how websites work, which quickly evolved into a passion for creating 
                robust, scalable applications.
              </p>
              
              <p>
                Currently, I'm expanding my expertise into the React ecosystem, combining the 
                power of Laravel's backend capabilities with modern frontend technologies. 
                I believe in writing clean, maintainable code and following industry best practices.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. 
                I'm always eager to learn and take on new challenges that push my boundaries.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Interests */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              What Drives Me
            </h3>
            
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <interest.icon className="w-8 h-8 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {interest.title}
                    </h4>
                    <p className="text-gray-400">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="glass-effect p-6 rounded-lg"
            >
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-primary-500" />
                Personal Info
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Name:</span>
                  <span className="text-white ml-2">Abdul Muqtadir</span>
                </div>
                <div>
                  <span className="text-gray-400">Email:</span>
                  <span className="text-white ml-2">your.email@example.com</span>
                </div>
                <div>
                  <span className="text-gray-400">Location:</span>
                  <span className="text-white ml-2">Your City, Country</span>
                </div>
                <div>
                  <span className="text-gray-400">Experience:</span>
                  <span className="text-white ml-2">2+ Years</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 