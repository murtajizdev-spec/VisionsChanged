import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './index.css'
import { Home, Programs, Admissions, Careers, Gallery, Contact, Blog, About } from '@/pages'
import ArticleDetail from '@/pages/ArticleDetail'
import { Facebook, Instagram, Youtube } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand/20 shadow-lg dark:bg-zinc-900/95 dark:border-zinc-800">
      <div className="container-app flex h-16 items-center justify-between">
        <NavLink to="/" className="text-xl font-bold text-gradient font-display">Vision Academy</NavLink>
        <nav className="hidden md:flex gap-6 text-sm">
          {[
            { to: '/programs', label: 'Programs' },
            { to: '/admissions', label: 'Admissions' },
            { to: '/careers', label: 'Careers' },
            { to: '/gallery', label: 'Gallery' },
            { to: '/about', label: 'About' },
            { to: '/blog', label: 'News' },
            { to: '/contact', label: 'Contact' }
          ].map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `px-3 py-2 rounded-lg transition-all duration-300 hover:text-brand hover:bg-brand/10 font-medium ${isActive ? 'text-brand font-semibold bg-brand/10' : 'text-zinc-600 hover:text-zinc-900'}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button className="lg:hidden btn" onClick={() => setOpen(!open)}>Menu</button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-zinc-200 dark:border-zinc-800">
          <div className="container-app grid gap-2 py-3 text-sm">
            {[
              '/programs','/admissions','/careers','/gallery','/about','/blog','/contact'
            ].map((p) => (
              <NavLink key={p} to={p} onClick={() => setOpen(false)} className="py-1">
                {p.replace('/','').replace(/\b\w/g, (m) => m.toUpperCase())}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-br from-brand/5 via-accent/5 to-highlight/5 dark:from-zinc-900/50 dark:to-brand/10 border-t border-brand/20 dark:border-zinc-800">
      <div className="container-app py-12 text-sm grid gap-8 sm:grid-cols-3">
        <div>
          <div className="text-xl font-bold text-gradient font-display mb-3">Vision Academy Evening Coaching</div>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">Quality education with results that speak for themselves.</p>
        </div>
        <div>
          <div className="font-semibold text-brand mb-4">Quick Links</div>
          <ul className="grid gap-2">
            <li><NavLink to="/programs" className="text-zinc-600 hover:text-brand transition-colors duration-300">Programs</NavLink></li>
            <li><NavLink to="/admissions" className="text-zinc-600 hover:text-brand transition-colors duration-300">Admissions</NavLink></li>
            <li><NavLink to="/careers" className="text-zinc-600 hover:text-brand transition-colors duration-300">Careers</NavLink></li>
            <li><NavLink to="/about" className="text-zinc-600 hover:text-brand transition-colors duration-300">About</NavLink></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-brand mb-4">Contact</div>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">info@visionacademy.edu.pk</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="text-zinc-600 hover:text-brand transition-colors duration-300 hover:scale-110 transform">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="text-zinc-600 hover:text-brand transition-colors duration-300 hover:scale-110 transform">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="YouTube" className="text-zinc-600 hover:text-brand transition-colors duration-300 hover:scale-110 transform">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-brand/20 dark:border-zinc-800 bg-brand/5 dark:bg-zinc-900/30">
        <div className="container-app py-6 text-xs text-zinc-500 text-center">
          © {new Date().getFullYear()} Vision Academy. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function ThemeToggle() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') setDark(true)
    else if (saved === 'light') setDark(false)
    else setDark(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
  }, [])
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])
  return (
    <label className="relative inline-flex items-center cursor-pointer" aria-label="Toggle dark mode">
      <input type="checkbox" className="sr-only peer" checked={dark} onChange={(e) => setDark(e.target.checked)} />
      <div className="h-6 w-11 rounded-full bg-zinc-300 dark:bg-zinc-700 peer-checked:bg-brand transition-colors"></div>
      <div className="pointer-events-none absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-5"></div>
    </label>
  )
}


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-dvh flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<ArticleDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}


