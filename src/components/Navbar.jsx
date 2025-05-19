import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar display-flex" style={{display:'flex',justifyContent:'',backgroundColor:'white',width:'100%'}}>
      <div className="logo" style={{display:'flex', alignItems:'center', justifyContent:'center', width:'30%'}}>
        <Link to="/" style={{textDecoration:'none', color:'black'}}>RetailStore</Link>
      </div>
      <ul className="nav-links" style={{display:'flex', listStyle:'none', justifyContent:'space-around', width:'100%'}}>
        <li><Link to="/" style={{textDecoration:'none', color:'black'}}>Home</Link></li>
        <li><Link to="/catalog" style={{textDecoration:'none', color:'black'}}>Catalog</Link></li>
        <li><Link to="/cart" style={{textDecoration:'none', color:'black'}}>Cart</Link></li>
        <li><Link to="/contact" style={{textDecoration:'none', color:'black'}}>Contact</Link></li>
        <li><Link to="/login" style={{textDecoration:'none', color:'black'}}>Login</Link></li>
        <li><Link to="/register" style={{textDecoration:'none', color:'black'}}>Register</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar