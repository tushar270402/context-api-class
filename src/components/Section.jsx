import React, { useContext } from 'react'
import { ThemeContextdata } from '../context/ThemeContext'

const Section = () => {
  let [theme, settheme] = useContext(ThemeContextdata);
  return (
    <h1>I am Body of the page , Theme : {theme} </h1>
  )
}

export default Section