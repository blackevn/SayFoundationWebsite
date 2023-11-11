
'use client' 
import Image from "next/image"
import { easeIn, motion } from "framer-motion"

const TeamSection = () => {
  return <div className="grid place-items-center py-16 px-8 relative">
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
    className="absolute bg-[url('/Triangle.png')] bottom-0 right-0 icons "></motion.div>

    <motion.div 
      initial={{
        opacity: 0,
        rotateY: -50
      }}
      whileInView={{
        opacity: 1,
        transition: { duration: 1, ease: easeIn },
        rotateY: 0
      }}
    className="absolute bg-[url('/Plus.png')] top-0 left-0 icons"></motion.div>


  <div className="flex flex-col lg:flex-row items-center justify-around gap-12 ">
    <motion.div
    initial={{
      x:-50, 
      opacity: 0
    }}
    whileInView={{
      transition:{duration: .7},
      x:0, 
      opacity: 1
    }}

    >
    
    <Image
    className="rounded-xl"
    src={'/FamilyColor.jpg'}
    alt='Our Family'
    width={700}
    height={256}/>
    </motion.div>

    <motion.div
    initial={{
      y:-50, 
      opacity: 0
    }}
    whileInView={{
      transition:{duration: .7},
      y:0, 
      opacity: 1
    }}
    >
        <h1 className="text-7xl text-center font-medium"><span className="font-bold text-7xl text-blue-500">Together</span>, <br/> we help <br/>  change lives.</h1>
    </motion.div>
      
  </div>
  </div> 
}

export default TeamSection