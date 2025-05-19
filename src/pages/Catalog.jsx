import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'

function Catalog() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setProducts([
        { id: 1, name: 'Product 1', price: 100, image: '' },
        { id: 2, name: 'Product 2', price: 100, image: '' },
        { id: 3, name: 'Product 3', price: 100, image: '' },
      ])
      setLoading(false)
    }, 1000)
  }, [])
  
  if (loading) return <div>Loading products...</div>
  
  return (
    <div className="page">
      <h1>Product Catalog</h1>
      <div className="products-grid" style={{display:'flex', flexWrap:'wrap', gap:'150px'}}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Catalog