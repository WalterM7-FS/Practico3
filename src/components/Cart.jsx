import React from 'react'
import { useCart } from '../context/CartContext'
import { useTheme } from '../context/ThemeContext'

const Cart = () => {

  const {isModalOpen, onClose} = useTheme()

  

  console.log(` llega a cart-> ${isModalOpen}`)

  const {removeFromCart, cart, totalPrice, updateQuantityEnMas, updateQuantityEnMenos} = useCart()

  if(!isModalOpen) return null
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center <-50'>
      <div className='bg-gray-700 rounded-lg shadow-lg p-6  max-w-md relative w-auto h-auto'>

        
        <button className='hover:rotate-180 cursor-pointer'
          onClick={onClose}
        >
          ✖️
        </button>
        
        <p className='text-cyan-200 justify-center'>Lista de Productos Seleccionados:</p>
        
        
        {
          cart.length === 0 ? (
            <p className='text-white'>No tienes productos seleccionadss</p>
          ) : (
            cart.map((product) => (
              <div className='text-white' key={product.id}>
                <p>Artículo: {product.name}</p>
                <p>Precio Unitario $ {product.price}</p>
                <p>Unidades seleccionadas: {product.quantity}</p>
                

                <button
                  className='bg-green-600 p-2 m-2 rounded-2xl hover:bg-green-800 text-white transition cursor-pointer'
                  onClick={() => updateQuantityEnMas(product.id, product.quantity)}
                >
                  +
                </button>
                <button
                  className='bg-amber-500 p-2 m-2 rounded-2xl hover:bg-amber-800 text-white transition cursor-pointer'
                  onClick={() => updateQuantityEnMenos(product.id, product.quantity)}
                >
                  -
                </button>
                <button
                  className='bg-red-500 p-2 m-2 rounded-2xl hover:bg-red-800 text-white transition cursor-pointer'
                  onClick={() => removeFromCart(product.id)}
                >
                  Remover producto
                </button>
                <hr />
                
            </div>
        
            ))
          ) 
          

        }
        <p className='m-2 text-blue-200'>Precio Total de Compra: {totalPrice}</p>
      </div>
      
      </div>
    
  )
}

export default Cart