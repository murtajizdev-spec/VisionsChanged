import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'

const schema = z.object({
  // Personal Information
  name: z.string().min(3, "Name must be at least 3 characters"),
  fatherName: z.string().min(3, "Father's name must be at least 3 characters"),
  motherName: z.string().min(3, "Mother's name must be at least 3 characters"),
  cnic: z.string().min(13, "CNIC must be 13 digits").max(13, "CNIC must be 13 digits"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.string().min(1, "Gender is required"),
  bloodGroup: z.string().min(1, "Blood group is required"),
  
  // Contact Information
  email: z.string().email("Valid email is required"),
  phone: z.string().min(11, "Phone number must be at least 11 digits"),
  alternatePhone: z.string().optional(),
  address: z.string().min(10, "Address must be at least 10 characters"),
  city: z.string().min(2, "City is required"),
  province: z.string().min(2, "Province is required"),
  
  // Academic Information
  currentClass: z.string().min(1, "Current class is required"),
  previousSchool: z.string().min(2, "Previous school is required"),
  previousClass: z.string().min(1, "Previous class is required"),
  previousMarks: z.string().min(1, "Previous marks are required"),
  subjects: z.array(z.string()).min(1, "At least one subject is required"),
  
  // Program Selection
  program: z.string().min(1, "Program selection is required"),
  timing: z.string().min(1, "Timing selection is required"),
  campus: z.string().min(1, "Campus selection is required"),
  
  // Additional Information
  medicalConditions: z.string().optional(),
  emergencyContact: z.string().min(10, "Emergency contact is required"),
  emergencyRelation: z.string().min(2, "Emergency contact relation is required"),
  motivation: z.string().min(20, "Please provide motivation (at least 20 characters)"),
  
  // Terms and Conditions
  termsAccepted: z.boolean().refine(val => val === true, "You must accept the terms and conditions")
})

export default function Admissions() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm({ 
    resolver: zodResolver(schema),
    defaultValues: {
      subjects: [],
      termsAccepted: false
    }
  })

  const onSubmit = (data) => {
    console.log('Admission submission', data)
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
            <h1 className="hero-title">Admissions Open 2025</h1>
            <p className="hero-subtitle mx-auto max-w-3xl">
              Join Pakistan's leading educational institution and take the first step towards your academic success. 
              Our comprehensive programs are designed to help you achieve your educational goals.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand">95%</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand">200+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Campuses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand">50,000+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand">15+</div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">Years</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="section bg-gradient-to-r from-zinc-50 to-blue-50 dark:from-zinc-900 dark:to-blue-900/20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-primary">Available Programs</h2>
          <p className="section-lead mx-auto">Choose the program that best fits your academic goals</p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Matric Science",
              duration: "2 Years",
              subjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
              fee: "Rs. 15,000/month",
              description: "Comprehensive preparation for Matric Science with focus on concept building and practical applications."
            },
            {
              title: "FSc Pre-Medical",
              duration: "2 Years", 
              subjects: ["Physics", "Chemistry", "Biology", "English"],
              fee: "Rs. 18,000/month",
              description: "Specialized program for medical college preparation with intensive MDCAT training."
            },
            {
              title: "FSc Pre-Engineering",
              duration: "2 Years",
              subjects: ["Physics", "Chemistry", "Mathematics", "English"],
              fee: "Rs. 18,000/month", 
              description: "Engineering-focused curriculum with advanced mathematics and physics concepts."
            },
            {
              title: "FCS (Faculty of Computer Science)",
              duration: "2 Years",
              subjects: ["Programming", "Data Structures", "Algorithms", "Database Systems"],
              fee: "Rs. 16,000/month",
              description: "Comprehensive computer science program covering programming, algorithms, and modern technologies."
            },
            {
              title: "ICS (Intermediate in Computer Science)",
              duration: "2 Years",
              subjects: ["Computer Science", "Mathematics", "Physics", "English"],
              fee: "Rs. 14,000/month",
              description: "Intermediate level computer science program with practical programming and theoretical foundations."
            },
            {
              title: "Entry Test Preparation",
              duration: "6 Months",
              subjects: ["Test Strategies", "Mock Tests", "Time Management"],
              fee: "Rs. 12,000/month",
              description: "Intensive preparation for MDCAT, ECAT, SAT, and other competitive entrance examinations."
            }
          ].map((program, index) => (
            <motion.div 
              key={program.title}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="interactive-card group"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">📚</div>
                <div className="heading-tertiary">{program.title}</div>
                <div className="text-accent font-semibold mb-4">{program.duration}</div>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">{program.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="text-sm font-semibold text-brand">Subjects:</div>
                  <div className="flex flex-wrap gap-1">
                    {program.subjects.map((subject, i) => (
                      <span key={i} className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-lg font-bold text-brand">{program.fee}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Admission Form */}
      <section className="section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="heading-primary">Admission Application Form</h2>
            <p className="section-lead">Please fill out all required information accurately</p>
          </div>

          {isSubmitSuccessful && (
            <div className="mb-8 p-6 rounded-2xl bg-green-50 text-green-700 border border-green-200 text-center">
              <div className="text-4xl mb-2">✅</div>
              <div className="text-lg font-semibold">Application Submitted Successfully!</div>
              <p className="text-sm">We will contact you within 24 hours for further processing.</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Personal Information */}
            <div className="interactive-card">
              <h3 className="heading-tertiary mb-6 flex items-center">
                <span className="text-2xl mr-3">👤</span>
                Personal Information
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="form-label">Full Name *</label>
                  <input className="form-input" placeholder="Enter your full name" {...register('name')} />
                  {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="form-label">Father's Name *</label>
                  <input className="form-input" placeholder="Enter father's name" {...register('fatherName')} />
                  {errors.fatherName && <p className="text-xs text-red-600 mt-1">{errors.fatherName.message}</p>}
                </div>
                <div>
                  <label className="form-label">Mother's Name *</label>
                  <input className="form-input" placeholder="Enter mother's name" {...register('motherName')} />
                  {errors.motherName && <p className="text-xs text-red-600 mt-1">{errors.motherName.message}</p>}
                </div>
                <div>
                  <label className="form-label">CNIC *</label>
                  <input className="form-input" placeholder="12345-1234567-1" {...register('cnic')} />
                  {errors.cnic && <p className="text-xs text-red-600 mt-1">{errors.cnic.message}</p>}
                </div>
                <div>
                  <label className="form-label">Date of Birth *</label>
                  <input type="date" className="form-input" {...register('dateOfBirth')} />
                  {errors.dateOfBirth && <p className="text-xs text-red-600 mt-1">{errors.dateOfBirth.message}</p>}
                </div>
                <div>
                  <label className="form-label">Gender *</label>
                  <select className="form-input" {...register('gender')}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  {errors.gender && <p className="text-xs text-red-600 mt-1">{errors.gender.message}</p>}
                </div>
                <div>
                  <label className="form-label">Blood Group *</label>
                  <select className="form-input" {...register('bloodGroup')}>
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                  {errors.bloodGroup && <p className="text-xs text-red-600 mt-1">{errors.bloodGroup.message}</p>}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="interactive-card">
              <h3 className="heading-tertiary mb-6 flex items-center">
                <span className="text-2xl mr-3">📞</span>
                Contact Information
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="form-label">Email Address *</label>
                  <input type="email" className="form-input" placeholder="your.email@example.com" {...register('email')} />
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="form-label">Phone Number *</label>
                  <input className="form-input" placeholder="03XX-XXXXXXX" {...register('phone')} />
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="form-label">Alternate Phone</label>
                  <input className="form-input" placeholder="03XX-XXXXXXX (Optional)" {...register('alternatePhone')} />
                </div>
                <div>
                  <label className="form-label">City *</label>
                  <input className="form-input" placeholder="Enter your city" {...register('city')} />
                  {errors.city && <p className="text-xs text-red-600 mt-1">{errors.city.message}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label">Complete Address *</label>
                  <textarea className="form-textarea" placeholder="Enter your complete address" {...register('address')} />
                  {errors.address && <p className="text-xs text-red-600 mt-1">{errors.address.message}</p>}
                </div>
                <div>
                  <label className="form-label">Province *</label>
                  <select className="form-input" {...register('province')}>
                    <option value="">Select Province</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Sindh">Sindh</option>
                    <option value="KPK">Khyber Pakhtunkhwa</option>
                    <option value="Balochistan">Balochistan</option>
                    <option value="Gilgit-Baltistan">Gilgit-Baltistan</option>
                    <option value="AJK">Azad Jammu & Kashmir</option>
                  </select>
                  {errors.province && <p className="text-xs text-red-600 mt-1">{errors.province.message}</p>}
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div className="interactive-card">
              <h3 className="heading-tertiary mb-6 flex items-center">
                <span className="text-2xl mr-3">🎓</span>
                Academic Information
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="form-label">Current Class *</label>
                  <select className="form-input" {...register('currentClass')}>
                    <option value="">Select Current Class</option>
                    <option value="9th">9th Grade</option>
                    <option value="10th">10th Grade</option>
                    <option value="11th">11th Grade (FSc Part 1)</option>
                    <option value="12th">12th Grade (FSc Part 2)</option>
                  </select>
                  {errors.currentClass && <p className="text-xs text-red-600 mt-1">{errors.currentClass.message}</p>}
                </div>
                <div>
                  <label className="form-label">Previous School *</label>
                  <input className="form-input" placeholder="Name of your previous school" {...register('previousSchool')} />
                  {errors.previousSchool && <p className="text-xs text-red-600 mt-1">{errors.previousSchool.message}</p>}
                </div>
                <div>
                  <label className="form-label">Previous Class *</label>
                  <select className="form-input" {...register('previousClass')}>
                    <option value="">Select Previous Class</option>
                    <option value="8th">8th Grade</option>
                    <option value="9th">9th Grade</option>
                    <option value="10th">10th Grade</option>
                    <option value="11th">11th Grade</option>
                  </select>
                  {errors.previousClass && <p className="text-xs text-red-600 mt-1">{errors.previousClass.message}</p>}
                </div>
                <div>
                  <label className="form-label">Previous Class Marks *</label>
                  <input className="form-input" placeholder="e.g., 850/1100" {...register('previousMarks')} />
                  {errors.previousMarks && <p className="text-xs text-red-600 mt-1">{errors.previousMarks.message}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label">Subjects of Interest *</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
                    {['Physics', 'Chemistry', 'Biology', 'Mathematics', 'English', 'Urdu', 'Computer Science', 'Economics'].map((subject) => (
                      <label key={subject} className="flex items-center space-x-2">
                        <input 
                          type="checkbox" 
                          value={subject}
                          {...register('subjects')}
                          className="rounded border-gray-300 text-brand focus:ring-brand"
                        />
                        <span className="text-sm text-zinc-600 dark:text-zinc-400">{subject}</span>
                      </label>
                    ))}
                  </div>
                  {errors.subjects && <p className="text-xs text-red-600 mt-1">{errors.subjects.message}</p>}
                </div>
              </div>
            </div>

            {/* Program Selection */}
            <div className="interactive-card">
              <h3 className="heading-tertiary mb-6 flex items-center">
                <span className="text-2xl mr-3">📋</span>
                Program Selection
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="form-label">Program *</label>
                  <select className="form-input" {...register('program')}>
                    <option value="">Select Program</option>
                    <option value="matric-science">Matric Science</option>
                    <option value="fsc-pre-medical">FSc Pre-Medical</option>
                    <option value="fsc-pre-engineering">FSc Pre-Engineering</option>
                    <option value="fcs">FCS (Faculty of Computer Science)</option>
                    <option value="ics">ICS (Intermediate in Computer Science)</option>
                    <option value="entry-test-prep">Entry Test Preparation</option>
                  </select>
                  {errors.program && <p className="text-xs text-red-600 mt-1">{errors.program.message}</p>}
                </div>
                <div>
                  <label className="form-label">Preferred Timing *</label>
                  <select className="form-input" {...register('timing')}>
                    <option value="">Select Timing</option>
                    <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                    <option value="evening-1">Evening (4:00 PM - 6:00 PM)</option>
                    <option value="evening-2">Evening (6:00 PM - 8:00 PM)</option>
                    <option value="weekend">Weekend Classes</option>
                  </select>
                  {errors.timing && <p className="text-xs text-red-600 mt-1">{errors.timing.message}</p>}
                </div>
                <div>
                  <label className="form-label">Preferred Campus *</label>
                  <select className="form-input" {...register('campus')}>
                    <option value="">Select Campus</option>
                    <option value="karachi-main">Karachi Main Campus</option>
                    <option value="karachi-north">Karachi North Campus</option>
                    <option value="lahore-main">Lahore Main Campus</option>
                    <option value="islamabad">Islamabad Campus</option>
                    <option value="rawalpindi">Rawalpindi Campus</option>
                  </select>
                  {errors.campus && <p className="text-xs text-red-600 mt-1">{errors.campus.message}</p>}
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="interactive-card">
              <h3 className="heading-tertiary mb-6 flex items-center">
                <span className="text-2xl mr-3">ℹ️</span>
                Additional Information
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="form-label">Emergency Contact *</label>
                  <input className="form-input" placeholder="03XX-XXXXXXX" {...register('emergencyContact')} />
                  {errors.emergencyContact && <p className="text-xs text-red-600 mt-1">{errors.emergencyContact.message}</p>}
                </div>
                <div>
                  <label className="form-label">Relation to Emergency Contact *</label>
                  <select className="form-input" {...register('emergencyRelation')}>
                    <option value="">Select Relation</option>
                    <option value="father">Father</option>
                    <option value="mother">Mother</option>
                    <option value="brother">Brother</option>
                    <option value="sister">Sister</option>
                    <option value="uncle">Uncle</option>
                    <option value="aunt">Aunt</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.emergencyRelation && <p className="text-xs text-red-600 mt-1">{errors.emergencyRelation.message}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label">Medical Conditions (if any)</label>
                  <textarea className="form-textarea" placeholder="Please mention any medical conditions or allergies" {...register('medicalConditions')} />
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label">Why do you want to join Vision Academy? *</label>
                  <textarea className="form-textarea" placeholder="Please write your motivation for joining Vision Academy (minimum 20 characters)" {...register('motivation')} />
                  {errors.motivation && <p className="text-xs text-red-600 mt-1">{errors.motivation.message}</p>}
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="interactive-card">
              <div className="flex items-start space-x-3">
                <input 
                  type="checkbox" 
                  {...register('termsAccepted')}
                  className="mt-1 rounded border-gray-300 text-brand focus:ring-brand"
                />
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  <label className="font-medium">I agree to the terms and conditions *</label>
                  <p className="mt-1">
                    I declare that all information provided is accurate and complete. I understand that providing false 
                    information may result in cancellation of admission. I agree to abide by the academy's rules and regulations.
                  </p>
                  {errors.termsAccepted && <p className="text-xs text-red-600 mt-1">{errors.termsAccepted.message}</p>}
                </div>
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="btn text-lg px-12 py-4">
                Submit Application
              </button>
            </div>
          </form>
        </motion.div>
      </section>
    </main>
  )
}


