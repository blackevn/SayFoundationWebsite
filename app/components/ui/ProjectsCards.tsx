'use client'
import { FaArrowAltCircleRight } from "react-icons/fa"
import { Button } from ".."
import { ProjectsType } from "../sections/ThirdSection"

const ProjectsCards: React.FC<ProjectsType> = ({description, id, image, name}) => {

  const styles = {
    backgroundImage: `url(${image})`,
  
  }

return <div className={`w-full p-4 rounded-lg min-h-[300px] flex flex-col justify-between bg-no-repeat bg-cover bg-center`} style={styles}>
    <div className=""></div>
<div className="space-y-2">
<h1 className=" text-xl font-bold text-white">{name}</h1>
          <div className="">
          <Button
          modifier="btn"
          text="View"
          icon={FaArrowAltCircleRight}
          />
          </div>
    </div>
          
       
        </div>
}

export default ProjectsCards