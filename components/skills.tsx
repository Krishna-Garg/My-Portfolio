'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const skills = [
  { name: 'JavaScript', level: 90, category: 'Frontend' },
  { name: 'React.js', level: 95, category: 'Frontend' },
  // { name: 'TypeScript', level: 85, category: 'Frontend' },
  // { name: 'Next.js', level: 88, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 70, category: 'Frontend' },
  { name: 'Node.js', level: 20, category: 'Backend' },
  // { name: 'Express.js', level: 75, category: 'Backend' },
  { name: 'MongoDB', level: 50, category: 'Database' },
  { name: 'PostgreSQL', level: 50, category: 'Database' },
  { name: 'Git', level: 85, category: 'Tools' },
  // { name: 'Docker', level: 60, category: 'Tools' },
  // { name: 'AWS', level: 55, category: 'Cloud' }
]

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools', 'Cloud']

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({})

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const newAnimatedSkills: { [key: string]: number } = {}
        skills.forEach(skill => {
          newAnimatedSkills[skill.name] = skill.level
        })
        setAnimatedSkills(newAnimatedSkills)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const getSkillLevel = (level: number) => {
    if (level >= 90) return 'Expert'
    if (level >= 75) return 'Advanced'
    if (level >= 60) return 'Intermediate'
    return 'Beginner'
  }

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gray-900 p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                <span className="text-sm text-green-400 font-medium">
                  {getSkillLevel(skill.level)}
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">{skill.category}</span>
                  <span className="text-green-400">{animatedSkills[skill.name] || 0}%</span>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isInView ? `${animatedSkills[skill.name] || 0}%` : 0 }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full relative"
                  >
                    <motion.div
                      animate={{ x: [-10, 10, -10] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-white/20 rounded-full"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
