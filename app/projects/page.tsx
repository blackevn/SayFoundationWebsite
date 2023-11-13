'use client'

import { projects } from "@/app/info/project"
import { ProjectsCards } from "../components"
import { motion } from "framer-motion"

const ProjectPage = () => {
  return <div className="pt-20 lg:pt-40 px-4 space-y-4">
      {projects.map((project, i) => ( <motion.div 
           initial={{
            x: -20,
            opacity: 0
          }}
            whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                    delay: i * 0.3,
                    ease: 'easeIn'
                }
            }}
        key={project.id}>
        <ProjectsCards 
          name={project.name} 
          image={project.image} 
          description={project.description} 
          link={project.link} />
        </motion.div>))}
  </div>
}

export default ProjectPage