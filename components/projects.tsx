'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Eye } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
    image: '/modern-ecommerce-interface.png',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    github: '#',
    demo: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/task-management-dashboard.png',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Socket.io'],
    github: '#',
    demo: '#',
    featured: true
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
    image: '/preview/project4.png',
    tech: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
    github: '#',
    demo: '#',
    featured: false
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description: 'A comprehensive analytics dashboard for social media metrics with data visualization and reporting features.',
    image: '/social-media-analytics-dashboard.png',
    tech: ['Vue.js', 'D3.js', 'Express.js', 'Redis', 'Chart.js'],
    github: '#',
    demo: '#',
    featured: false
  },
  {
    id: 5,
    title: 'Cryptocurrency Tracker',
    description: 'Real-time cryptocurrency tracking application with portfolio management and price alerts.',
    image: '/cryptocurrency-trading-dashboard.png',
    tech: ['React', 'CoinGecko API', 'Firebase', 'Material-UI'],
    github: '#',
    demo: '#',
    featured: false
  },
  {
    id: 6,
    title: 'Learning Management System',
    description: 'A complete LMS with course creation, student enrollment, progress tracking, and interactive quizzes.',
    image: '/online-learning-platform.png',
    tech: ['Next.js', 'Supabase', 'Stripe', 'Tailwind CSS', 'Framer Motion'],
    github: '#',
    demo: '#',
    featured: true
  }
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Upcoming{' '}
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my upcoming work and personal projects that demonstrate my skills and creativity.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`bg-black rounded-xl overflow-hidden border border-green-500/20 hover:border-green-500/40 transition-all duration-300 group ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.demo}
                    className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-200"
                    aria-label="View Demo"
                  >
                    <Eye size={20} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.github}
                    className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors duration-200"
                    aria-label="View Code"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>

                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 text-green-400 text-sm rounded-full border border-green-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 flex-1 justify-center"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    className="flex items-center space-x-2 px-4 py-2 border border-green-500 text-green-400 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-200 flex-1 justify-center"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
