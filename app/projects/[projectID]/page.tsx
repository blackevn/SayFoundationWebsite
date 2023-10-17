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


    return <div className='pt-20 px-8'>
          <Button
          clickEvent={router.back}
          text="Back" 
          icon={FaArrowCircleLeft}
          modifier='btn cursor-pointer'
          />
            <div className='text-3xl font-bold pt-10'>{filteredProject.map(project => project.name)}</div>
            <div className='w-screen grid place-items-center pt-20'>
            <img alt='image' className=' rounded-lg max-w-4xl' src={filteredProject.map(project => project.image).toString()}/>
            </div>
          </div>
  
}

export default Project