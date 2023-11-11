import { projects } from "@/app/info/project"
import { ProjectsCards } from "../components"

const ProjectPage = () => {
  return <div className="pt-40 px-4 space-y-4">
      {projects.map(project => (<ProjectsCards key={project.id} name={project.name} image={project.image} description={project.description} link={project.link} />))}
  </div>
}

export default ProjectPage