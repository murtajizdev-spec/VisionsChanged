import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from 'react'

const PAGE_SIZE = 6

const categories = [
  { id: 'all', label: 'All News', count: 24 },
  { id: 'achievements', label: 'Achievements', count: 8 },
  { id: 'announcements', label: 'Announcements', count: 6 },
  { id: 'events', label: 'Events', count: 5 },
  { id: 'results', label: 'Results', count: 3 },
  { id: 'scholarships', label: 'Scholarships', count: 2 }
]

const posts = [
  {
    id: 1,
    title: "Vision Academy Students Secure Top Positions in MDCAT 2024",
    category: "achievements",
    date: "December 15, 2024",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    excerpt: "15 students from our academy secured positions in top 100 of MDCAT 2024, with 3 students achieving perfect scores.",
    content: "We are thrilled to announce that our students have once again demonstrated exceptional performance in the Medical and Dental College Admission Test (MDCAT) 2024. Out of 200 students who appeared for the exam, 15 secured positions in the top 100, with 3 students achieving perfect scores of 200/200. This remarkable achievement reflects our commitment to providing quality education and comprehensive preparation.",
    author: "Dr. Muhammad Ali Khan",
    readTime: "5 min read",
    views: 1250,
    likes: 89
  },
  {
    id: 2,
    title: "New Campus Opening in Lahore - Admissions Open",
    category: "announcements",
    date: "December 10, 2024",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    excerpt: "We're excited to announce our new state-of-the-art campus in Lahore. Early bird admissions are now open with special discounts.",
    content: "Vision Academy is proud to announce the opening of our new flagship campus in Lahore. This state-of-the-art facility spans over 50,000 square feet and features modern classrooms, advanced laboratories, a digital library, and cutting-edge technology.",
    author: "Campus Administration",
    readTime: "4 min read",
    views: 2100,
    likes: 156
  },
  {
    id: 3,
    title: "Annual Science Fair 2024 - Outstanding Projects",
    category: "events",
    date: "December 5, 2024",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Our students showcased innovative science projects at the annual fair, with 3 projects selected for national competition.",
    content: "The Annual Science Fair 2024 was a tremendous success, showcasing the creativity and scientific thinking of our students. Over 150 projects were displayed across various categories including Physics, Chemistry, Biology, and Environmental Science.",
    author: "Science Department",
    readTime: "6 min read",
    views: 1800,
    likes: 134
  },
  {
    id: 4,
    title: "Scholarship Program for Meritorious Students",
    category: "scholarships",
    date: "November 28, 2024",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Full and partial scholarships available for students with exceptional academic performance. Application deadline: January 15, 2025.",
    content: "Vision Academy is committed to making quality education accessible to all deserving students. We are pleased to announce our comprehensive scholarship program for the academic year 2025. Full scholarships covering 100% of tuition fees are available for students who have achieved 90% or above in their previous examinations. Partial scholarships of 50% and 25% are also available based on academic merit and financial need. The scholarship program is open to students from all backgrounds and includes additional benefits such as free study materials, access to our digital library, and mentorship programs.",
    author: "Scholarship Committee",
    readTime: "4 min read",
    views: 3200,
    likes: 267
  },
  {
    id: 5,
    title: "FSc Pre-Engineering Results 2024 - 95% A+ Grades",
    category: "results",
    date: "November 20, 2024",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Outstanding results in FSc Pre-Engineering with 95% of students achieving A+ grades and securing admissions in top engineering universities.",
    content: "We are delighted to announce exceptional results in FSc Pre-Engineering 2024. Out of 300 students who appeared for the examinations, 285 students (95%) achieved A+ grades, setting a new record for our academy. Many of our students have secured admissions in prestigious engineering universities including NUST, UET, GIKI, and FAST. The success rate in entry tests for engineering universities was 87%, which is significantly higher than the national average. Our specialized preparation program, which includes intensive practice sessions, mock tests, and personalized guidance, has proven to be highly effective.",
    author: "Academic Department",
    readTime: "5 min read",
    views: 2800,
    likes: 198
  },
  {
    id: 6,
    title: "Teacher Training Workshop - Modern Teaching Methods",
    category: "events",
    date: "November 15, 2024",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Comprehensive training workshop for faculty members on modern teaching methodologies and technology integration in education.",
    content: "Vision Academy conducted a comprehensive teacher training workshop focusing on modern teaching methodologies and technology integration. The three-day workshop was attended by 150 faculty members from all campuses. The program covered various topics including active learning strategies, digital tools for education, student engagement techniques, and assessment methods. Renowned education experts from leading universities conducted sessions on innovative teaching approaches. The workshop also included hands-on training on using smart boards, educational software, and online learning platforms.",
    author: "Training Department",
    readTime: "4 min read",
    views: 1200,
    likes: 87
  }
]

