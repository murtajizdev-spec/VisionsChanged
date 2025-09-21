import { useForm } from 'react-hook-form'

export default function Contact() {
  const { register, handleSubmit, formState: { isSubmitSuccessful }, reset } = useForm()
  const onSubmit = (data) => { console.log('Contact', data); reset() }

  return (
    <div className="section">
      <h2 className="section-title">Contact Us</h2>
      <p className="section-lead">We'd love to hear from you.</p>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <div className="rounded-2xl border border-zinc-200 bg-white/90 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900/80 p-6">
            <div className="font-semibold text-lg">Send a Message</div>
            {isSubmitSuccessful && (
              <div className="mt-3 p-3 rounded-md bg-green-50 text-green-700 border border-green-200">Message sent.</div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="mt-5 grid gap-4">
              <div className="form-field">
                <label className="form-label">Name</label>
                <input className="form-input" placeholder="Your full name" {...register('name', { required: true })} />
              </div>
              <div className="form-field">
                <label className="form-label">Email</label>
                <input type="email" className="form-input" placeholder="you@example.com" {...register('email', { required: true })} />
              </div>
              <div className="form-field">
                <label className="form-label">Message</label>
                <textarea rows="5" className="form-textarea" placeholder="How can we help?" {...register('message', { required: true })} />
                <p className="form-hint">We typically respond within 1-2 business days.</p>
              </div>
              <button className="btn w-fit" type="submit">Send</button>
            </form>
          </div>
          <div className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
            <div>Phone: 03XX-XXXXXXX</div>
            <div>Email: info@visionacademy.edu.pk</div>
            <div>Address: Main Boulevard, Lahore</div>
          </div>
        </div>
        <div>
          <iframe
            className="h-96 w-full rounded-xl border"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13606.939267718427!2d74.3310507!3d31.5163975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919052e5a7a2d61%3A0x9b9a1fa0c2efb3f2!2sLahore!5e0!3m2!1sen!2sPK!4v1687788880000"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}


