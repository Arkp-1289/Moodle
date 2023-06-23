import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
const Box = () => {
  return (
    <>
    <nav className='navbar2'>
        <div className='nav-center'>
        <Link to="/ml">
            <h3>ML</h3>
        </Link>
        <Link to="/ai">
            <h3>AI</h3>
        </Link>
        <Link to="/cns">
            <h3>CNS</h3>
        </Link>
        <Link to="/oe">
            <h3>OE</h3>
        </Link>
        <Link to="/pe">
            <h3>PE</h3>
        </Link>
        <Link to="/fsd">
            <h3>FSD</h3>
        </Link>
              </div>
    </nav>

    </>
  )
}

export default Box