export default function Blog() {
  const [page, setPage] = useState(1)
  const [category, setCategory] = useState('all')
  const [selectedPost, setSelectedPost] = useState(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  
  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => emblaApi.scrollNext(), 6000)
    return () => clearInterval(interval)
  }, [emblaApi])

  const filtered = useMemo(() => category === 'all' ? posts : posts.filter(p => p.category === category), [category])
  const totalFilteredPages = Math.ceil(filtered.length / PAGE_SIZE) || 1
  const current = useMemo(() => filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE), [page, filtered])

  const handleReadMore = (post) => {
    setSelectedPost(post)
    window.open(`/blog/${post.id}`, '_blank')
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
            <h1 className="hero-title">News & Updates</h1>
            <p className="hero-subtitle mx-auto max-w-3xl">
              Stay informed with the latest news, achievements, events, and announcements from Vision Academy. 
              Discover inspiring stories, academic results, and exciting opportunities.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand">24</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">News Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand">15K+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Monthly Views</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand">95%</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand">200+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Faculty Members</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured News Slider */}
      <section className="section bg-gradient-to-r from-zinc-50 to-blue-50 dark:from-zinc-900 dark:to-blue-900/20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-primary">Featured News</h2>
          <p className="section-lead mx-auto">Latest highlights and important announcements</p>
        </motion.div>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {posts.slice(0, 4).map((post) => (
              <motion.div 
                key={post.id}
                whileHover={{ y: -6, scale: 1.02 }} 
                className="min-w-[400px] sm:min-w-[450px] rounded-2xl border border-zinc-200 bg-white/90 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900/80 overflow-hidden group"
              >
                <div className="relative">
                  <img src={post.image} alt={post.title} className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category.toUpperCase()}
                  </div>
                  <div className="absolute top-4 right-4 bg-brand text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.readTime}
                  </div>
                </div>
                <div className="p-6">
                  <div className="font-bold text-xl text-brand group-hover:text-accent transition-colors duration-300 mb-2">
                    {post.title}
                  </div>
                  <div className="flex items-center text-sm text-zinc-500 mb-3">
                    <span className="mr-4">📅 {post.date}</span>
                    <span className="mr-4">👤 {post.author}</span>
                    <span>👁️ {post.views} views</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-zinc-500">
                      <span className="mr-2">❤️ {post.likes}</span>
                    </div>
                    <button 
                      onClick={() => handleReadMore(post)}
                      className="text-accent hover:text-brand font-semibold text-sm transition-colors duration-300"
                    >
                      Read Full Article →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories and Filter */}
      <section className="section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-primary">All News & Updates</h2>
          <p className="section-lead mx-auto">Browse through our comprehensive collection of news and updates</p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => { setCategory(c.id); setPage(1) }}
              className={`rounded-full px-6 py-3 text-sm font-medium border transition-all duration-300 ${
                category === c.id 
                  ? 'bg-brand text-white border-transparent shadow-lg' 
                  : 'border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:border-brand/50'
              }`}
            >
              {c.label} ({c.count})
            </button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {current.map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }} 
              className="interactive-card overflow-hidden group"
            >
              <div className="relative">
                <img src={post.image} alt={post.title} className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {post.category.toUpperCase()}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 text-zinc-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {post.readTime}
                </div>
              </div>
              <div className="p-6">
                <div className="font-bold text-lg text-brand group-hover:text-accent transition-colors duration-300 mb-2">
                  {post.title}
                </div>
                <div className="flex items-center text-sm text-zinc-500 mb-3">
                  <span className="mr-4">📅 {post.date}</span>
                  <span>👁️ {post.views}</span>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-zinc-500">
                    <span className="mr-2">❤️ {post.likes}</span>
                    <span>👤 {post.author}</span>
                  </div>
                  <button 
                    onClick={() => handleReadMore(post)}
                    className="text-accent hover:text-brand font-semibold text-sm transition-colors duration-300"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <button 
            className="btn-outline" 
            disabled={page === 1} 
            onClick={() => setPage((p) => p - 1)}
          >
            ← Previous
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalFilteredPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setPage(i + 1)}
                className={`w-10 h-10 rounded-full text-sm font-medium transition-all duration-300 ${
                  page === i + 1
                    ? 'bg-brand text-white'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-brand/20'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button 
            className="btn-outline" 
            disabled={page === totalFilteredPages} 
            onClick={() => setPage((p) => p + 1)}
          >
            Next →
          </button>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="section bg-gradient-to-br from-brand/10 via-accent/10 to-highlight/10 dark:from-brand/20 dark:via-accent/20 dark:to-highlight/20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="heading-primary">Stay Updated</h2>
          <p className="section-lead mb-8">
            Subscribe to our newsletter and never miss important updates, announcements, and news from Vision Academy.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 form-input"
            />
            <button className="btn px-8">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-zinc-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </section>
    </main>
  )
}


