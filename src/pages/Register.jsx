import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!")
      return
    }
    
    // Add registration logic here
    console.log('Registration data:', formData)
    
    // Show success message
    alert('Registration successful!')
    
    // Navigate to home page
    navigate('/')
  }
  
  return (
    <div className="page" style={{display:'flex', flexDirection:'column', gap:'20px', alignItems:'center', justifyContent:'center'}}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'20px', width:'50%',alignItems:'center'}}>
        <div className="form-group form-component">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group form-component">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        <button type="submit" style={{width:'10%',alignItems:'center'}}>Register</button>
      </form>
    </div>
  )
}

export default Register
