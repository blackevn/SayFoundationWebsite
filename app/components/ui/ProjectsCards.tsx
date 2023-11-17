'use client'

import { FaArrowAltCircleRight } from "react-icons/fa"
import { Button } from ".."
import { ProjectsType } from "../sections/ThirdSection"
import Link from "next/link"

const ProjectsCards: React.FC<ProjectsType> = ({description, id, image, name, link}) => {

  const styles = {
    backgroundImage: `url(${image})`,
  
  }

return <div className={`w-full rounded-lg min-h-[300px] flex flex-col justify-between bg-no-repeat bg-cover bg-center relative overflow-hidden`} style={styles}>
    
    
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-[#191A26] from-5%"></div>
<div className="space-y-2 align-baseline absolute bottom-0 m-4">
<h1 className=" text-xl font-bold text-white">{name}</h1>
          <div className="">
        <Link href={link }>
          <Button
          modifier="btn cursor-pointer"
          text="View"
          icon={FaArrowAltCircleRight}
          />
          </Link>
          </div>
    </div>
          
       
        </div>
}

export default ProjectsCards