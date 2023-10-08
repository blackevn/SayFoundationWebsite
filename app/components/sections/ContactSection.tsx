import React from 'react'

const ContactSection = () => {
  return <div className='grid place-items-center space-y-4 p-12'>
    <h1 className='text-7xl font-bold text-blue-500 text-center'>Send us a message</h1>
    <div className="join">
    <input className="input input-bordered join-item" placeholder="Email"/>
    <button className="btn join-item rounded-r-full">Subscribe</button>
    </div>
  </div>
  
}

export default ContactSection