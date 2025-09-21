import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from 'react'

export default function About() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  
  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => emblaApi.scrollNext(), 4000)
    return () => clearInterval(interval)
  }, [emblaApi])

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand/10 via-accent/5 to-highlight/10 dark:from-brand/20 dark:via-accent/10 dark:to-highlight/20">
        <div className="section grid gap-12 md:grid-cols-2 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">About Vision Academy</h1>
            <p className="hero-subtitle">
              Since 2010, Vision Academy has been Pakistan's leading educational institution, dedicated to empowering 
              students through high-quality education, disciplined testing, and compassionate mentorship. Our comprehensive 
              programs span from foundational schooling to advanced competitive exam preparation, ensuring every learner 
              finds their path to success.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand">15+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand">50,000+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Students Educated</div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop" 
              alt="Vision Academy Campus" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold text-brand">95%</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">Success Rate</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-primary">Our Mission & Values</h2>
          <p className="section-lead mx-auto">The principles that guide everything we do</p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="interactive-card group"
          >
            <div className="text-5xl mb-6">🎯</div>
            <div className="heading-tertiary">Our Mission</div>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              To illuminate minds and shape futures through concept-first teaching, structured assessments, and a 
              student-centered culture that nurtures confidence, curiosity, and critical thinking skills.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="interactive-card group"
          >
            <div className="text-5xl mb-6">💎</div>
            <div className="heading-tertiary">Our Values</div>
            <ul className="mt-4 text-zinc-600 dark:text-zinc-400 space-y-2">
              <li className="flex items-center"><span className="text-accent mr-2">✓</span> Excellence in teaching and learning</li>
              <li className="flex items-center"><span className="text-accent mr-2">✓</span> Integrity, respect, and inclusivity</li>
              <li className="flex items-center"><span className="text-accent mr-2">✓</span> Continuous improvement and innovation</li>
              <li className="flex items-center"><span className="text-accent mr-2">✓</span> Student success above all</li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="interactive-card group"
          >
            <div className="text-5xl mb-6">🌟</div>
            <div className="heading-tertiary">Our Vision</div>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              To be Pakistan's most trusted educational institution, known for producing confident, capable, and 
              compassionate leaders who contribute positively to society.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team Slider */}
      <section className="bg-gradient-to-br from-zinc-50 to-blue-50 dark:from-zinc-900 dark:to-blue-900/20">
        <div className="section">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-primary">Meet Our Leadership Team</h2>
            <p className="section-lead mx-auto">Experienced educators and administrators leading our mission</p>
          </motion.div>
          
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {[
                {
                  name: "Dr. Muhammad Ali Khan",
                  position: "Founder & CEO",
                  experience: "25+ Years in Education",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
                  bio: "PhD in Physics from MIT, former professor at LUMS. Founded Vision Academy with a vision to democratize quality education in Pakistan.",
                  achievements: ["Established 200+ campuses", "Mentored 50,000+ students", "Author of 15+ textbooks"]
                },
                {
                  name: "Dr. Ayesha Farooq",
                  position: "Academic Director",
                  experience: "20+ Years in Education",
                  image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=400&auto=format&fit=crop",
                  bio: "PhD in Chemistry from Oxford University. Specializes in curriculum development and teacher training programs.",
                  achievements: ["Developed award-winning curriculum", "Trained 1000+ teachers", "Published 20+ research papers"]
                },
                {
                  name: "Prof. Ahmed Hassan",
                  position: "Head of Science Department",
                  experience: "18+ Years in Education",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
                  bio: "MSc in Biology from Harvard University. Expert in competitive exam preparation and student counseling.",
                  achievements: ["95% MDCAT success rate", "Mentored 5000+ medical students", "National education award winner"]
                },
                {
                  name: "Ms. Fatima Sheikh",
                  position: "Head of Mathematics",
                  experience: "15+ Years in Education",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
                  bio: "MSc in Mathematics from Cambridge University. Specializes in making complex mathematical concepts accessible to students.",
                  achievements: ["100% A+ grades in Math", "Developed innovative teaching methods", "Student favorite teacher award"]
                }
              ].map((leader, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -6, scale: 1.02 }} 
                  className="min-w-[350px] sm:min-w-[400px] rounded-2xl border border-zinc-200 bg-white/90 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900/80 overflow-hidden group"
                >
                  <div className="relative">
                    <img src={leader.image} alt={leader.name} className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-sm font-semibold">{leader.experience}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="font-bold text-xl text-brand group-hover:text-accent transition-colors duration-300">
                      {leader.name}
                    </div>
                    <div className="text-accent font-semibold mb-3">{leader.position}</div>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                      {leader.bio}
                    </p>
                    <div className="space-y-1">
                      {leader.achievements.map((achievement, i) => (
                        <div key={i} className="text-xs text-zinc-500 flex items-center">
                          <span className="text-accent mr-2">•</span>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Campus Gallery Slider */}
      <section className="section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-primary">Our State-of-the-Art Facilities</h2>
          <p className="section-lead mx-auto">Modern learning environments designed for student success</p>
        </motion.div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Modern Classrooms",
              image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
              description: "Air-conditioned classrooms with smart boards and comfortable seating for optimal learning."
            },
            {
              title: "Science Laboratories",
              image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
              description: "Fully equipped physics, chemistry, and biology labs with modern equipment and safety measures."
            },
            {
              title: "Library & Study Halls",
              image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop",
              description: "Extensive collection of books, digital resources, and quiet study spaces for focused learning."
            },
            {
              title: "Computer Labs",
              image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1200&auto=format&fit=crop",
              description: "High-speed internet and modern computers for digital learning and research activities."
            },
            {
              title: "Auditorium",
              image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
              description: "Spacious auditorium for seminars, presentations, and special events with advanced audio-visual systems."
            },
            {
              title: "Sports Facilities",
              image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
              description: "Basketball court, badminton courts, and outdoor sports area for physical fitness and recreation."
            }
          ].map((facility, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }} 
              className="interactive-card overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img src={facility.image} alt={facility.title} className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="heading-tertiary group-hover:text-accent transition-colors duration-300">
                  {facility.title}
                </div>
                <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}


