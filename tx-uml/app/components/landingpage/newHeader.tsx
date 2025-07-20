import React from 'react'
import './newHeader.css'
import Link from 'next/link';
import Image from 'next/image'

const NewHeader = () => {
  return (
<div className="new-header">
      <Link href="/" id="logo" className="logo">
        <Image src="/images/TXUML-logo.svg" alt="Logo" width={100} height={60} />
      </Link>
      <header className="welcome-header">Welcome User!</header>
      <div className="nav-links">
        <Link href="/signup" id="signup" className="signup">Sign up</Link>
        <Link href="/login" id="signin" className="signin">Log in</Link>
      </div>
    </div>
  )
}

export default NewHeader