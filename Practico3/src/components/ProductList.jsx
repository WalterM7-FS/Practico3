import React from 'react'
import products from '../api/products.json'
import { useCart } from '../context/CartContext'
import { useTheme } from '../context/ThemeContext'


const ProductList = () => {

  const {addToCart} = useCart()
  
  
  return (
    <div className='p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {products.map((product) => (
        <div
          key={product.id}
          className='bg-gray-600 p-4 rounded-4xl shadow-md text-center'
        >
          
          <h3 className='p-2 text-3xl text-amber-100 font-semibold'>{product.name}</h3>
          <h3 className='p-2 text-3xl text-amber-100 font-semibold'>$ {product.price}</h3>
          <button
            className='bg-blue-900 text-cyan-200 p-2 rounded-2xl hover:bg-blue-600 transition cursor-pointer'
            onClick={() => addToCart(product) }
          >
            Agregar al carrito
          </button>
        </div>
      ))}


    </div>
  )
}

export default ProductList 