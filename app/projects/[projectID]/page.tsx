'use client'

import { Button } from '@/app/components';
import { ProjectsType } from '@/app/components/sections/ThirdSection';
import { projects } from '@/app/info/project';
import { useReducedMotion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { FaArrowCircleLeft } from 'react-icons/fa';

const Project = () => {
const pathname: any = usePathname();
const projectID: number = pathname.match(/\d+/)[0].toString(); 
const filteredProject = projects.filter(project => project.id?.toString() === projectID.toString())
const router = useRouter()

console.log(filteredProject);


    return <div className='pt-20 lg:pt-40 min-h-screen px-4 '>
          <Button
          clickEvent={router.back}
          text="Back" 
          icon={FaArrowCircleLeft}
          modifier='btn cursor-pointer'
          />
            <div className='w-full grid place-items-center'>
            <img alt='image' className=' rounded-lg w-full lg:max-w-4xl ' src={filteredProject.map(project => project.image).toString()}/>
            </div>
            <div className='grid place-items-center py-8 w-screen'>
            <div className='text-3xl font-bold py-10'>{filteredProject.map(project => project.name)}</div>
              <p className=' w-full lg:max-w-[700px] '>{filteredProject.map(project => project.description)}</p>
            </div>
          </div>
  
}

export default Project