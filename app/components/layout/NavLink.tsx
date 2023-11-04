import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { NavigationLinks } from "@/types/interfaces";
import { usePathname } from "next/navigation";

const NavLink: React.FC<NavigationLinks> = (props) => {

  const { link = "/", name} = props

  const pathname = usePathname()
  const active = link === pathname
  


  return <>

            <Link className={` p-2 rounded-md ${active ? 'bg-blue-500 text-white' : 'text-black'}`} href={link}>

          <div className="flex gap-4 items-center ">

           <p className="hidden sm:block">{name}</p>

              </div>
            
            </Link>
  
        </>
  
};


export default NavLink;