import React from 'react'

const Message = ({dark}) => {
    console.log(dark)
  return (
    <div className={dark?"bg-gray-900 w-full h-screen text-center":"w-full h-screen text-center" }>
        <iframe className='w-full h-1/2' src="https://lottie.host/embed/8d11a8b6-6fc3-45fd-99b6-f2ec1183b164/4xq6ZqcSH2.json"></iframe>
        <p className={dark?"text-lg font-bold text-white":"text-lg font-bold text-gray-900"}>Hey, thank you for reaching out😊<br/>
        I will get back to you ASAP🚀</p>
        <a href="http://jaganmohan.netlify.app" className=''>Home</a>
    </div>
  )
}

export default Message
