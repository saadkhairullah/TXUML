import React from 'react'
import Image from 'next/image'

// this is where the about page frontend goes
const aboutpage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',  alignItems: 'center', gap: '3rem' }}>
      <h1 style={{fontSize: '64px', textAlign: "center", color: "black"}}>About TXUML</h1>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Image
          src={"/images/tunnel1.png"}
          alt="Underground Mine Tunnel"
          width={240}
          height={320}
          style={{ borderRadius: '4px' }}
        />
        <Image
          src={"/images/minemap.png"}
          alt="Texas Underground Mine Map"
          width={320}
          height={320}
          style={{ borderRadius: '4px' }}
        />
      </div>
    </div>
  )
}

export default aboutpage
