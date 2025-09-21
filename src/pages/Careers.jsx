import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from 'react'

const jobs = [
  {
    id: 1,
    title: "Physics Teacher (FSc/Matric)",
    department: "Science Department",
    location: "Karachi, Lahore, Islamabad",
    type: "Full-time",
    experience: "3-5 years",
    salary: "Rs. 80,000 - 120,000",
    description: "We are looking for an experienced Physics teacher to join our science department. The ideal candidate should have strong subject knowledge and excellent teaching skills.",
    requirements: [
      "Master's degree in Physics or related field",
      "Minimum 3 years teaching experience",
      "Strong command over English and Urdu",
      "Experience with FSc/Matric curriculum",
      "Good communication and presentation skills"
    ],
    benefits: [
      "Competitive salary package",
      "Health insurance",
      "Professional development opportunities",
      "Performance bonuses",
      "Flexible working hours"
    ],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Chemistry Teacher (Pre-Medical)",
    department: "Science Department",
    location: "Karachi, Lahore",
    type: "Full-time",
    experience: "2-4 years",
    salary: "Rs. 75,000 - 110,000",
    description: "Join our chemistry department to teach Pre-Medical students. We need someone passionate about chemistry education and student success.",
    requirements: [
      "Master's degree in Chemistry",
      "2+ years teaching experience",
      "Knowledge of MDCAT preparation",
      "Strong laboratory skills",
      "Student-centered teaching approach"
    ],
    benefits: [
      "Attractive salary package",
      "Medical coverage",
      "Training and development",
      "Annual performance bonus",
      "Work-life balance"
    ],
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Mathematics Teacher (Engineering)",
    department: "Mathematics Department",
    location: "All Campuses",
    type: "Full-time",
    experience: "4-6 years",
    salary: "Rs. 85,000 - 130,000",
    description: "We need an experienced Mathematics teacher for our Pre-Engineering program. The candidate should have expertise in advanced mathematics concepts.",
    requirements: [
      "Master's degree in Mathematics",
      "4+ years teaching experience",
      "Expertise in Calculus and Algebra",
      "Experience with competitive exams",
      "Strong analytical skills"
    ],
    benefits: [
      "Excellent salary package",
      "Comprehensive health insurance",
      "Professional growth opportunities",
      "Performance incentives",
      "Modern teaching facilities"
    ],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Biology Teacher (Pre-Medical)",
    department: "Science Department",
    location: "Karachi, Lahore, Rawalpindi",
    type: "Full-time",
    experience: "3-5 years",
    salary: "Rs. 80,000 - 115,000",
    description: "Join our biology department to teach Pre-Medical students. We're looking for someone with strong subject knowledge and teaching passion.",
    requirements: [
      "Master's degree in Biology/Botany/Zoology",
      "3+ years teaching experience",
      "Knowledge of medical entrance exams",
      "Laboratory experience",
      "Excellent communication skills"
    ],
    benefits: [
      "Competitive compensation",
      "Health and dental insurance",
      "Professional development",
      "Performance bonuses",
      "Flexible schedule"
    ],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "English Language Instructor",
    department: "Language Department",
    location: "All Campuses",
    type: "Full-time",
    experience: "2-4 years",
    salary: "Rs. 70,000 - 100,000",
    description: "We need an English language instructor to improve students' communication skills and prepare them for competitive exams.",
    requirements: [
      "Master's degree in English Literature/Linguistics",
      "2+ years teaching experience",
      "IELTS/TOEFL certification preferred",
      "Strong grammar and vocabulary",
      "Creative teaching methods"
    ],
    benefits: [
      "Attractive salary",
      "Medical benefits",
      "Training opportunities",
      "Performance rewards",
      "Career advancement"
    ],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Campus Manager",
    department: "Administration",
    location: "Karachi, Lahore",
    type: "Full-time",
    experience: "5-7 years",
    salary: "Rs. 120,000 - 180,000",
    description: "We're looking for an experienced Campus Manager to oversee daily operations and ensure smooth functioning of our campus.",
    requirements: [
      "Master's degree in Business Administration",
      "5+ years management experience",
      "Strong leadership skills",
      "Experience in education sector",
      "Excellent organizational abilities"
    ],
    benefits: [
      "High salary package",
      "Comprehensive benefits",
      "Leadership development",
      "Performance bonuses",
      "Growth opportunities"
    ],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
  }
]

