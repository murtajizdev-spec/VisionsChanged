const unsplash = [
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop'
]

export const photos = Array.from({ length: 12 }).map((_, i) => ({
  id: `p${i + 1}`,
  src: unsplash[i % unsplash.length],
  alt: `Gallery photo ${(i % unsplash.length) + 1}`
}))

export const videos = [
  { id: 'v1', title: 'Campus Tour', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 'v2', title: 'Faculty Talk', url: 'https://www.youtube.com/embed/oHg5SJYRHA0' }
]


