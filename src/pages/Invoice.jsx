import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Invoice() {
  const { id } = useParams()
  const [invoice, setInvoice] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // Simulate fetching invoice data
    setTimeout(() => {
      setInvoice({
        id,
        date: new Date().toLocaleDateString(),
        customer: {
          name: 'John Doe',
          email: 'john@example.com',
          address: '123 Main St, Anytown, USA'
        },
        items: [
          { id: 1, name: 'Product 1', price: 19.99, quantity: 2 },
          { id: 2, name: 'Product 2', price: 29.99, quantity: 1 }
        ],
        total: 69.97
      })
      setLoading(false)
    }, 1000)
  }, [id])
  
  if (loading) return <div>Loading invoice...</div>
  
  const handlePrint = () => {
    window.print()
  }
  
  return (
    <div className="page invoice-page">
      <div className="invoice-actions">
        <button onClick={handlePrint}>Print Invoice</button>
      </div>
      
      <div className="invoice">
        <div className="invoice-header">
          <h1>Invoice #{invoice.id}</h1>
          <p>Date: {invoice.date}</p>
        </div>
        
        <div className="customer-info">
          <h3>Customer Information</h3>
          <p>{invoice.customer.name}</p>
          <p>{invoice.customer.email}</p>
          <p>{invoice.customer.address}</p>
        </div>
        
        <div className="invoice-items">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3">Total</td>
                <td>${invoice.total.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        
        <div className="invoice-footer">
          <p>Thank you for your purchase!</p>
        </div>
      </div>
    </div>
  )
}

export default Invoice
