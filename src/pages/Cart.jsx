import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useContext(CartContext)
  
  if (cartItems.length === 0) {
    return (
      <div className="page">
        <h1>Your Cart</h1>
        <p>Your cart is empty. <Link to="/catalog">Continue shopping</Link></p>
      </div>
    )
  }
  
  return (
    <div className="page">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
              <div className="quantity-control">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
            <div className="item-total">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${cartTotal.toFixed(2)}</h3>
        <Link to="/payment" className="checkout-button btn">Proceed to Checkout</Link>
      </div>
    </div>
  )
}

export default Cart