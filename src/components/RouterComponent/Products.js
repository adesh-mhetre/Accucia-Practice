import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
  return (
    <div>
      <input type="search" placeholder='Search Products'/>
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">new</Link>
      </nav>
    </div>
  )
}

export default Products
