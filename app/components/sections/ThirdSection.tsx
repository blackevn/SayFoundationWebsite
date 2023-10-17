import { projects } from "@/app/info/project"
import { ProjectsCards } from ".."
import Link from "next/link"

export interface ProjectsType {
    id?: number
    name: string
    image: string
    description: string
    link: string
}


const ThirdSection = () => {


  return <div className="p-4 space-y-4">
    <h1 className="text-7xl font-bold py-10">Projects</h1>
    <div className="flex flex-col lg:flex-row justify-between gap-4 lg:px-40 lg:py-20">
      {projects.map((card: ProjectsType) => (
     
      <ProjectsCards 
        key={card.id}
        name={card.name}
        image={card.image}
        description={card.description} 
        link={card.link}/>
  
        ))}
      </div>
  </div>
}

export default ThirdSection