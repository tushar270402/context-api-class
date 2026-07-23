import React, { useContext } from 'react'
import {ThemeContextdata} from '../context/ThemeContext'

const Navbar = () => {
  let [theme,settheme] = useContext(ThemeContextdata)
  return (
      <div className='flex items-center justify-between p-5 bg-black text-white'>
      <h1 className='font-bold text-2xl'>Tushar's Website</h1>
      <div className='flex items-center justify-between w-[20%]'>
        <p>{theme}</p>
        <button onClick={()=>{settheme("dark")}} className='bg-red-600 px-5 py-2 border-none rounded'>Change Theme</button>
      </div>
    </div>
  )
}

export default Navbar