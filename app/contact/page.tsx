'use client'

import { Button, Input } from "../components"
import { FaArrowAltCircleRight } from "react-icons/fa"


const Contact = () => {
  return  <div className="pt-20 lg:h-screen lg:w-screen lg:flex ">
            <div className="lg:w-1/2 h-full grid place-items-center p-10">
              <div className="space-y-4 lg:w-1/2 grid place-items-center">
                <div className="space-y-4">
                  <h1 className=" text-5xl lg:text-7xl font-black text-blue-600">Help us change lives!</h1>
                  <h2 className="text-2xl">If you would like any more information regarding giving What We Can, then please contact us and we will do our best to help.</h2>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:h-full grid place-items-center p-4">
              <div className="space-y-4 p-4 rounded-lg shadow-lg">
              <Input 
                modifier="border" 
                placeholder="Name"   />
              <Input 
                placeholder="E-mail"  />
                <textarea
                className="textarea w-full"
                placeholder="Message"
                />
                <Button
                text="Send"
                modifier="btn bg-blue-600 text-white"
                icon={FaArrowAltCircleRight}
                />
              </div>
            </div>
          </div>
  
}

export default Contact