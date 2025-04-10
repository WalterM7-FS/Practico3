import React from 'react'
import { useTheme } from '../context/ThemeContext'

const Header = () => {

  const {onOpenModal} = useTheme()

  

  
  return (
    <>
      <header className='bg-gray-800 text-white p-4 shadow-md'>

        <button
          className='bg-blue-900 text-cyan-200 p-2 rounded-2xl hover:bg-blue-600 transition cursor-pointer'
          onClick={onOpenModal}
        >
          Ver Carrito
        </button>
      </header>
    </>
  )
}

export default Header