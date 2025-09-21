const kinds = ['announcements', 'events', 'results', 'tips']
export const posts = Array.from({ length: 24 }).map((_, i) => {
  const category = kinds[i % kinds.length]
  const titles = {
    announcements: `New Campus Launch — Phase ${Math.floor(i / 4) + 1}`,
    events: `Open House & Orientation — Batch ${i + 1}`,
    results: `Top Scorers Announced — Session ${2020 + ((i % 5) + 1)}`,
    tips: `Study Tips: Mastering Time Management #${(i % 6) + 1}`
  }
  return {
    id: `post-${i + 1}`,
    title: titles[category],
    category,
    date: `202${i % 5}-0${(i % 9) + 1}-1${i % 9}`,
    image: `/images/blog/post-${(i % 5) + 1}.jpg`,
    description: 'Highlights, insights, and updates from Vision Academy — stay informed.',
    content: 'Full article content goes here. Vision Academy continues to deliver outstanding results with dedicated faculty, structured testing, and personalized mentoring.'
  }
})


