import React from 'react'
import UsernameContext from './context/UserContext'
import Home from './components/Home'

const App = () => {

  let username = "Tushar"
  return (
    <UsernameContext.Provider value={{username}}>
      <Home/>
    </UsernameContext.Provider>
  )
}

export default App