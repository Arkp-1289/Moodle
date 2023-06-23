import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { TbArrowBigLeftFilled } from "react-icons/tb";
import Test from '../Test'

const Pe = () => {
  return <>
    <div style={{ height: '100vh' }}>
      <h2 id="h2_text">PROFESSIONAL ELECTIVE </h2>
      <div className='box'>
      <Link to='/at' ><b>AUTOMATION TESTING</b></Link>
    </div>
    <div className='box'>
      <Link to='/ood' ><b>OBJECT ORIENTED MODELLING AND DESIGN</b></Link>
    </div>
    <div className='box'>
      <Link to='/sp' ><b>SOCKET PROGRAMMING</b></Link>
    </div>
  </div>
    <Link to='/'><p style={{ textAlign: 'center' }}><TbArrowBigLeftFilled /> Back</p></Link>
  </>
}

export default Pe
