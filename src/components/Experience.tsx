import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Tech Company Name',
      location: 'City, Country',
      period: '2023 - Present',
      description: 'Leading development of web applications using Laravel and React. Implementing RESTful APIs, database optimization, and modern frontend solutions.',
      technologies: ['Laravel', 'React', 'MySQL', 'REST APIs', 'Git'],
      achievements: [
        'Developed and maintained 5+ web applications',
        'Improved application performance by 40%',
        'Mentored junior developers',
        'Implemented CI/CD pipelines'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'Previous Company',
      location: 'City, Country',
      period: '2022 - 2023',
      description: 'Started my journey as a PHP developer, learning Laravel framework and contributing to various projects.',
      technologies: ['PHP', 'Laravel', 'MySQL', 'HTML/CSS', 'JavaScript'],
      achievements: [
        'Built 3 complete web applications',
        'Learned modern development practices',
        'Collaborated with senior developers',
        'Contributed to open-source projects'
      ]
    },
    {
      title: 'Freelance Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2021 - 2022',
      description: 'Worked on various client projects, building custom web solutions and learning new technologies.',
      technologies: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript', 'WordPress'],
      achievements: [
        'Completed 10+ client projects',
        'Built custom WordPress themes',
        'Developed e-commerce solutions',
        'Maintained client relationships'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University Name',
      period: '2018 - 2022',
      description: 'Studied computer science fundamentals, algorithms, data structures, and software engineering principles.'
    }
  ];

  return (
    <section id="experience" className="section-padding bg-dark-800/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-600"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-900"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="glass-effect p-6 rounded-lg">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                        <div className="flex items-center text-primary-400 mb-2">
                          <Building className="w-4 h-4 mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm mb-3">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-400 text-sm flex items-start">
                            <span className="text-primary-500 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold text-center mb-12 text-white">
            <span className="gradient-text">Education</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-lg"
              >
                <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                <div className="flex items-center text-primary-400 mb-2">
                  <Building className="w-4 h-4 mr-2" />
                  <span className="font-medium">{edu.institution}</span>
                </div>
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{edu.period}</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-white">
            <span className="gradient-text">Certifications</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-effect p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-2">Laravel Certification</h4>
              <p className="text-gray-400 text-sm mb-3">Laravel Framework</p>
              <div className="flex items-center justify-center">
                <span className="text-primary-400 text-sm">In Progress</span>
              </div>
            </div>
            
            <div className="glass-effect p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-2">React Certification</h4>
              <p className="text-gray-400 text-sm mb-3">React Development</p>
              <div className="flex items-center justify-center">
                <span className="text-primary-400 text-sm">Planned</span>
              </div>
            </div>
            
            <div className="glass-effect p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-white mb-2">AWS Certification</h4>
              <p className="text-gray-400 text-sm mb-3">Cloud Computing</p>
              <div className="flex items-center justify-center">
                <span className="text-primary-400 text-sm">Planned</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 