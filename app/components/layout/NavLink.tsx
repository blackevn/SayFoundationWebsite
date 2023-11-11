import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { NavigationLinks } from "@/types/interfaces";
import { usePathname } from "next/navigation";

const NavLink: React.FC<NavigationLinks> = (props) => {

  const { link = "/", name, path } = props

  const pathname = usePathname()
  const active = link === pathname
  


  return <>

            <Link className={`w-full p-2 rounded-md text-center ${active ? 'bg-blue-500 text-white' : 'text-black'} ${path ? 'text-white' : 'text-black'}`} href={link}>

          <div className="grid place-content-baselinegap-4 items-center w-full ">

           <p className="">{name}</p>

              </div>
            
            </Link>
  
        </>
  
};


export default NavLink;