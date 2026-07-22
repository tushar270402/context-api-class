import React, { useContext } from 'react'
import UsernameContext from '../context/UserContext'

const Home = () => {
  let {username} = useContext(UsernameContext)
  return (
    <UsernameContext>
      <h1>Hello {username}!!! This is home</h1>
    </UsernameContext>
  )
}

export default Home