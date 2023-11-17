'use client'

import { easeIn, motion } from "framer-motion"
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


  return <div className="p-4 space-y-4 relative">
    <motion.div
       initial={{
        opacity: 0,
        rotateY: 50
      }}
      whileInView={{
        opacity: 1,
        transition: { duration: 1, ease: easeIn },
        rotateY: 0
      }}
    className="absolute bg-[url('/Rect.png')] icons top-0 right-0"></motion.div>
    <motion.h1 
    initial={{
        y:-20,
        opacity: 0
    }} 
    whileInView={{
      y: 0,
      opacity: 1,
      transition: {
        duration: .5,
      }
    }}
    className="text-4xl lg:text-7xl font-bold py-2">Projects</motion.h1>
    <div className="flex flex-col lg:flex-row justify-between gap-4 lg:px-40 lg:py-20">
      {projects.map((card: ProjectsType, i) => (
      <motion.div 
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
      className="w-full" key={card.id}>
      <ProjectsCards 
        name={card.name}
        image={card.image}
        description={card.description} 
        link={card.link}/>
        </motion.div>
  
        ))}
      </div>
  </div>
}

export default ThirdSection