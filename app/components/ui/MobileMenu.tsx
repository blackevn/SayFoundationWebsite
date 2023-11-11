import NavLink from "../layout/NavLink"
import { NavigationLinks } from '@/types/interfaces'

interface MobileMenuProps {
    links: NavigationLinks[]
}

const MobileMenu: React.FC<MobileMenuProps> = ({ links }) => {
  return <div className="pt-10">
            <div className="p-8 flex flex-col space-y-2 w-full">
            {links.map(link => (<NavLink key={link.name} link={link.link} name={link.name}/>))}
            </div>
        </div>
}

export default MobileMenu