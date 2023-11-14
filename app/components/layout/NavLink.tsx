'use client'

import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { NavigationLinks } from "@/types/interfaces";
import { usePathname } from "next/navigation";
import { useGeneralContext } from "@/app/context/AppContext";

const NavLink: React.FC<NavigationLinks> = (props) => {

  const { link = "/", name, path, clicked } = props

  const pathname = usePathname()
  const active = link === pathname
  const { handleToggle, darkMode } = useGeneralContext()


  return <>

            <Link className={`w-full p-2 rounded-md text-center ${active ? 'bg-blue-500 text-white' : 'text-black'} ${path || darkMode ? 'text-white' : 'text-black'}`} href={link}>

          <div onClick={ handleToggle} 
          className="grid place-content-baselinegap-4 items-center w-full ">

           <p className="">{name}</p>

              </div>
            
            </Link>
  
        </>
  
};


export default NavLink;