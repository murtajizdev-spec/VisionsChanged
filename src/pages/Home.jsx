import { NavLink } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from 'react'
import { events } from '@/data/events'

function ParallaxHero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 80])
  const opacity = useTransform(scrollY, [0, 200], [1, 0.6])
  return (
    <section className="relative overflow-hidden">
      <motion.img style={{ y }} src="https://kips.edu.pk/wp-content/uploads/2025/01/banner2.webp" alt="Students" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/30" />
      <motion.div style={{ opacity }} className="relative container-app py-32 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }} 
          className="hero-title"
        >
          <span className="block">
            Vision Academy
          </span>
          <span className="block text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 opacity-90">
            Evening Coaching
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }} 
          className="hero-subtitle mt-8 max-w-4xl mx-auto"
        >
          Expert faculty. Modern resources. Disciplined testing. 
          <span className="text-yellow-300 font-bold animate-pulse"> Results that speak.</span>
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }} 
          className="hero-description mt-4 max-w-3xl mx-auto"
        >
          Join thousands of successful students who have achieved their academic dreams with our proven teaching methodology and comprehensive support system.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.7, duration: 1, ease: "easeOut" }} 
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
        >
          <NavLink 
            to="/admissions" 
            className="group relative overflow-hidden bg-gradient-to-r from-brand to-accent text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10">Apply Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </NavLink>
          <NavLink 
            to="/programs" 
            className="group relative overflow-hidden border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-brand transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10">Explore Programs</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </NavLink>
        </motion.div>
        
        {/* Floating elements for visual appeal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }} 
          className="mt-16 flex justify-center items-center space-x-8 text-white/60"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300">95%</div>
            <div className="text-sm">Success Rate</div>
          </div>
          <div className="w-px h-12 bg-white/30"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300">500+</div>
            <div className="text-sm">Students</div>
          </div>
          <div className="w-px h-12 bg-white/30"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-300">15+</div>
            <div className="text-sm">Years Experience</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => emblaApi.scrollNext(), 3000)
    return () => clearInterval(interval)
  }, [emblaApi])

  return (
    <main>
      <ParallaxHero />

      {/* Why Choose Us Section */}
      <section className="section bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-zinc-900/50 dark:via-zinc-900 dark:to-blue-900/20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-primary">Why Choose Vision Academy?</h2>
          <p className="section-lead mx-auto">Discover what makes us the leading educational institution in Pakistan</p>
        </motion.div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[{
            title: 'Expert Faculty',
            text: 'Our teachers are PhD holders and subject specialists with 10+ years of experience in competitive exam preparation.',
            icon: '👨‍🏫',
            stats: '50+ Expert Teachers'
          }, {
            title: 'Modern Facilities',
            text: 'State-of-the-art classrooms, digital learning resources, and comfortable study environments for optimal learning.',
            icon: '🏫',
            stats: '200+ Classrooms'
          }, {
            title: 'Proven Results',
            text: '95% of our students achieve A+ grades, with 70% securing admissions in top universities across Pakistan.',
            icon: '🏆',
            stats: '95% Success Rate'
          }].map((item, i) => (
            <motion.div 
              key={item.title} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }} 
              className="interactive-card group text-center"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <div className="heading-tertiary text-brand group-hover:text-accent transition-colors duration-300">{item.title}</div>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.text}</p>
              <div className="mt-4 text-sm font-semibold text-accent">{item.stats}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* News & Events Section */}
      <section className="section bg-gradient-to-r from-zinc-50 to-blue-50 dark:from-zinc-900 dark:to-blue-900/20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h2 className="heading-primary">📰 Latest News & Events</h2>
            <p className="section-lead">Stay updated with our latest achievements, events, and announcements</p>
          </div>
          <NavLink to="/blog" className="btn-accent text-lg px-6 py-3">
            View All News 
            <span className="ml-2">→</span>
          </NavLink>
        </motion.div>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {[
              {
                id: 1,
                title: "Vision Academy Students Secure Top Positions in MDCAT 2024",
                date: "December 15, 2024",
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
                category: "Achievement",
                excerpt: "15 students from our academy secured positions in top 100 of MDCAT 2024, with 3 students achieving perfect scores."
              },
              {
                id: 2,
                title: "New Campus Opening in Lahore - Admissions Open",
                date: "December 10, 2024",
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
                category: "Announcement",
                excerpt: "We're excited to announce our new state-of-the-art campus in Lahore. Early bird admissions are now open with special discounts."
              },
              {
                id: 3,
                title: "Annual Science Fair 2024 - Outstanding Projects",
                date: "December 5, 2024",
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
                category: "Event",
                excerpt: "Our students showcased innovative science projects at the annual fair, with 3 projects selected for national competition."
              },
              {
                id: 4,
                title: "Scholarship Program for Meritorious Students",
                date: "November 28, 2024",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
                category: "Scholarship",
                excerpt: "Full and partial scholarships available for students with exceptional academic performance. Application deadline: January 15, 2025."
              }
            ].map((e) => (
              <motion.div 
                key={e.id} 
                whileHover={{ y: -6, scale: 1.02 }} 
                className="min-w-[320px] sm:min-w-[380px] rounded-2xl border border-zinc-200 bg-white/90 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900/80 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img src={e.image} alt={e.title} className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {e.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="font-bold text-lg text-brand group-hover:text-accent transition-colors duration-300 mb-2">
                    {e.title}
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                    {e.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-zinc-500">{e.date}</div>
                    <button 
                      onClick={() => window.open(`/blog/${e.id}`, '_blank')}
                      className="text-accent hover:text-brand font-semibold text-sm transition-colors duration-300"
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Slider Section */}
      <section className="section bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-900/20 dark:via-zinc-900 dark:to-purple-900/20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-primary">What Our Students Say</h2>
          <p className="section-lead mx-auto">Real testimonials from our successful students and their parents</p>
        </motion.div>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {[
              {
                name: "Ayesha Khan",
                grade: "A+ in FSc Pre-Medical",
                university: "Aga Khan University",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=400&auto=format&fit=crop",
                testimonial: "Vision Academy's structured approach and dedicated teachers helped me achieve my dream of getting into Aga Khan University. The regular testing and personalized feedback made all the difference."
              },
              {
                name: "Ahmed Hassan",
                grade: "Top 10 in MDCAT 2024",
                university: "King Edward Medical University",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
                testimonial: "The comprehensive study material and expert guidance from Vision Academy's faculty helped me secure a position in the top 10 of MDCAT. I couldn't have done it without their support."
              },
              {
                name: "Fatima Ali",
                grade: "A+ in Matric Science",
                university: "Lahore University of Management Sciences",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
                testimonial: "The small class sizes and individual attention at Vision Academy helped me understand complex concepts easily. The teachers are truly dedicated to student success."
              },
              {
                name: "Muhammad Usman",
                grade: "A+ in FSc Engineering",
                university: "NUST",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
                testimonial: "Vision Academy's focus on concept building rather than rote learning helped me excel in my studies. The regular practice tests prepared me well for board exams."
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -4, scale: 1.02 }} 
                className="min-w-[350px] sm:min-w-[400px] rounded-2xl border border-zinc-200 bg-white/90 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900/80 p-8"
              >
                <div className="flex items-center mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                  <div>
                    <div className="font-bold text-lg text-brand">{testimonial.name}</div>
                    <div className="text-sm text-accent font-semibold">{testimonial.grade}</div>
                    <div className="text-sm text-zinc-500">{testimonial.university}</div>
                  </div>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">★</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="section bg-gradient-to-r from-brand/10 via-accent/10 to-highlight/10 dark:from-brand/20 dark:via-accent/20 dark:to-highlight/20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-primary">Our Impact in Numbers</h2>
          <p className="section-lead mx-auto">Measurable results that speak for our commitment to excellence</p>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { number: '95%', label: 'Students Get A+ Grades', icon: '⭐', color: 'text-yellow-500' },
            { number: '15,000+', label: 'Successful Graduates', icon: '🎓', color: 'text-blue-500' },
            { number: '70%', label: 'University Admissions', icon: '🏛️', color: 'text-green-500' },
            { number: '200+', label: 'Expert Faculty Members', icon: '👨‍🏫', color: 'text-purple-500' }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <div className={`text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="text-4xl font-extrabold text-gradient group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400 font-medium mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Success Story (About) */}
      <section className="bg-gradient-to-br from-brand/5 via-accent/5 to-highlight/5 dark:from-zinc-900/40">
        <div className="section grid gap-12 md:grid-cols-2 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Crafting a Better Future through Education</h2>
            <p className="section-lead">
              We believe education is the greatest catalyst for positive change. Our mission is to illuminate minds
              and kindle hearts with the light of knowledge and wisdom, building a better tomorrow for our youth and nation.
            </p>
            <NavLink to="/programs" className="btn-accent mt-8 inline-flex text-lg px-8 py-4">Discover Programs</NavLink>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overflow-hidden rounded-2xl shadow-2xl"
          >
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1400&auto=format&fit=crop" alt="Classroom" className="h-80 w-full object-cover hover:scale-105 transition-transform duration-500" />
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="heading-primary">Our Projects</h3>
          <p className="section-lead mx-auto">A complete academic pathway from school to competitive exams.</p>
        </motion.div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: 'Vision School', d: 'Quality education with a no-child-left-behind policy', img: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop', icon: '🏫' },
            { t: 'Vision College', d: 'Reputable and efficacious intermediate programs', img: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1200&auto=format&fit=crop', icon: '🎓' },
            { t: 'Entry Test Prep', d: 'Producing high achievers and professionals', img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop', icon: '📚' },
            { t: 'Virtual Learning', d: 'Education without the shackles of time and space', img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop', icon: '💻' },
            { t: 'Publications', d: 'Methodically researched and beneficial books', img: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1200&auto=format&fit=crop', icon: '📖' },
            { t: 'Competitive Exams', d: 'Largest CSS/PMS preparatory network', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop', icon: '🏆' }
          ].map((p, index) => (
            <motion.div 
              key={p.t} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }} 
              className="interactive-card overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img src={p.img} alt={p.t} className="h-40 w-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">{p.icon}</div>
              </div>
              <div className="p-6">
                <div className="heading-tertiary group-hover:text-accent transition-colors duration-300">{p.t}</div>
                <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">{p.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What Makes Us */}
      <section className="bg-gradient-to-br from-white to-brand/5 dark:from-zinc-950 dark:to-brand/10">
        <div className="section">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="heading-primary">What Makes Us Vision Academy</h3>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: 'Quality Assurance', d: 'Standardized processes and continuous improvement.', icon: '✅' },
              { t: 'Student Care & Counselling', d: 'Mentoring, guidance, and wellbeing support.', icon: '🤝' },
              { t: 'Teaching Methodology', d: 'Concept-first delivery with practice and analysis.', icon: '📝' },
              { t: 'Feedback Mechanism', d: 'Parents and students stay informed on progress.', icon: '📊' },
              { t: 'Nationwide Campuses', d: 'Accessible education with consistent standards.', icon: '🌍' },
              { t: 'Results Focus', d: 'Measured outcomes and scholarship opportunities.', icon: '🎯' }
            ].map((f, index) => (
              <motion.div 
                key={f.t} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="interactive-card group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
                <div className="heading-tertiary group-hover:text-accent transition-colors duration-300">{f.t}</div>
                <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">{f.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="section bg-gradient-to-r from-brand/10 via-accent/10 to-highlight/10 dark:from-brand/20 dark:via-accent/20 dark:to-highlight/20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="heading-primary">By the Numbers</h3>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            {n:'A+/A',l:'Every second student', icon: '⭐'},
            {n:'70%',l:'Seats secured in universities', icon: '🎓'},
            {n:'1M+', l:'Alumni network', icon: '👥'},
            {n:'200+', l:'Campuses', icon: '🏢'}
          ].map((s, index) => (
            <motion.div 
              key={s.l} 
              initial={{ opacity: 0, scale: 0.8 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="interactive-card text-center group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
              <div className="text-4xl font-extrabold tracking-tight text-gradient group-hover:scale-110 transition-transform duration-300">{s.n}</div>
              <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 font-medium">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partner CTA */}
      <section className="relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&auto=format&fit=crop" alt="Partner" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand/80 via-brand/60 to-accent/80" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }}
          className="relative container-app py-20 text-center text-white"
        >
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              Join Hands
            </span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl text-blue-200">
              Become a Partner
            </span>
          </h3>
          <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Join us in our endeavor to enlighten society and make the world a better place to dwell in.
          </p>
          <NavLink to="/contact" className="btn text-lg px-8 py-4 shadow-2xl hover:shadow-3xl inline-flex">
            Get Started
          </NavLink>
        </motion.div>
      </section>
    </main>
  )
}


