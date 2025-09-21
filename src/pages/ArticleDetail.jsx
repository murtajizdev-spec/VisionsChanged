import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

const articles = {
  1: {
    id: 1,
    title: "Vision Academy Students Secure Top Positions in MDCAT 2024",
    category: "achievements",
    date: "December 15, 2024",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    author: "Dr. Muhammad Ali Khan",
    readTime: "5 min read",
    views: 1250,
    likes: 89,
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
          We are thrilled to announce that our students have once again demonstrated exceptional performance in the Medical and Dental College Admission Test (MDCAT) 2024. This remarkable achievement reflects our commitment to providing quality education and comprehensive preparation.
        </p>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Outstanding Results</h2>
        <p class="mb-6">
          Out of 200 students who appeared for the exam, 15 secured positions in the top 100, with 3 students achieving perfect scores of 200/200. This represents a 7.5% success rate in the top 100, which is significantly higher than the national average of 2.3%.
        </p>
        
        <div class="bg-gradient-to-r from-brand/10 to-accent/10 p-6 rounded-2xl mb-8">
          <h3 class="text-xl font-bold text-brand mb-4">Key Statistics</h3>
          <ul class="space-y-2">
            <li class="flex justify-between"><span>Total Students Appeared:</span> <strong>200</strong></li>
            <li class="flex justify-between"><span>Top 100 Positions:</span> <strong>15 students</strong></li>
            <li class="flex justify-between"><span>Perfect Scores (200/200):</span> <strong>3 students</strong></li>
            <li class="flex justify-between"><span>Average Score:</span> <strong>187/200</strong></li>
            <li class="flex justify-between"><span>Success Rate:</span> <strong>95%</strong></li>
          </ul>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Top Performers</h2>
        <p class="mb-6">
          We are proud to highlight our top performers who have made us proud:
        </p>
        
        <div class="grid gap-4 md:grid-cols-3 mb-8">
          <div class="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-lg">
            <h4 class="font-bold text-brand">Ayesha Khan</h4>
            <p class="text-sm text-zinc-600 dark:text-zinc-400">Score: 200/200</p>
            <p class="text-sm text-zinc-600 dark:text-zinc-400">Rank: #3 Nationally</p>
          </div>
          <div class="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-lg">
            <h4 class="font-bold text-brand">Ahmed Hassan</h4>
            <p class="text-sm text-zinc-600 dark:text-zinc-400">Score: 200/200</p>
            <p class="text-sm text-zinc-600 dark:text-zinc-400">Rank: #7 Nationally</p>
          </div>
          <div class="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-lg">
            <h4 class="font-bold text-brand">Fatima Ali</h4>
            <p class="text-sm text-zinc-600 dark:text-zinc-400">Score: 200/200</p>
            <p class="text-sm text-zinc-600 dark:text-zinc-400">Rank: #12 Nationally</p>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Our Preparation Strategy</h2>
        <p class="mb-6">
          Our specialized MDCAT preparation program includes:
        </p>
        
        <ul class="space-y-3 mb-8">
          <li class="flex items-start">
            <span class="text-accent mr-3 mt-1">✓</span>
            <span>Intensive practice sessions with 200+ mock tests</span>
          </li>
          <li class="flex items-start">
            <span class="text-accent mr-3 mt-1">✓</span>
            <span>Personalized mentoring and one-on-one guidance</span>
          </li>
          <li class="flex items-start">
            <span class="text-accent mr-3 mt-1">✓</span>
            <span>Comprehensive study material covering all subjects</span>
          </li>
          <li class="flex items-start">
            <span class="text-accent mr-3 mt-1">✓</span>
            <span>Regular performance analytics and improvement tracking</span>
          </li>
          <li class="flex items-start">
            <span class="text-accent mr-3 mt-1">✓</span>
            <span>Expert faculty with 10+ years of MDCAT experience</span>
          </li>
        </ul>
        
        <h2 class="text-2xl font-bold text-brand mb-4">University Admissions</h2>
        <p class="mb-6">
          Our successful students have secured admissions in prestigious medical colleges across Pakistan:
        </p>
        
        <div class="grid gap-3 md:grid-cols-2 mb-8">
          <div class="flex items-center p-3 bg-white dark:bg-zinc-800 rounded-lg">
            <span class="text-2xl mr-3">🏥</span>
            <div>
              <div class="font-semibold">Aga Khan University</div>
              <div class="text-sm text-zinc-600 dark:text-zinc-400">5 students admitted</div>
            </div>
          </div>
          <div class="flex items-center p-3 bg-white dark:bg-zinc-800 rounded-lg">
            <span class="text-2xl mr-3">🏥</span>
            <div>
              <div class="font-semibold">King Edward Medical University</div>
              <div class="text-sm text-zinc-600 dark:text-zinc-400">4 students admitted</div>
            </div>
          </div>
          <div class="flex items-center p-3 bg-white dark:bg-zinc-800 rounded-lg">
            <span class="text-2xl mr-3">🏥</span>
            <div>
              <div class="font-semibold">Dow University of Health Sciences</div>
              <div class="text-sm text-zinc-600 dark:text-zinc-400">3 students admitted</div>
            </div>
          </div>
          <div class="flex items-center p-3 bg-white dark:bg-zinc-800 rounded-lg">
            <span class="text-2xl mr-3">🏥</span>
            <div>
              <div class="font-semibold">Lahore Medical College</div>
              <div class="text-sm text-zinc-600 dark:text-zinc-400">3 students admitted</div>
            </div>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Student Testimonials</h2>
        <div class="bg-gradient-to-r from-accent/10 to-brand/10 p-6 rounded-2xl mb-8">
          <blockquote class="text-lg italic mb-4">
            "Vision Academy's structured approach and dedicated teachers helped me achieve my dream of getting into Aga Khan University. The regular testing and personalized feedback made all the difference."
          </blockquote>
          <cite class="font-semibold text-brand">- Ayesha Khan, MDCAT 2024 Topper</cite>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Looking Ahead</h2>
        <p class="mb-6">
          As we celebrate this remarkable achievement, we remain committed to maintaining our high standards and helping more students achieve their dreams. Our MDCAT 2025 preparation program is already underway, and we're confident that our students will continue to excel.
        </p>
        
        <div class="bg-gradient-to-r from-brand to-accent text-white p-6 rounded-2xl text-center">
          <h3 class="text-xl font-bold mb-2">Join Our Success Story</h3>
          <p class="mb-4">Ready to achieve your medical career dreams? Enroll in our MDCAT preparation program today!</p>
          <button onclick="window.location.href='/admissions'" class="bg-white text-brand px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
            Apply Now
          </button>
        </div>
      </div>
    `
  },
  2: {
    id: 2,
    title: "New Campus Opening in Lahore - Admissions Open",
    category: "announcements",
    date: "December 10, 2024",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    author: "Campus Administration",
    readTime: "4 min read",
    views: 2100,
    likes: 156,
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
          Vision Academy is proud to announce the opening of our new flagship campus in Lahore. This state-of-the-art facility represents our commitment to expanding quality education across Pakistan.
        </p>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Campus Overview</h2>
        <p class="mb-6">
          Our new Lahore campus spans over 50,000 square feet and features modern classrooms, advanced laboratories, a digital library, and cutting-edge technology. The campus is designed to provide an optimal learning environment for our students.
        </p>
        
        <div class="grid gap-6 md:grid-cols-2 mb-8">
          <div class="bg-gradient-to-br from-brand/10 to-accent/10 p-6 rounded-2xl">
            <h3 class="text-xl font-bold text-brand mb-4">Facilities</h3>
            <ul class="space-y-2">
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> 25 Air-conditioned Classrooms</li>
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> 5 Science Laboratories</li>
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> Digital Library with 10,000+ Books</li>
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> Computer Lab with 50+ PCs</li>
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> Auditorium for 500+ Students</li>
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> Cafeteria and Recreation Area</li>
            </ul>
          </div>
          <div class="bg-gradient-to-br from-accent/10 to-brand/10 p-6 rounded-2xl">
            <h3 class="text-xl font-bold text-brand mb-4">Programs Offered</h3>
            <ul class="space-y-2">
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> Matric Science (9th-10th)</li>
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> FSc Pre-Medical (11th-12th)</li>
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> FSc Pre-Engineering (11th-12th)</li>
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> MDCAT Preparation</li>
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> ECAT Preparation</li>
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> SAT Preparation</li>
            </ul>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Early Bird Special Offer</h2>
        <div class="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-2xl mb-8">
          <h3 class="text-2xl font-bold mb-2">Limited Time Offer!</h3>
          <p class="text-lg mb-4">Get up to 30% discount on tuition fees for the first 100 students</p>
          <div class="grid grid-cols-3 gap-4 text-center">
            <div>
              <div class="text-3xl font-bold">30%</div>
              <div class="text-sm">First 50 Students</div>
            </div>
            <div>
              <div class="text-3xl font-bold">20%</div>
              <div class="text-sm">Next 30 Students</div>
            </div>
            <div>
              <div class="text-3xl font-bold">10%</div>
              <div class="text-sm">Next 20 Students</div>
            </div>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Location & Contact</h2>
        <div class="bg-white dark:bg-zinc-800 p-6 rounded-2xl mb-8">
          <div class="grid gap-4 md:grid-cols-2">
            <div>
              <h4 class="font-bold text-brand mb-2">Address</h4>
              <p class="text-zinc-600 dark:text-zinc-400">
                Plot #45, Block H-2, Johar Town<br>
                Lahore, Punjab 54000<br>
                Pakistan
              </p>
            </div>
            <div>
              <h4 class="font-bold text-brand mb-2">Contact Information</h4>
              <p class="text-zinc-600 dark:text-zinc-400">
                Phone: +92-42-1234567<br>
                Email: lahore@visionacademy.edu.pk<br>
                Website: www.visionacademy.edu.pk
              </p>
            </div>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Admission Process</h2>
        <div class="space-y-4 mb-8">
          <div class="flex items-start">
            <div class="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
            <div>
              <h4 class="font-semibold text-brand">Submit Application</h4>
              <p class="text-zinc-600 dark:text-zinc-400">Fill out the online application form with required documents</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
            <div>
              <h4 class="font-semibold text-brand">Entrance Test</h4>
              <p class="text-zinc-600 dark:text-zinc-400">Take our comprehensive entrance test to assess your current level</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
            <div>
              <h4 class="font-semibold text-brand">Interview</h4>
              <p class="text-zinc-600 dark:text-zinc-400">Attend a personal interview with our academic team</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
            <div>
              <h4 class="font-semibold text-brand">Admission Confirmation</h4>
              <p class="text-zinc-600 dark:text-zinc-400">Receive your admission letter and complete the enrollment process</p>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-brand to-accent text-white p-6 rounded-2xl text-center">
          <h3 class="text-xl font-bold mb-2">Ready to Join Us?</h3>
          <p class="mb-4">Don't miss this opportunity to be part of Pakistan's leading educational institution!</p>
          <button onclick="window.location.href='/admissions'" class="bg-white text-brand px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
            Apply Now
          </button>
        </div>
      </div>
    `
  },
  3: {
    id: 3,
    title: "Annual Science Fair 2024 - Outstanding Projects",
    category: "events",
    date: "December 5, 2024",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    author: "Science Department",
    readTime: "6 min read",
    views: 1800,
    likes: 134,
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
          The Annual Science Fair 2024 was a tremendous success, showcasing the creativity and scientific thinking of our students. This year's fair exceeded all expectations with innovative projects and outstanding presentations.
        </p>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Event Highlights</h2>
        <p class="mb-6">
          Over 150 projects were displayed across various categories including Physics, Chemistry, Biology, and Environmental Science. The fair was judged by renowned scientists and educators from leading universities across Pakistan.
        </p>
        
        <div class="grid gap-6 md:grid-cols-3 mb-8">
          <div class="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 rounded-2xl text-center">
            <div class="text-4xl mb-3">🔬</div>
            <h3 class="text-xl font-bold text-brand mb-2">Physics Projects</h3>
            <p class="text-3xl font-bold text-blue-500">45</p>
            <p class="text-sm text-zinc-600 dark:text-zinc-400">Projects Displayed</p>
          </div>
          <div class="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-2xl text-center">
            <div class="text-4xl mb-3">🧪</div>
            <h3 class="text-xl font-bold text-brand mb-2">Chemistry Projects</h3>
            <p class="text-3xl font-bold text-green-500">38</p>
            <p class="text-sm text-zinc-600 dark:text-zinc-400">Projects Displayed</p>
          </div>
          <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-2xl text-center">
            <div class="text-4xl mb-3">🧬</div>
            <h3 class="text-xl font-bold text-brand mb-2">Biology Projects</h3>
            <p class="text-3xl font-bold text-purple-500">42</p>
            <p class="text-sm text-zinc-600 dark:text-zinc-400">Projects Displayed</p>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">National Competition Qualifiers</h2>
        <p class="mb-6">
          Three outstanding projects have been selected to represent our academy at the National Science Fair:
        </p>
        
        <div class="space-y-6 mb-8">
          <div class="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-lg">
            <div class="flex items-start">
              <div class="bg-gold-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">1</div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-brand mb-2">Solar-Powered Water Purification System</h3>
                <p class="text-accent font-semibold mb-2">by Ahmed Hassan (FSc Pre-Engineering)</p>
                <p class="text-zinc-600 dark:text-zinc-400 mb-3">
                  An innovative system that uses solar energy to purify contaminated water, making clean drinking water accessible in remote areas. The project includes a solar panel array, filtration system, and UV sterilization unit.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Physics</span>
                  <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Environmental</span>
                  <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Innovation</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-lg">
            <div class="flex items-start">
              <div class="bg-gray-400 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">2</div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-brand mb-2">Biodegradable Plastic from Banana Peels</h3>
                <p class="text-accent font-semibold mb-2">by Fatima Ali (FSc Pre-Medical)</p>
                <p class="text-zinc-600 dark:text-zinc-400 mb-3">
                  A sustainable solution to plastic pollution using banana peels to create biodegradable plastic. The project demonstrates the chemical process of extracting starch and cellulose from banana peels to form a plastic-like material.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Chemistry</span>
                  <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Sustainability</span>
                  <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Environment</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-lg">
            <div class="flex items-start">
              <div class="bg-amber-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">3</div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-brand mb-2">Smart Irrigation System</h3>
                <p class="text-accent font-semibold mb-2">by Muhammad Usman (FSc Pre-Engineering)</p>
                <p class="text-zinc-600 dark:text-zinc-400 mb-3">
                  An IoT-based irrigation system that monitors soil moisture levels and automatically waters plants. The system includes sensors, microcontrollers, and a mobile app for remote monitoring and control.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Technology</span>
                  <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Agriculture</span>
                  <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">IoT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Judges & Awards</h2>
        <p class="mb-6">
          The fair was judged by a panel of distinguished scientists and educators:
        </p>
        
        <div class="grid gap-4 md:grid-cols-2 mb-8">
          <div class="bg-gradient-to-r from-brand/10 to-accent/10 p-6 rounded-2xl">
            <h3 class="text-xl font-bold text-brand mb-4">Judging Panel</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <span class="text-accent mr-2">👨‍🔬</span>
                <span>Dr. Sarah Ahmed - Professor of Physics, LUMS</span>
              </li>
              <li class="flex items-center">
                <span class="text-accent mr-2">👩‍🔬</span>
                <span>Dr. Ali Hassan - Chemistry Department, UET</span>
              </li>
              <li class="flex items-center">
                <span class="text-accent mr-2">👨‍🔬</span>
                <span>Prof. Fatima Khan - Biology, Punjab University</span>
              </li>
              <li class="flex items-center">
                <span class="text-accent mr-2">👩‍🔬</span>
                <span>Dr. Usman Sheikh - Environmental Science, NUST</span>
              </li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-accent/10 to-brand/10 p-6 rounded-2xl">
            <h3 class="text-xl font-bold text-brand mb-4">Awards Given</h3>
            <ul class="space-y-2">
              <li class="flex items-center">
                <span class="text-yellow-500 mr-2">🏆</span>
                <span>Best Overall Project - Solar Water Purification</span>
              </li>
              <li class="flex items-center">
                <span class="text-gray-400 mr-2">🥈</span>
                <span>Most Innovative - Biodegradable Plastic</span>
              </li>
              <li class="flex items-center">
                <span class="text-amber-600 mr-2">🥉</span>
                <span>Best Technology - Smart Irrigation</span>
              </li>
              <li class="flex items-center">
                <span class="text-green-500 mr-2">🌱</span>
                <span>Environmental Impact - 5 projects</span>
              </li>
            </ul>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Interactive Demonstrations</h2>
        <p class="mb-6">
          The fair also featured interactive demonstrations and activities:
        </p>
        
        <div class="grid gap-4 md:grid-cols-3 mb-8">
          <div class="text-center p-4 bg-white dark:bg-zinc-800 rounded-xl">
            <div class="text-3xl mb-2">🧪</div>
            <h4 class="font-semibold text-brand">Chemistry Magic Show</h4>
            <p class="text-sm text-zinc-600 dark:text-zinc-400">Interactive chemistry demonstrations</p>
          </div>
          <div class="text-center p-4 bg-white dark:bg-zinc-800 rounded-xl">
            <div class="text-3xl mb-2">🔬</div>
            <h4 class="font-semibold text-brand">Microscope Station</h4>
            <p class="text-sm text-zinc-600 dark:text-zinc-400">Explore microscopic world</p>
          </div>
          <div class="text-center p-4 bg-white dark:bg-zinc-800 rounded-xl">
            <div class="text-3xl mb-2">🤖</div>
            <h4 class="font-semibold text-brand">Robotics Demo</h4>
            <p class="text-sm text-zinc-600 dark:text-zinc-400">AI and robotics showcase</p>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Student Feedback</h2>
        <div class="bg-gradient-to-r from-accent/10 to-brand/10 p-6 rounded-2xl mb-8">
          <blockquote class="text-lg italic mb-4">
            "The science fair was an amazing experience! It gave us the opportunity to apply what we learned in class to real-world problems. Working on our project taught us so much about research, experimentation, and presentation skills."
          </blockquote>
          <cite class="font-semibold text-brand">- Ahmed Hassan, Project Winner</cite>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Looking Forward</h2>
        <p class="mb-6">
          The success of this year's science fair has motivated us to make next year's event even bigger and better. We're already planning for Science Fair 2025, which will include more categories, international judges, and cash prizes for winners.
        </p>
        
        <div class="bg-gradient-to-r from-brand to-accent text-white p-6 rounded-2xl text-center">
          <h3 class="text-xl font-bold mb-2">Join Our Science Community</h3>
          <p class="mb-4">Interested in participating in next year's science fair? Start working on your project ideas now!</p>
          <button onclick="window.location.href='/programs'" class="bg-white text-brand px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    `
  },
  4: {
    id: 4,
    title: "Scholarship Program for Meritorious Students",
    category: "scholarships",
    date: "November 28, 2024",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
    author: "Scholarship Committee",
    readTime: "4 min read",
    views: 3200,
    likes: 267,
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
          Vision Academy is committed to making quality education accessible to all deserving students. We are pleased to announce our comprehensive scholarship program for the academic year 2025.
        </p>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Scholarship Categories</h2>
        <div class="grid gap-6 md:grid-cols-3 mb-8">
          <div class="bg-gradient-to-br from-yellow-400/10 to-orange-500/10 p-6 rounded-2xl text-center">
            <div class="text-4xl mb-3">🏆</div>
            <h3 class="text-xl font-bold text-brand mb-2">Full Scholarship</h3>
            <p class="text-3xl font-bold text-yellow-500">100%</p>
            <p class="text-sm text-zinc-600 dark:text-zinc-400 mb-4">Tuition Fee Waiver</p>
            <ul class="text-sm space-y-1 text-left">
              <li>• 90%+ in previous exams</li>
              <li>• Financial need verification</li>
              <li>• Free study materials</li>
              <li>• Mentorship program</li>
            </ul>
          </div>
          <div class="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 rounded-2xl text-center">
            <div class="text-4xl mb-3">🥈</div>
            <h3 class="text-xl font-bold text-brand mb-2">Partial Scholarship</h3>
            <p class="text-3xl font-bold text-blue-500">50%</p>
            <p class="text-sm text-zinc-600 dark:text-zinc-400 mb-4">Tuition Fee Reduction</p>
            <ul class="text-sm space-y-1 text-left">
              <li>• 85%+ in previous exams</li>
              <li>• Good academic record</li>
              <li>• Discounted materials</li>
              <li>• Study support</li>
            </ul>
          </div>
          <div class="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-2xl text-center">
            <div class="text-4xl mb-3">🥉</div>
            <h3 class="text-xl font-bold text-brand mb-2">Merit Scholarship</h3>
            <p class="text-3xl font-bold text-green-500">25%</p>
            <p class="text-sm text-zinc-600 dark:text-zinc-400 mb-4">Tuition Fee Reduction</p>
            <ul class="text-sm space-y-1 text-left">
              <li>• 80%+ in previous exams</li>
              <li>• Special talents</li>
              <li>• Community service</li>
              <li>• Leadership qualities</li>
            </ul>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Eligibility Criteria</h2>
        <div class="bg-white dark:bg-zinc-800 p-6 rounded-2xl mb-8">
          <h3 class="text-xl font-bold text-brand mb-4">Academic Requirements</h3>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="text-accent mr-3 mt-1">✓</span>
              <span>Minimum 80% marks in previous examinations</span>
            </li>
            <li class="flex items-start">
              <span class="text-accent mr-3 mt-1">✓</span>
              <span>Good conduct certificate from previous institution</span>
            </li>
            <li class="flex items-start">
              <span class="text-accent mr-3 mt-1">✓</span>
              <span>Passed entrance test with 70% or above</span>
            </li>
            <li class="flex items-start">
              <span class="text-accent mr-3 mt-1">✓</span>
              <span>No disciplinary issues in academic record</span>
            </li>
          </ul>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Application Process</h2>
        <div class="space-y-4 mb-8">
          <div class="flex items-start">
            <div class="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
            <div>
              <h4 class="font-semibold text-brand">Submit Application</h4>
              <p class="text-zinc-600 dark:text-zinc-400">Complete the scholarship application form with all required documents</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
            <div>
              <h4 class="font-semibold text-brand">Document Verification</h4>
              <p class="text-zinc-600 dark:text-zinc-400">Submit academic records, financial statements, and recommendation letters</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
            <div>
              <h4 class="font-semibold text-brand">Interview</h4>
              <p class="text-zinc-600 dark:text-zinc-400">Attend a personal interview with the scholarship committee</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-brand text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
            <div>
              <h4 class="font-semibold text-brand">Award Notification</h4>
              <p class="text-zinc-600 dark:text-zinc-400">Receive scholarship award letter and enrollment confirmation</p>
            </div>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Required Documents</h2>
        <div class="grid gap-4 md:grid-cols-2 mb-8">
          <div class="bg-gradient-to-r from-brand/10 to-accent/10 p-6 rounded-2xl">
            <h3 class="text-xl font-bold text-brand mb-4">Academic Documents</h3>
            <ul class="space-y-2">
              <li class="flex items-center"><span class="text-accent mr-2">📄</span> Academic transcripts</li>
              <li class="flex items-center"><span class="text-accent mr-2">📄</span> Mark sheets (last 2 years)</li>
              <li class="flex items-center"><span class="text-accent mr-2">📄</span> Character certificate</li>
              <li class="flex items-center"><span class="text-accent mr-2">📄</span> Entrance test result</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-accent/10 to-brand/10 p-6 rounded-2xl">
            <h3 class="text-xl font-bold text-brand mb-4">Financial Documents</h3>
            <ul class="space-y-2">
              <li class="flex items-center"><span class="text-accent mr-2">📄</span> Income certificate</li>
              <li class="flex items-center"><span class="text-accent mr-2">📄</span> Bank statements (6 months)</li>
              <li class="flex items-center"><span class="text-accent mr-2">📄</span> Tax returns (if applicable)</li>
              <li class="flex items-center"><span class="text-accent mr-2">📄</span> Family financial affidavit</li>
            </ul>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Scholarship Benefits</h2>
        <div class="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-2xl mb-8">
          <div class="grid gap-4 md:grid-cols-2">
            <div>
              <h3 class="text-lg font-bold text-brand mb-3">Academic Benefits</h3>
              <ul class="space-y-2">
                <li class="flex items-center"><span class="text-accent mr-2">✓</span> Free tuition fees</li>
                <li class="flex items-center"><span class="text-accent mr-2">✓</span> Free study materials</li>
                <li class="flex items-center"><span class="text-accent mr-2">✓</span> Access to digital library</li>
                <li class="flex items-center"><span class="text-accent mr-2">✓</span> Free mock tests</li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-bold text-brand mb-3">Support Services</h3>
              <ul class="space-y-2">
                <li class="flex items-center"><span class="text-accent mr-2">✓</span> Personal mentorship</li>
                <li class="flex items-center"><span class="text-accent mr-2">✓</span> Career counseling</li>
                <li class="flex items-center"><span class="text-accent mr-2">✓</span> Study groups</li>
                <li class="flex items-center"><span class="text-accent mr-2">✓</span> Progress tracking</li>
              </ul>
            </div>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Important Dates</h2>
        <div class="bg-white dark:bg-zinc-800 p-6 rounded-2xl mb-8">
          <div class="grid gap-4 md:grid-cols-2">
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="font-semibold">Application Start Date:</span>
                <span class="text-accent font-bold">December 1, 2024</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-semibold">Application Deadline:</span>
                <span class="text-red-500 font-bold">January 15, 2025</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-semibold">Interview Period:</span>
                <span class="text-blue-500 font-bold">January 20-30, 2025</span>
              </div>
            </div>
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="font-semibold">Result Announcement:</span>
                <span class="text-green-500 font-bold">February 5, 2025</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-semibold">Classes Start:</span>
                <span class="text-brand font-bold">February 15, 2025</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-brand to-accent text-white p-6 rounded-2xl text-center">
          <h3 class="text-xl font-bold mb-2">Apply for Scholarship Today!</h3>
          <p class="mb-4">Don't let financial constraints limit your educational dreams. Apply now and secure your future!</p>
          <button onclick="window.location.href='/admissions'" class="bg-white text-brand px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
            Apply Now
          </button>
        </div>
      </div>
    `
  },
  5: {
    id: 5,
    title: "FSc Pre-Engineering Results 2024 - 95% A+ Grades",
    category: "results",
    date: "November 20, 2024",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    author: "Academic Department",
    readTime: "5 min read",
    views: 2800,
    likes: 198,
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
          We are delighted to announce exceptional results in FSc Pre-Engineering 2024. Our students have once again set new benchmarks for academic excellence.
        </p>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Outstanding Performance</h2>
        <p class="mb-6">
          Out of 300 students who appeared for the examinations, 285 students (95%) achieved A+ grades, setting a new record for our academy. This remarkable achievement reflects our commitment to providing quality education and comprehensive preparation.
        </p>
        
        <div class="grid gap-6 md:grid-cols-4 mb-8">
          <div class="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-2xl text-center">
            <div class="text-4xl mb-3">🎓</div>
            <h3 class="text-xl font-bold text-brand mb-2">Total Students</h3>
            <p class="text-3xl font-bold text-green-500">300</p>
            <p class="text-sm text-zinc-600 dark:text-zinc-400">Appeared for Exams</p>
          </div>
          <div class="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 rounded-2xl text-center">
            <div class="text-4xl mb-3">⭐</div>
            <h3 class="text-xl font-bold text-brand mb-2">A+ Grades</h3>
            <p class="text-3xl font-bold text-blue-500">285</p>
            <p class="text-sm text-zinc-600 dark:text-zinc-400">95% Success Rate</p>
          </div>
          <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-2xl text-center">
            <div class="text-4xl mb-3">🏆</div>
            <h3 class="text-xl font-bold text-brand mb-2">Perfect Scores</h3>
            <p class="text-3xl font-bold text-purple-500">45</p>
            <p class="text-sm text-zinc-600 dark:text-zinc-400">1100/1100 Marks</p>
          </div>
          <div class="bg-gradient-to-br from-orange-500/10 to-red-500/10 p-6 rounded-2xl text-center">
            <div class="text-4xl mb-3">📈</div>
            <h3 class="text-xl font-bold text-brand mb-2">Average Score</h3>
            <p class="text-3xl font-bold text-orange-500">1047</p>
            <p class="text-sm text-zinc-600 dark:text-zinc-400">Out of 1100</p>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Subject-wise Performance</h2>
        <div class="grid gap-4 md:grid-cols-2 mb-8">
          <div class="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-lg">
            <h3 class="text-xl font-bold text-brand mb-4">Science Subjects</h3>
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="font-semibold">Physics:</span>
                <span class="text-green-500 font-bold">98% A+</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-semibold">Chemistry:</span>
                <span class="text-green-500 font-bold">96% A+</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-semibold">Mathematics:</span>
                <span class="text-green-500 font-bold">94% A+</span>
              </div>
            </div>
          </div>
          <div class="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-lg">
            <h3 class="text-xl font-bold text-brand mb-4">Language Subjects</h3>
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="font-semibold">English:</span>
                <span class="text-blue-500 font-bold">92% A+</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-semibold">Urdu:</span>
                <span class="text-blue-500 font-bold">89% A+</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-semibold">Pakistan Studies:</span>
                <span class="text-blue-500 font-bold">91% A+</span>
              </div>
            </div>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">University Admissions</h2>
        <p class="mb-6">
          Our successful students have secured admissions in prestigious engineering universities across Pakistan:
        </p>
        
        <div class="grid gap-4 md:grid-cols-2 mb-8">
          <div class="space-y-4">
            <div class="flex items-center p-4 bg-white dark:bg-zinc-800 rounded-xl">
              <div class="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">1</div>
              <div>
                <div class="font-bold text-lg">NUST (National University of Sciences & Technology)</div>
                <div class="text-sm text-zinc-600 dark:text-zinc-400">45 students admitted</div>
              </div>
            </div>
            <div class="flex items-center p-4 bg-white dark:bg-zinc-800 rounded-xl">
              <div class="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">2</div>
              <div>
                <div class="font-bold text-lg">UET (University of Engineering & Technology)</div>
                <div class="text-sm text-zinc-600 dark:text-zinc-400">38 students admitted</div>
              </div>
            </div>
            <div class="flex items-center p-4 bg-white dark:bg-zinc-800 rounded-xl">
              <div class="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">3</div>
              <div>
                <div class="font-bold text-lg">GIKI (Ghulam Ishaq Khan Institute)</div>
                <div class="text-sm text-zinc-600 dark:text-zinc-400">25 students admitted</div>
              </div>
            </div>
          </div>
          <div class="space-y-4">
            <div class="flex items-center p-4 bg-white dark:bg-zinc-800 rounded-xl">
              <div class="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">4</div>
              <div>
                <div class="font-bold text-lg">FAST (Foundation for Advancement of Science & Technology)</div>
                <div class="text-sm text-zinc-600 dark:text-zinc-400">32 students admitted</div>
              </div>
            </div>
            <div class="flex items-center p-4 bg-white dark:bg-zinc-800 rounded-xl">
              <div class="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">5</div>
              <div>
                <div class="font-bold text-lg">COMSATS University</div>
                <div class="text-sm text-zinc-600 dark:text-zinc-400">28 students admitted</div>
              </div>
            </div>
            <div class="flex items-center p-4 bg-white dark:bg-zinc-800 rounded-xl">
              <div class="bg-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">6</div>
              <div>
                <div class="font-bold text-lg">Other Universities</div>
                <div class="text-sm text-zinc-600 dark:text-zinc-400">67 students admitted</div>
              </div>
            </div>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Top Performers</h2>
        <div class="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 p-6 rounded-2xl mb-8">
          <h3 class="text-xl font-bold text-brand mb-4">Perfect Score Achievers (1100/1100)</h3>
          <div class="grid gap-4 md:grid-cols-3">
            <div class="text-center p-4 bg-white dark:bg-zinc-800 rounded-xl">
              <div class="text-2xl font-bold text-yellow-500 mb-2">1st Position</div>
              <div class="font-bold text-lg">Ahmed Hassan</div>
              <div class="text-sm text-zinc-600 dark:text-zinc-400">Admitted to NUST</div>
            </div>
            <div class="text-center p-4 bg-white dark:bg-zinc-800 rounded-xl">
              <div class="text-2xl font-bold text-gray-400 mb-2">2nd Position</div>
              <div class="font-bold text-lg">Fatima Ali</div>
              <div class="text-sm text-zinc-600 dark:text-zinc-400">Admitted to UET</div>
            </div>
            <div class="text-center p-4 bg-white dark:bg-zinc-800 rounded-xl">
              <div class="text-2xl font-bold text-amber-600 mb-2">3rd Position</div>
              <div class="font-bold text-lg">Muhammad Usman</div>
              <div class="text-sm text-zinc-600 dark:text-zinc-400">Admitted to GIKI</div>
            </div>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Our Success Formula</h2>
        <div class="grid gap-6 md:grid-cols-2 mb-8">
          <div class="bg-gradient-to-r from-brand/10 to-accent/10 p-6 rounded-2xl">
            <h3 class="text-xl font-bold text-brand mb-4">Teaching Methodology</h3>
            <ul class="space-y-2">
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> Concept-based learning approach</li>
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> Regular practice sessions</li>
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> Individual attention and mentoring</li>
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> Advanced problem-solving techniques</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-accent/10 to-brand/10 p-6 rounded-2xl">
            <h3 class="text-xl font-bold text-brand mb-4">Assessment Strategy</h3>
            <ul class="space-y-2">
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> Weekly mock tests</li>
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> Monthly comprehensive exams</li>
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> Performance tracking and analysis</li>
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> Personalized improvement plans</li>
            </ul>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Student Testimonials</h2>
        <div class="bg-gradient-to-r from-accent/10 to-brand/10 p-6 rounded-2xl mb-8">
          <blockquote class="text-lg italic mb-4">
            "Vision Academy's structured approach and expert faculty helped me achieve my dream of getting into NUST. The regular practice tests and personalized guidance made all the difference in my preparation."
          </blockquote>
          <cite class="font-semibold text-brand">- Ahmed Hassan, NUST Admit</cite>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Looking Ahead</h2>
        <p class="mb-6">
          As we celebrate this remarkable achievement, we remain committed to maintaining our high standards and helping more students achieve their engineering dreams. Our FSc Pre-Engineering 2025 program is already underway with enhanced curriculum and improved teaching methods.
        </p>
        
        <div class="bg-gradient-to-r from-brand to-accent text-white p-6 rounded-2xl text-center">
          <h3 class="text-xl font-bold mb-2">Join Our Success Story</h3>
          <p class="mb-4">Ready to achieve your engineering career dreams? Enroll in our FSc Pre-Engineering program today!</p>
          <button onclick="window.location.href='/admissions'" class="bg-white text-brand px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
            Apply Now
          </button>
        </div>
      </div>
    `
  },
  6: {
    id: 6,
    title: "Teacher Training Workshop - Modern Teaching Methods",
    category: "events",
    date: "November 15, 2024",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    author: "Training Department",
    readTime: "4 min read",
    views: 1200,
    likes: 87,
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
          Vision Academy conducted a comprehensive teacher training workshop focusing on modern teaching methodologies and technology integration. This initiative reflects our commitment to continuous improvement and excellence in education.
        </p>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Workshop Overview</h2>
        <p class="mb-6">
          The three-day intensive workshop was attended by 150 faculty members from all campuses across Pakistan. The program was designed to enhance teaching effectiveness and integrate modern technology into the classroom.
        </p>
        
        <div class="grid gap-6 md:grid-cols-3 mb-8">
          <div class="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 rounded-2xl text-center">
            <div class="text-4xl mb-3">👨‍🏫</div>
            <h3 class="text-xl font-bold text-brand mb-2">Participants</h3>
            <p class="text-3xl font-bold text-blue-500">150</p>
            <p class="text-sm text-zinc-600 dark:text-zinc-400">Faculty Members</p>
          </div>
          <div class="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-2xl text-center">
            <div class="text-4xl mb-3">📚</div>
            <h3 class="text-xl font-bold text-brand mb-2">Duration</h3>
            <p class="text-3xl font-bold text-green-500">3</p>
            <p class="text-sm text-zinc-600 dark:text-zinc-400">Days Intensive</p>
          </div>
          <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-2xl text-center">
            <div class="text-4xl mb-3">🏆</div>
            <h3 class="text-xl font-bold text-brand mb-2">Certificates</h3>
            <p class="text-3xl font-bold text-purple-500">150</p>
            <p class="text-sm text-zinc-600 dark:text-zinc-400">Issued</p>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Training Modules</h2>
        <div class="grid gap-6 md:grid-cols-2 mb-8">
          <div class="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-lg">
            <h3 class="text-xl font-bold text-brand mb-4">Day 1: Modern Teaching Strategies</h3>
            <ul class="space-y-2">
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> Active learning methodologies</li>
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> Student-centered teaching approaches</li>
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> Collaborative learning techniques</li>
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> Differentiated instruction methods</li>
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> Problem-based learning</li>
            </ul>
          </div>
          <div class="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-lg">
            <h3 class="text-xl font-bold text-brand mb-4">Day 2: Technology Integration</h3>
            <ul class="space-y-2">
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> Smart board utilization</li>
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> Educational software training</li>
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> Online learning platforms</li>
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> Digital assessment tools</li>
              <li class="flex items-center"><span class="text-accent mr-2">✓</span> Virtual classroom management</li>
            </ul>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Expert Trainers</h2>
        <p class="mb-6">
          The workshop was conducted by renowned education experts from leading universities:
        </p>
        
        <div class="grid gap-4 md:grid-cols-2 mb-8">
          <div class="bg-gradient-to-r from-brand/10 to-accent/10 p-6 rounded-2xl">
            <h3 class="text-xl font-bold text-brand mb-4">Keynote Speakers</h3>
            <ul class="space-y-3">
              <li class="flex items-center">
                <span class="text-accent mr-3">👨‍🔬</span>
                <div>
                  <div class="font-semibold">Dr. Sarah Ahmed</div>
                  <div class="text-sm text-zinc-600 dark:text-zinc-400">Professor of Education, LUMS</div>
                </div>
              </li>
              <li class="flex items-center">
                <span class="text-accent mr-3">👩‍🔬</span>
                <div>
                  <div class="font-semibold">Prof. Ali Hassan</div>
                  <div class="text-sm text-zinc-600 dark:text-zinc-400">Director, Center for Teaching Excellence, UET</div>
                </div>
              </li>
              <li class="flex items-center">
                <span class="text-accent mr-3">👨‍🔬</span>
                <div>
                  <div class="font-semibold">Dr. Fatima Khan</div>
                  <div class="text-sm text-zinc-600 dark:text-zinc-400">Educational Technology Specialist, NUST</div>
                </div>
              </li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-accent/10 to-brand/10 p-6 rounded-2xl">
            <h3 class="text-xl font-bold text-brand mb-4">Workshop Topics</h3>
            <ul class="space-y-2">
              <li class="flex items-center"><span class="text-accent mr-2">📖</span> Curriculum design and development</li>
              <li class="flex items-center"><span class="text-accent mr-2">📊</span> Assessment and evaluation methods</li>
              <li class="flex items-center"><span class="text-accent mr-2">🎯</span> Learning outcome alignment</li>
              <li class="flex items-center"><span class="text-accent mr-2">💡</span> Creative teaching techniques</li>
              <li class="flex items-center"><span class="text-accent mr-2">🤝</span> Student engagement strategies</li>
            </ul>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Hands-on Training</h2>
        <p class="mb-6">
          The workshop included extensive hands-on training sessions:
        </p>
        
        <div class="grid gap-4 md:grid-cols-3 mb-8">
          <div class="text-center p-4 bg-white dark:bg-zinc-800 rounded-xl">
            <div class="text-3xl mb-2">💻</div>
            <h4 class="font-semibold text-brand">Digital Tools</h4>
            <p class="text-sm text-zinc-600 dark:text-zinc-400">Learning management systems, presentation software, and interactive tools</p>
          </div>
          <div class="text-center p-4 bg-white dark:bg-zinc-800 rounded-xl">
            <div class="text-3xl mb-2">📱</div>
            <h4 class="font-semibold text-brand">Mobile Learning</h4>
            <p class="text-sm text-zinc-600 dark:text-zinc-400">Educational apps, mobile-first teaching strategies, and BYOD policies</p>
          </div>
          <div class="text-center p-4 bg-white dark:bg-zinc-800 rounded-xl">
            <div class="text-3xl mb-2">🌐</div>
            <h4 class="font-semibold text-brand">Online Platforms</h4>
            <p class="text-sm text-zinc-600 dark:text-zinc-400">Virtual classrooms, video conferencing, and remote teaching techniques</p>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Workshop Outcomes</h2>
        <div class="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-2xl mb-8">
          <div class="grid gap-4 md:grid-cols-2">
            <div>
              <h3 class="text-lg font-bold text-brand mb-3">Immediate Benefits</h3>
              <ul class="space-y-2">
                <li class="flex items-center"><span class="text-accent mr-2">✓</span> Enhanced teaching skills</li>
                <li class="flex items-center"><span class="text-accent mr-2">✓</span> Technology proficiency</li>
                <li class="flex items-center"><span class="text-accent mr-2">✓</span> Modern methodologies</li>
                <li class="flex items-center"><span class="text-accent mr-2">✓</span> Professional certificates</li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-bold text-brand mb-3">Long-term Impact</h3>
              <ul class="space-y-2">
                <li class="flex items-center"><span class="text-accent mr-2">✓</span> Improved student engagement</li>
                <li class="flex items-center"><span class="text-accent mr-2">✓</span> Better learning outcomes</li>
                <li class="flex items-center"><span class="text-accent mr-2">✓</span> Enhanced teaching reputation</li>
                <li class="flex items-center"><span class="text-accent mr-2">✓</span> Career advancement opportunities</li>
              </ul>
            </div>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Participant Feedback</h2>
        <div class="bg-gradient-to-r from-accent/10 to-brand/10 p-6 rounded-2xl mb-8">
          <blockquote class="text-lg italic mb-4">
            "This workshop completely transformed my teaching approach. The modern methodologies and technology integration techniques have made my classes more engaging and effective. I can already see the positive impact on my students' learning."
          </blockquote>
          <cite class="font-semibold text-brand">- Ms. Ayesha Khan, Physics Teacher</cite>
        </div>
        
        <h2 class="text-2xl font-bold text-brand mb-4">Future Training Programs</h2>
        <p class="mb-6">
          Based on the success of this workshop, we're planning additional training programs:
        </p>
        
        <div class="grid gap-4 md:grid-cols-2 mb-8">
          <div class="bg-white dark:bg-zinc-800 p-6 rounded-2xl">
            <h3 class="text-lg font-bold text-brand mb-3">Upcoming Workshops</h3>
            <ul class="space-y-2">
              <li class="flex items-center"><span class="text-accent mr-2">📅</span> Advanced Assessment Techniques (January 2025)</li>
              <li class="flex items-center"><span class="text-accent mr-2">📅</span> AI in Education (February 2025)</li>
              <li class="flex items-center"><span class="text-accent mr-2">📅</span> Student Psychology & Motivation (March 2025)</li>
              <li class="flex items-center"><span class="text-accent mr-2">📅</span> Research-Based Teaching (April 2025)</li>
            </ul>
          </div>
          <div class="bg-white dark:bg-zinc-800 p-6 rounded-2xl">
            <h3 class="text-lg font-bold text-brand mb-3">Continuous Learning</h3>
            <ul class="space-y-2">
              <li class="flex items-center"><span class="text-accent mr-2">📚</span> Monthly training sessions</li>
              <li class="flex items-center"><span class="text-accent mr-2">📚</span> Online learning resources</li>
              <li class="flex items-center"><span class="text-accent mr-2">📚</span> Peer learning groups</li>
              <li class="flex items-center"><span class="text-accent mr-2">📚</span> Mentorship programs</li>
            </ul>
          </div>
        </div>
        
        <div class="bg-gradient-to-r from-brand to-accent text-white p-6 rounded-2xl text-center">
          <h3 class="text-xl font-bold mb-2">Join Our Teaching Excellence Program</h3>
          <p class="mb-4">Interested in enhancing your teaching skills? Join our upcoming training programs!</p>
          <button onclick="window.location.href='/programs'" class="bg-white text-brand px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    `
  }
}

export default function ArticleDetail() {
  const { id } = useParams()
  const article = articles[id]

  if (!article) {
    return (
      <main className="section">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brand mb-4">Article Not Found</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">The article you're looking for doesn't exist.</p>
          <button 
            onClick={() => window.location.href = '/blog'}
            className="btn"
          >
            Go Back
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
              {article.category.toUpperCase()}
            </span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-500">{article.readTime}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-brand mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex items-center gap-6 text-zinc-600 dark:text-zinc-400 mb-6">
            <div className="flex items-center gap-2">
              <span>👤</span>
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>👁️</span>
              <span>{article.views} views</span>
            </div>
            <div className="flex items-center gap-2">
              <span>❤️</span>
              <span>{article.likes} likes</span>
            </div>
          </div>
          
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
        
        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        
        {/* Article Footer */}
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => window.location.href = '/blog'}
              className="btn-outline"
            >
              ← Back to News
            </button>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-zinc-600 hover:text-brand transition-colors">
                <span>❤️</span>
                <span>Like ({article.likes})</span>
              </button>
              <button className="flex items-center gap-2 text-zinc-600 hover:text-brand transition-colors">
                <span>📤</span>
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