export default function Careers() {
  const { register, handleSubmit, formState: { isSubmitSuccessful }, reset } = useForm()
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  
  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => emblaApi.scrollNext(), 5000)
    return () => clearInterval(interval)
  }, [emblaApi])

  const onSubmit = (data) => {
    console.log('Job apply', data)
    reset()
  }

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
            <h1 className="hero-title">Join Our Team</h1>
            <p className="hero-subtitle mx-auto max-w-3xl">
              Be part of Pakistan's leading educational institution. We're looking for passionate educators 
              and dedicated professionals to help shape the future of education.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand">200+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Faculty Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand">50+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Open Positions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand">15+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand">95%</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Job Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section bg-gradient-to-r from-zinc-50 to-blue-50 dark:from-zinc-900 dark:to-blue-900/20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-primary">Why Work With Vision Academy?</h2>
          <p className="section-lead mx-auto">Discover the benefits of joining our educational family</p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Competitive Salaries",
              description: "We offer attractive salary packages that reflect your expertise and dedication to education.",
              icon: "💰",
              color: "text-green-500"
            },
            {
              title: "Professional Growth",
              description: "Continuous learning opportunities, workshops, and career advancement programs.",
              icon: "📈",
              color: "text-blue-500"
            },
            {
              title: "Work-Life Balance",
              description: "Flexible schedules and supportive environment that values your personal time.",
              icon: "⚖️",
              color: "text-purple-500"
            },
            {
              title: "Modern Facilities",
              description: "State-of-the-art classrooms, technology, and resources to enhance your teaching.",
              icon: "🏫",
              color: "text-orange-500"
            }
          ].map((benefit, index) => (
            <motion.div 
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="interactive-card group text-center"
            >
              <div className={`text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 ${benefit.color}`}>
                {benefit.icon}
              </div>
              <div className="heading-tertiary group-hover:text-accent transition-colors duration-300">
                {benefit.title}
              </div>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Current Openings Slider */}
      <section className="section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-primary">Current Job Openings</h2>
          <p className="section-lead mx-auto">Explore exciting career opportunities at Vision Academy</p>
        </motion.div>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {jobs.map((job) => (
              <motion.div 
                key={job.id}
                whileHover={{ y: -6, scale: 1.02 }} 
                className="min-w-[400px] sm:min-w-[450px] rounded-2xl border border-zinc-200 bg-white/90 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900/80 overflow-hidden group"
              >
                <div className="relative">
                  <img src={job.image} alt={job.title} className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {job.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-brand text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {job.department}
                  </div>
                </div>
                <div className="p-6">
                  <div className="font-bold text-xl text-brand group-hover:text-accent transition-colors duration-300 mb-2">
                    {job.title}
                  </div>
                  <div className="flex items-center text-sm text-zinc-500 mb-3">
                    <span className="mr-4">📍 {job.location}</span>
                    <span className="mr-4">⏰ {job.experience}</span>
                    <span>💰 {job.salary}</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                    {job.description}
                  </p>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-semibold text-brand mb-2">Key Requirements:</div>
                      <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1">
                        {job.requirements.slice(0, 3).map((req, i) => (
                          <li key={i} className="flex items-center">
                            <span className="text-accent mr-2">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-brand mb-2">Benefits:</div>
                      <div className="flex flex-wrap gap-1">
                        {job.benefits.slice(0, 3).map((benefit, i) => (
                          <span key={i} className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-4 btn-outline text-sm">
                    View Details & Apply
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-900/20 dark:via-zinc-900 dark:to-purple-900/20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="heading-primary">Apply for a Position</h2>
            <p className="section-lead">Submit your application and join our team of dedicated educators</p>
          </div>

          {isSubmitSuccessful && (
            <div className="mb-8 p-6 rounded-2xl bg-green-50 text-green-700 border border-green-200 text-center">
              <div className="text-4xl mb-2">✅</div>
              <div className="text-lg font-semibold">Application Submitted Successfully!</div>
              <p className="text-sm">We will review your application and contact you within 5-7 business days.</p>
            </div>
          )}

          <div className="interactive-card">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="form-label">Full Name *</label>
                  <input className="form-input" placeholder="Enter your full name" {...register('name', { required: true })} />
                </div>
                <div>
                  <label className="form-label">Email Address *</label>
                  <input className="form-input" placeholder="your.email@example.com" type="email" {...register('email', { required: true })} />
                </div>
                <div>
                  <label className="form-label">Phone Number *</label>
                  <input className="form-input" placeholder="03XX-XXXXXXX" {...register('phone', { required: true })} />
                </div>
                <div>
                  <label className="form-label">Position Applied For *</label>
                  <select className="form-input" {...register('position', { required: true })}>
                    <option value="">Select Position</option>
                    {jobs.map((job) => <option key={job.id} value={job.title}>{job.title}</option>)}
                  </select>
                </div>
                <div>
                  <label className="form-label">Experience (Years) *</label>
                  <select className="form-input" {...register('experience', { required: true })}>
                    <option value="">Select Experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="2-3">2-3 years</option>
                    <option value="4-5">4-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Preferred Campus *</label>
                  <select className="form-input" {...register('campus', { required: true })}>
                    <option value="">Select Campus</option>
                    <option value="karachi-main">Karachi Main Campus</option>
                    <option value="karachi-north">Karachi North Campus</option>
                    <option value="lahore-main">Lahore Main Campus</option>
                    <option value="islamabad">Islamabad Campus</option>
                    <option value="rawalpindi">Rawalpindi Campus</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label">Cover Letter</label>
                  <textarea className="form-textarea" placeholder="Tell us why you want to join Vision Academy and what makes you a great fit for this position" rows="4" {...register('coverLetter')} />
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label">Upload CV/Resume *</label>
                  <input className="form-input" type="file" accept=".pdf,.doc,.docx" {...register('cv', { required: true })} />
                  <p className="text-xs text-zinc-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max size: 5MB)</p>
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label">Upload Certificates (Optional)</label>
                  <input className="form-input" type="file" accept=".pdf,.jpg,.jpeg,.png" multiple {...register('certificates')} />
                  <p className="text-xs text-zinc-500 mt-1">Upload your educational certificates and qualifications</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <input 
                  type="checkbox" 
                  {...register('termsAccepted', { required: true })}
                  className="mt-1 rounded border-gray-300 text-brand focus:ring-brand"
                />
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  <label className="font-medium">I agree to the terms and conditions *</label>
                  <p className="mt-1">
                    I declare that all information provided is accurate and complete. I understand that providing false 
                    information may result in rejection of my application.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <button className="btn text-lg px-12 py-4" type="submit">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Employee Testimonials */}
      <section className="section bg-gradient-to-r from-brand/10 via-accent/10 to-highlight/10 dark:from-brand/20 dark:via-accent/20 dark:to-highlight/20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-primary">What Our Employees Say</h2>
          <p className="section-lead mx-auto">Hear from our dedicated team members about their experience at Vision Academy</p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              name: "Dr. Sarah Ahmed",
              position: "Head of Science Department",
              experience: "5 years at Vision Academy",
              image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=400&auto=format&fit=crop",
              testimonial: "Working at Vision Academy has been incredibly rewarding. The supportive environment and focus on student success make every day meaningful. The professional development opportunities have helped me grow both personally and professionally."
            },
            {
              name: "Mr. Ali Hassan",
              position: "Mathematics Teacher",
              experience: "3 years at Vision Academy",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
              testimonial: "The collaborative culture here is amazing. We work as a team to ensure every student reaches their potential. The management truly values our input and provides all the resources we need to excel in our teaching."
            },
            {
              name: "Ms. Fatima Khan",
              position: "English Instructor",
              experience: "4 years at Vision Academy",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
              testimonial: "Vision Academy offers the perfect work-life balance. The flexible schedules and supportive management allow me to give my best to students while maintaining my personal commitments. It's truly a great place to work."
            }
          ].map((employee, index) => (
            <motion.div 
              key={employee.name}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="interactive-card group"
            >
              <div className="flex items-center mb-4">
                <img src={employee.image} alt={employee.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                <div>
                  <div className="font-bold text-lg text-brand">{employee.name}</div>
                  <div className="text-sm text-accent font-semibold">{employee.position}</div>
                  <div className="text-xs text-zinc-500">{employee.experience}</div>
                </div>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed italic">
                "{employee.testimonial}"
              </p>
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}


