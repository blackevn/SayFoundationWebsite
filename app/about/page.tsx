
'use client' 
import { easeIn, motion } from "framer-motion"
const page = () => {
  return <div className="grid place-items-center">
    <div className="mb-4">
      <img
        alt='Say Family'
        src={'/FamilyColor.jpg'}
      />
    </div>
      
      <div className=' p-4 text-gray-600 grid place-items-center relative'>
      
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
        className="icons bg-[url('/Triangle.png')] right-0 bottom-0"></motion.div>
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
        className=" absolute icons bg-[url('/Plus.png')] left-0 top-0"></motion.div>

      <motion.div 
      initial={{
        opacity: 0,
        y: 30
      }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: { duration: 2, delay: .4, ease: easeIn },
      }}
      className="font-light lg:w-[50%]">
      <p className="mb-4 lg:text-xl font-semibold">
        Say Family Foundation is a dedicated charity organization operating in Ghana, committed to  improving the lives of underprivileged communities, providing access to education, healthcare, and social services, and promoting sustainable development
      </p>
      <p className=" mb-4 lg:text-xl font-semibold">
        Our vision is to create a Ghana where every individual has the opportunity to lead a healthy, educated, and dignified life.
      </p>
      <div className="text-center">
      <h1 className="text-xl font-bold mb-2 text-blue-600">Core Values</h1>
      <h1 className="font-bold text-lg ">Compassion</h1>
      <p>
       We are driven by empathy and a genuine desire to alleviate suffering.
      </p>
      <h1 className="font-bold text-lg mt-2">Empowerment</h1>
      <p>
      We empower communities to become self-sufficient and resilient.
      </p>
      <h1 className="font-bold text-lg mt-2">Accountability</h1>
      <p>
      We maintain the highest standards of transparency and integrity in our operations.
      </p>
      <h1 className="font-bold text-lg mt-2">Collaboration</h1>
      <p>
      We work in partnership with local communities, government agencies, and other stakeholders to achieve our goals.
      </p>

      <h1 className="text-xl font-bold my-4 text-blue-600">Key Focus Areas</h1>

      <h1 className="text-lg font-bold mt-4">Education</h1>

      <p className="">
      We have set out to  providing scholarships, building schools, and improving educational infrastructure in selected rural areas 
      </p>

      <h1 className="text-lg font-bold mt-4">Healthcare</h1>
     <p>We cater for healthcare bills , disease prevention, and health education</p> 

     <h1 className="text-lg font-bold mt-4">Livelihood Support</h1>
     <p className="font-light"> We help sustain the means of living and income generation for individuals and communities, particularly those facing economic challenges and poverty. 
      These support efforts aim to enhance the overall quality of life by providing people with the necessary skills, resources, and opportunities to secure a stable source of income</p>


      <h1 className="text-lg font-bold mt-4">Community Development</h1>
      At Say Family Foundation, community development is at the heart of everything we do. We believe that true and lasting change starts at the grassroots level. Our commitment to community development is reflected in our core values and mission.
      We recognize that communities possess unique insights, strengths, and solutions to their own challenges. By partnering with them, we aim to:
      Empower Communities,
      Foster Collaboration,
      Build Sustainable Solutions,
      Promote Self-Reliance,
        </div>
      </motion.div>
      </div>
    </div>
}

export default page