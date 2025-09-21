import { motion } from 'framer-motion'
import { useState } from 'react'

const galleryData = {
  photos: [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
      alt: "Modern Classroom",
      category: "Classrooms",
      title: "State-of-the-art Classrooms"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
      alt: "Science Laboratory",
      category: "Laboratories",
      title: "Advanced Science Laboratory"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop",
      alt: "Library",
      category: "Library",
      title: "Digital Library"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1516321318423-f06f85b50450?q=80&w=1200&auto=format&fit=crop",
      alt: "Computer Lab",
      category: "Laboratories",
      title: "Computer Laboratory"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1200&auto=format&fit=crop",
      alt: "Cafeteria",
      category: "Facilities",
      title: "Student Cafeteria"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
      alt: "Auditorium",
      category: "Facilities",
      title: "Main Auditorium"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
      alt: "Sports Ground",
      category: "Sports",
      title: "Sports Complex"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
      alt: "Study Area",
      category: "Study Areas",
      title: "Quiet Study Zones"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop",
      alt: "Reception",
      category: "Facilities",
      title: "Main Reception"
    }
  ],
  videos: [
    {
      id: 1,
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "Campus Tour",
      description: "Take a virtual tour of our modern campus facilities"
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "Student Life",
      description: "Experience the vibrant student life at Vision Academy"
    }
  ]
}

const categories = [
  { id: 'all', label: 'All', count: 9 },
  { id: 'Classrooms', label: 'Classrooms', count: 1 },
  { id: 'Laboratories', label: 'Laboratories', count: 2 },
  { id: 'Library', label: 'Library', count: 1 },
  { id: 'Facilities', label: 'Facilities', count: 3 },
  { id: 'Sports', label: 'Sports', count: 1 },
  { id: 'Study Areas', label: 'Study Areas', count: 1 }
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredPhotos = selectedCategory === 'all' 
    ? galleryData.photos 
    : galleryData.photos.filter(photo => photo.category === selectedCategory)

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
            <h1 className="hero-title">Campus Gallery</h1>
            <p className="hero-subtitle mx-auto max-w-3xl">
              Explore our state-of-the-art facilities, modern classrooms, and vibrant campus life through our photo and video gallery.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand">50+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Photos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand">10+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Videos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand">6</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand">360°</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Virtual Tour</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-primary">Photo Gallery</h2>
          <p className="section-lead mx-auto">Browse through our campus facilities and student life moments</p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full px-6 py-3 text-sm font-medium border transition-all duration-300 ${
                selectedCategory === category.id 
                  ? 'bg-brand text-white border-transparent shadow-lg' 
                  : 'border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:border-brand/50'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredPhotos.map((photo, index) => (
            <motion.div 
              key={photo.id}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }} 
              className="interactive-card overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImage(photo)}
            >
              <div className="relative">
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 text-zinc-800 px-4 py-2 rounded-full text-sm font-semibold">
                      View Details
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {photo.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-brand group-hover:text-accent transition-colors duration-300">
                  {photo.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Gallery */}
      <section className="section bg-gradient-to-r from-zinc-50 to-blue-50 dark:from-zinc-900 dark:to-blue-900/20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-primary">Video Gallery</h2>
          <p className="section-lead mx-auto">Watch our campus videos and student testimonials</p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {galleryData.videos.map((video, index) => (
            <motion.div 
              key={video.id}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="interactive-card overflow-hidden"
            >
              <div className="aspect-video">
                <iframe 
                  className="h-full w-full rounded-t-2xl" 
                  src={video.url} 
                  title={video.title} 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h3 className="heading-tertiary mb-2">{video.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="section bg-gradient-to-br from-brand/10 via-accent/10 to-highlight/10 dark:from-brand/20 dark:via-accent/20 dark:to-highlight/20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="heading-primary">Take a Virtual Tour</h2>
          <p className="section-lead mb-8">
            Experience our campus from anywhere in the world with our interactive 360° virtual tour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn text-lg px-8 py-4">
              Start Virtual Tour
            </button>
            <button className="btn-outline text-lg px-8 py-4">
              Schedule Visit
            </button>
          </div>
        </motion.div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-[90vh] bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[70vh] object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-brand mb-2">{selectedImage.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">{selectedImage.alt}</p>
              <div className="flex justify-between items-center">
                <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {selectedImage.category}
                </span>
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="btn-outline"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}


