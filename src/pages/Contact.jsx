import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add contact form submission logic here
    console.log('Contact form data:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }
  
  return (
    <div className="page" style={{display:'flex', flexDirection:'column', gap:'20px', alignItems:'center', justifyContent:'center'}}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label style={{display:'block'}}>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label style={{display:'block'}}>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label style={{display:'block'}}>Subject</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label style={{display:'block'}}>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required rows="5"></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}

export default Contact