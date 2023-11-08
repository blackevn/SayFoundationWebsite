'use client'
import React from 'react'
import { CgMenuLeft } from 'react-icons/cg'
import { VscChromeClose } from 'react-icons/vsc'
import { Button, MobileMenu } from '..'
import useToggle from '@/app/hooks/useToggle'
import { NavigationLinks } from '@/types/interfaces'
import NavLink from './NavLink'
import Link from 'next/link'

export const links: NavigationLinks[] = [
    {
    name: "Home",
    link: "/"
    },
    {
    name: "Projects",
    link: "/projects"
    },
    {
    name: "About",
    link: "/about"
    },
    {
    name: "Contact",
    link: "/contact"
    },

]

const Nav = () => {



 const [ menuToggle, handleToggle ] = useToggle(false)

  return (
    <div className='relative'>
   
    <div className='flex justify-between items-center p-4 fixed w-screen box-border z-10 backdrop-blur-xl'>
        <Link href={`/`} className='cursor-pointer'>
        <img className='w-[150px] lg:w-[200px]' src="/Horizontal@4x.png" alt="Say Family Foundation Logo" />
        </Link>

       <div className='gap-4 items-center hidden lg:flex'>
        {links.map(link => (<NavLink name={link.name} link={link.link}/>))}
        </div>
    <div className='lg:hidden'>
        <Button
        clickEvent={handleToggle}
        icon={CgMenuLeft}
        text=''
        modifier='text-xl'
        />
        </div>
    </div>
    {  menuToggle &&  <div className='top-0 right-0 w-full lg:hidden bg-white box-border grid place-items-center '>
            <div className=''>
                <MobileMenu links={links}/>
            </div>
        </div>}
    </div>
  )
}

export default Nav