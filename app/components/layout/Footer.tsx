'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const Footer = () => {

  const pathname: any = usePathname();
  const footerColor = pathname === '/about'

  return <footer className={`footer p-10 ${ footerColor && 'bg-[#191A26] text-white'} dark:bg-[#191A26] dark:text-gray-300`}>
   <Link href={`/`} className='cursor-pointer'>
      <img className='w-[150px] lg:w-[200px]' src={footerColor ? "/WhiteLogo.png" : "/Horizontal@4x.png"} alt="Say Family Foundation Logo" />
        </Link>
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
}

export default Footer