'use client'

import { ContactForm } from "../components"
import { useGeneralContext } from "../context/AppContext"

const Contact = () => {

      const { menuToggle, handleToggle, darkMode, toggleDarkMode, setDarkMode } = useGeneralContext()

      return <div className="dark:bg-[#191A26] dark:text-gray-300">
            <ContactForm modifier="pt-20 lg:h-screen lg:w-screen "/>          
            </div> 
}

export default Contact