import { useState } from 'react'
function Register() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    confirmPassword: ''
  })
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add registration logic here
    console.log('Registration data:', formData)
  }
  
  return (
    <div className="page" style={{display:'flex', flexDirection:'column', gap:'20px', alignItems:'center', justifyContent:'center', height:'100vh'}}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'20px', width:'50%'}}>
        <div className="form-group form-component">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register