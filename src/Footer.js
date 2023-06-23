import React from 'react'

const Footer = () => {
  return (
    <div style={{
      display:'flex',
      border:'1px solid black',
       background:'black',
       justifyContent:'center',
    }}>
      <h3 style={{ color: 'white' }}>&copy;</h3>
      <h3 style={{color:'white'}}>All Rights are reserved</h3>
    </div>
  )
}

export default Footer
