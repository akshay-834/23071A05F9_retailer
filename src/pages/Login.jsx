import { useState } from 'react'

function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  
  const handleChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add login logic here
    console.log('Login attempt:', credentials)
  }
  
  return (
    <div className="page" style={{display:'flex', flexDirection:'column', gap:'20px', alignItems:'center', justifyContent:'center'}}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'20px', width:'50%',alignItems:'center'}}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
        </div>
        <button type="submit" style={{width:'10%',alignItems:'center'}}>Login</button>
      </form>
    </div>
  )
}

export default Login