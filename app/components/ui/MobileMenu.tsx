import { useGeneralContext } from "@/app/context/AppContext"
import { Toggle } from ".."
import NavLink from "../layout/NavLink"
import { NavigationLinks } from '@/types/interfaces'
import { FaAdjust, FaMoon, FaSun } from "react-icons/fa"

interface MobileMenuProps {
    links: NavigationLinks[]
}

const MobileMenu: React.FC<MobileMenuProps> = ({ links }) => {

    const { menuToggle, handleToggle, darkMode, toggleDarkMode, setDarkMode } = useGeneralContext()

  return <div className="pt-20 w-screen h-screen grid place-items-center">

        
            <div className="p-8 flex flex-col space-y-2 w-full font-bold">
            {links.map(link => (<NavLink key={link.name} link={link.link} name={link.name}/>))}
            </div>
        </div>
}

export default MobileMenu