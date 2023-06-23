import React from 'react'
import { BrowserRouter as Router ,Link} from 'react-router-dom'
import Cd from '../pages/Cd'
import Pcc from '../pages/Pcc'
import Sse from '../pages/Sse'
import { TbArrowBigLeftFilled } from "react-icons/tb";
import { useState } from 'react';

const OE = () => {
 
  return <>
    <div style={{ height: '100vh' }}>
      <h2 id="h2_text">OPEN ELECTIVE</h2>

    <div className='box'>
      <Link to='/cd' ><b>COMPILER DESIGN</b></Link>
    </div>
    <div className='box'>
      <Link to='/pcc' ><b>PRINCIPLES OF CLOUD COMPUTING</b></Link>
    </div>
    <div className='box'>
      <Link to='/sse' ><b>SECURE SOFTWARE ENGINEERING</b></Link>
    </div>
    </div>
    <Link to='/'><p style={{ textAlign: 'center' }}><TbArrowBigLeftFilled /> Back</p></Link>
  </>
}

export default OE
