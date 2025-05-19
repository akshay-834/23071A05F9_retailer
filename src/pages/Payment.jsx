import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

function Payment() {
  const { cartItems, cartTotal, clearCart } = useContext(CartContext)
  const navigate = useNavigate()
  
  const [paymentInfo, setPaymentInfo] = useState({
    cardName: '',
    cardNumber: '',
    address: '',
    city: '',
    zip: ''
  })
  
  const handleChange = (e) => {
    setPaymentInfo({...paymentInfo, [e.target.name]: e.target.value})
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Process payment and generate invoice
    console.log('Payment info:', paymentInfo)
    
    // Generate a random invoice ID
    const invoiceId = Math.floor(Math.random() * 1000000)
    
    // Clear cart and redirect to invoice
    clearCart()
    navigate(`/invoice/${invoiceId}`)
  }
  
  if (cartItems.length === 0) {
    return (
      <div className="page">
        <h1>Payment</h1>
        <p>Your cart is empty. Nothing to pay for.</p>
      </div>
    )
  }
  
  return (
    <div className="page" style={{display:'flex', flexDirection:'column', gap:'20px', alignItems:'center', justifyContent:'center'}}>
      <h1>Payment</h1>
      <div className="payment-summary">
        <h3>Order Summary</h3>
        <p>{cartItems.length} items: ${cartTotal.toFixed(2)}</p>
      </div>
      
      <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'20px', width:'50%',alignItems:'center',border:'1px solid black'}}>
        <h3>Payment Details</h3>
        <div className="form-group">
          <label>Name on Card</label>
          <input type="text" name="cardName" value={paymentInfo.cardName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Card Number</label>
          <input type="text" name="cardNumber" value={paymentInfo.cardNumber} onChange={handleChange} required />
        </div>
        
        
        <h3>Shipping Address</h3>
        <div className="form-group">
          <label>Address</label>
          <input type="text" name="address" value={paymentInfo.address} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>City</label>
            <input type="text" name="city" value={paymentInfo.city} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>ZIP Code</label>
            <input type="text" name="zip" value={paymentInfo.zip} onChange={handleChange} required />
          </div>
        </div>
        
        <button type="submit">Complete Payment</button>
      </form>
    </div>
  )
}

export default Payment