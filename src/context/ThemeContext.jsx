import React, { createContext, useState } from 'react'
export const ThemeContextdata = createContext()

const ThemeContext = ({children}) => {
    
    const [theme, settheme] = useState("light")
  return (
    <div>
        <ThemeContextdata.Provider value={[theme, settheme]}>{children}</ThemeContextdata.Provider>
    </div>
  )
}

export default ThemeContext
