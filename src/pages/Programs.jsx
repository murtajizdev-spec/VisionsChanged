import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import TiltCard from '@/components/TiltCard'

const programs = [
  {
    id: 1,
    title: "Matric Science",
    duration: "2 Years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
    description: "Comprehensive preparation for Matric Science with focus on Physics, Chemistry, Biology, and Mathematics.",
    subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "English", "Urdu", "Pakistan Studies"],
    features: ["Expert Faculty", "Regular Tests", "Study Material", "Mock Exams"],
    fee: "Rs. 15,000/month"
  },
  {
    id: 2,
    title: "FSc Pre-Medical",
    duration: "2 Years",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    description: "Specialized program for medical entrance preparation with intensive focus on Biology, Chemistry, and Physics.",
    subjects: ["Biology", "Chemistry", "Physics", "English", "Urdu", "Pakistan Studies"],
    features: ["MDCAT Preparation", "Lab Work", "Clinical Exposure", "Career Counseling"],
    fee: "Rs. 18,000/month"
  },
  {
    id: 3,
    title: "FSc Pre-Engineering",
    duration: "2 Years",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    description: "Advanced program for engineering entrance preparation with focus on Mathematics, Physics, and Chemistry.",
    subjects: ["Mathematics", "Physics", "Chemistry", "English", "Urdu", "Pakistan Studies"],
    features: ["ECAT Preparation", "Problem Solving", "Engineering Concepts", "University Guidance"],
    fee: "Rs. 18,000/month"
  },
  {
    id: 4,
    title: "FCS (Faculty of Computer Science)",
    duration: "2 Years",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85b50450?q=80&w=1200&auto=format&fit=crop",
    description: "Comprehensive computer science program covering programming, algorithms, and modern technologies.",
    subjects: ["Programming", "Data Structures", "Algorithms", "Database Systems", "Web Development", "English"],
    features: ["Hands-on Coding", "Project Work", "Industry Exposure", "Certification Programs"],
    fee: "Rs. 16,000/month"
  },
  {
    id: 5,
    title: "ICS (Intermediate in Computer Science)",
    duration: "2 Years",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1200&auto=format&fit=crop",
    description: "Intermediate level computer science program with practical programming and theoretical foundations.",
    subjects: ["Computer Science", "Mathematics", "Physics", "English", "Urdu", "Pakistan Studies"],
    features: ["Programming Labs", "Software Development", "IT Skills", "Career Guidance"],
    fee: "Rs. 14,000/month"
  },
  {
    id: 6,
    title: "Entry Test Preparation",
    duration: "6 Months",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    description: "Intensive preparation for MDCAT, ECAT, SAT, and other competitive entrance examinations.",
    subjects: ["Test Strategies", "Mock Tests", "Time Management", "Subject Review"],
    features: ["Daily Practice", "Performance Analysis", "Personalized Coaching", "Success Guarantee"],
    fee: "Rs. 12,000/month"
  }
]

export default function Programs() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand/10 via-accent/5 to-highlight/10 dark:from-brand/20 dark:via-accent/10 dark:to-highlight/20">
        <div className="section text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Programs & Courses</h1>
            <p className="hero-subtitle mx-auto max-w-3xl">
              Discover our comprehensive range of educational programs designed to prepare students for success 
              in their academic and professional careers.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand">6</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Programs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand">500+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand">95%</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand">15+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-primary">Our Programs</h2>
          <p className="section-lead mx-auto">Choose the program that best fits your academic goals and career aspirations</p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div 
              key={program.id}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TiltCard className="interactive-card overflow-hidden group h-full">
                <div className="relative">
                  <img src={program.image} alt={program.title} className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {program.duration}
                  </div>
                  <div className="absolute top-4 right-4 bg-brand text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {program.fee}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="heading-tertiary group-hover:text-accent transition-colors duration-300 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                    {program.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-brand mb-2">Subjects:</h4>
                    <div className="flex flex-wrap gap-1">
                      {program.subjects.map((subject, i) => (
                        <span key={i} className="text-xs bg-brand/10 text-brand px-2 py-1 rounded-full">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-brand mb-2">Features:</h4>
                    <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="text-accent mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <NavLink 
                    to="/admissions" 
                    className="w-full btn text-center block"
                  >
                    Apply Now
                  </NavLink>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Program Comparison */}
      <section className="section bg-gradient-to-r from-zinc-50 to-blue-50 dark:from-zinc-900 dark:to-blue-900/20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-primary">Program Comparison</h2>
          <p className="section-lead mx-auto">Compare our programs to find the best fit for your needs</p>
        </motion.div>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-white dark:bg-zinc-800 rounded-2xl shadow-lg overflow-hidden">
            <thead className="bg-brand text-white">
              <tr>
                <th className="px-6 py-4 text-left">Program</th>
                <th className="px-6 py-4 text-center">Duration</th>
                <th className="px-6 py-4 text-center">Fee</th>
                <th className="px-6 py-4 text-center">Focus Area</th>
                <th className="px-6 py-4 text-center">Career Path</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
              {programs.map((program) => (
                <tr key={program.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">
                  <td className="px-6 py-4 font-semibold text-brand">{program.title}</td>
                  <td className="px-6 py-4 text-center text-zinc-600 dark:text-zinc-400">{program.duration}</td>
                  <td className="px-6 py-4 text-center text-zinc-600 dark:text-zinc-400">{program.fee}</td>
                  <td className="px-6 py-4 text-center text-zinc-600 dark:text-zinc-400">
                    {program.id === 1 && "Science Foundation"}
                    {program.id === 2 && "Medical Sciences"}
                    {program.id === 3 && "Engineering Sciences"}
                    {program.id === 4 && "Computer Science"}
                    {program.id === 5 && "Computer Studies"}
                    {program.id === 6 && "Test Preparation"}
                  </td>
                  <td className="px-6 py-4 text-center text-zinc-600 dark:text-zinc-400">
                    {program.id === 1 && "General Science"}
                    {program.id === 2 && "Medical/Health"}
                    {program.id === 3 && "Engineering"}
                    {program.id === 4 && "Software Development"}
                    {program.id === 5 && "IT/Computing"}
                    {program.id === 6 && "University Entry"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-brand/10 via-accent/10 to-highlight/10 dark:from-brand/20 dark:via-accent/20 dark:to-highlight/20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="heading-primary">Ready to Start Your Journey?</h2>
          <p className="section-lead mb-8">
            Join thousands of successful students who have achieved their academic goals with Vision Academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/admissions" className="btn text-lg px-8 py-4">
              Apply Now
            </NavLink>
            <NavLink to="/contact" className="btn-outline text-lg px-8 py-4">
              Contact Us
            </NavLink>
          </div>
        </motion.div>
      </section>
    </main>
  )
}


