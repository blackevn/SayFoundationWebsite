'use client'
import React from 'react'
import { Button } from '..'
import {BsArrowUpRight} from 'react-icons/bs'
import Image from 'next/image'
import { FaArrowAltCircleRight } from 'react-icons/fa'


const Landing = () => {
  return (
    <div className='flex flex-col lg:flex-row py-20 px-4 gap-4'>

        <div className='h-full w-full lg:w-[50%] rounded-xl flex flex-col lg:flex-row justify-between relative overflow-hidden min-h-[300px]'>
        <div className='p-4 z-[2] absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500/25 text-white flex flex-col justify-between'>
            <div>
            <h1 className='text-4xl font-bold'>Help us change lives!</h1>
            <h1>Join 5000+ People Donate</h1> 
            </div>
            <div>
            <Button
            text='Donate'
            modifier='btn'
            icon={FaArrowAltCircleRight}
            />
            </div>
            </div>
            <div className='z-[0] flex justify-end w-full relative'>
            <div className='absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-br from-blue-500'></div>
            <img
            src={`/CharityPhoto.png`}
            alt='charity photo'
            className='m-0 h-full min-w-[600px]'
            />
            </div>
        </div>

        <div className={`p-4 w-full lg:w-[25%] rounded-xl flex flex-col justify-between bg-[url('/BeninChildren.jpg')] bg-no-repeat bg-cover relative overflow-hidden min-h-[300px]`}>
            <div className='absolute top-0 bottom-0 left-0 right-0 h-full flex flex-col justify-between p-4 bg-black/20'>
                <h1 className='text-3xl font-bold text-white'>Sponsor food, education to <br/> Orphans Benin</h1>
        <div className='flex justify-end'>
                   <Button
            text='Explore more'
            modifier='btn'
            />
            </div>
            </div>
         
        </div>
        <div className='w-full lg:w-[25%] rounded-xl p-4 flex flex-col justify-between relative bg-gradient-to-r from-green-500 min-h-[300px]'>
        <h1 className='text-[4rem] font-bold text-white absolute bottom-0 left-0 mx-4'>Explore more</h1>
            <div className='absolute top-0 right-0 m-4'>
            <Button
            icon={BsArrowUpRight}
            
            text=''
            modifier='btn-lg btn bg-white'
            />
            </div>
        </div>
    </div>
  )
}

export default Landing