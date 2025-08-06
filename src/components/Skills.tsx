import React from 'react';
import { motion } from 'framer-motion';
import { Database, Code, Palette, Server } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'PHP', level: 90 },
        { name: 'Laravel', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'REST APIs', level: 85 },
        { name: 'Git', level: 75 },
      ]
    },
    {
      title: 'Frontend Development',
      icon: Palette,
      skills: [
        { name: 'HTML/CSS', level: 85 },
        { name: 'JavaScript', level: 70 },
        { name: 'React', level: 65 },
        { name: 'TypeScript', level: 60 },
        { name: 'Tailwind CSS', level: 75 },
      ]
    },
    {
      title: 'Database & Tools',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 65 },
        { name: 'Redis', level: 60 },
        { name: 'Docker', level: 55 },
        { name: 'AWS', level: 50 },
      ]
    },
    {
      title: 'Other Technologies',
      icon: Code,
      skills: [
        { name: 'Linux', level: 75 },
        { name: 'Nginx', level: 70 },
        { name: 'Composer', level: 85 },
        { name: 'npm/yarn', level: 70 },
        { name: 'Postman', level: 80 },
      ]
    }
  ];

  const technologies = [
    'PHP', 'Laravel', 'MySQL', 'JavaScript', 'React', 'TypeScript', 
    'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'Docker', 'AWS', 
    'REST APIs', 'GraphQL', 'Redis', 'PostgreSQL', 'Nginx', 'Linux'
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect p-6 rounded-lg"
            >
              <div className="flex items-center mb-6">
                <category.icon className="w-8 h-8 text-primary-500 mr-3" />
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-white">
            Technologies I Work With
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="glass-effect p-4 rounded-lg text-center hover:border-primary-500/50 transition-all duration-200"
              >
                <span className="text-gray-300 font-medium text-sm">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-primary-500" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Clean Code</h4>
            <p className="text-gray-400 text-sm">
              Writing maintainable, readable, and well-documented code following best practices
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="w-8 h-8 text-primary-500" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Database Design</h4>
            <p className="text-gray-400 text-sm">
              Designing efficient database schemas and optimizing queries for performance
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Server className="w-8 h-8 text-primary-500" />
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">API Development</h4>
            <p className="text-gray-400 text-sm">
              Building robust RESTful APIs with proper authentication and documentation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 