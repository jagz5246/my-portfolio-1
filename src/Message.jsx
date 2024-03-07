import React from 'react'
import Lottie from "lottie-react";
import message from './message-svg.json'

const Message = ({dark}) => {
  return (
    <div className={dark?"bg-black h-screen flex flex-col gap-12 justify-center items-center":"flex flex-col gap-4 h-screen items-center" }>
      
        <div>
            <Lottie className=' mx-auto w-72 h-72'
            animationData={message} loop={false}/>
            <p className={dark?"text-lg text-center font-extralight text-white":"text-center text-lg font-extralight text-gray-900"}>Hey, thank you for reaching out😊<br/>
            I will get back to you ASAP🚀</p>
        </div>
        <a href="http://jaganmohan.netlify.app" 
        className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white transition-all duration-150 hover:text-black 
        rounded px-4 py-2'>Home</a>
    </div>
  )
}
export default Message
