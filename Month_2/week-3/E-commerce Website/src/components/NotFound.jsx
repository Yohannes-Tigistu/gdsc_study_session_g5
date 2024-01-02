import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>ERROR PAGE NOT FOUND</h1>
      <Link to="home">Click here to go back to home.</Link>
    </div>
  )
}

export default NotFound