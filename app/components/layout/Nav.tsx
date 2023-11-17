'use client'
import React from 'react'
import { CgMenuLeft } from 'react-icons/cg'
import { VscChromeClose } from 'react-icons/vsc'
import { IoMdClose } from "react-icons/io";
import { Button, MobileMenu, Toggle } from '..'
import useToggle from '@/app/hooks/useToggle'
import { NavigationLinks } from '@/types/interfaces'
import NavLink from './NavLink'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useGeneralContext } from '@/app/context/AppContext'
import { IconBaseProps } from 'react-icons'
import { FaAdjust, FaMoon, FaSun } from 'react-icons/fa'

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
  
    const pathname: any = usePathname();
    const logoWhite = pathname === '/about'
    const { menuToggle, handleToggle, darkMode, toggleDarkMode, setDarkMode } = useGeneralContext()

    console.log(pathname);

  return (

    <div className='relative z-[9999]'>
   
    <div className={`flex justify-between items-center p-4 fixed w-screen box-border z-10 backdrop-blur-xl ${logoWhite && "bg-[#191A26]"}`}>
        <Link href={`/`} className='cursor-pointer'>
        <img className='w-[150px] lg:w-[200px]' src={logoWhite || darkMode ? "/WhiteLogo.png" : "/Horizontal@4x.png"} alt="Say Family Foundation Logo" />
        </Link>

       <div className='items-center hidden lg:flex gap-4'>
        {links.map(link => (<NavLink path={logoWhite} name={link.name} link={link.link}/>))}

        <div>
     {   !logoWhite && <Toggle 
                        icon={FaAdjust} 
                        toggleEvent={ toggleDarkMode } 
                        on={FaSun} 
                        off={FaMoon } 
                        modifier={`${darkMode ? 'text-white' : ''} m-4`} 
                        modifier1={''} 
                        modifier2={''} 
                        checked={darkMode} 
                        placeholder={''}/>}
    </div>
    </div>
    <div className='lg:hidden flex gap-8'>
        { !logoWhite && <Toggle 
                        icon={FaAdjust} 
                        toggleEvent={ toggleDarkMode } 
                        on={FaSun} 
                        off={FaMoon } 
                        modifier={`${darkMode || logoWhite ? 'text-white' : ''}`} 
                        modifier1={''} 
                        modifier2={''} 
                        checked={darkMode} 
                        placeholder={''}/>}

                        <Toggle
                        toggleEvent={handleToggle}
                        modifier='text-xl' 
                        on={ CgMenuLeft} 
                        off={IoMdClose } 
                        modifier1={ darkMode || logoWhite  ? 'text-white' : 'text-black'} 
                        modifier2={darkMode || logoWhite  ? 'text-white' : 'text-black lg:h-1/4'} 
                        checked={menuToggle} 
                        placeholder={''}/>
            </div>

    </div>

    {  menuToggle &&  <div className={`top-20 right-0 w-full lg:hidden box-border grid place-items-center ${menuToggle ? 'z-[9999]': ''}`}>
            <div className='fixed w-full backdrop-blur-lg bg-white/30'>
                <MobileMenu links={links}/>
            </div>
        </div>}
    </div>
  )
}

export default Nav