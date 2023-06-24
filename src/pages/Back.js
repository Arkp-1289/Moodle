import React from 'react'
import { Link } from 'react-router-dom'
import { TbArrowBigLeftFilled } from "react-icons/tb";
const Back = () => {
  return (
    <div>
          <Link to='/'><p style={{ textAlign: 'center' }}><TbArrowBigLeftFilled /> Back</p></Link>
    </div>
  )
}

export default Back
