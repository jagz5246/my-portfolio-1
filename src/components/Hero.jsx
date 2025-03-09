import React from 'react'
import Typewriter from 'typewriter-effect';
import proPic from '../Images/jagan.jpg';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai';
import { useTheme } from '../context/ThemeProvider';


const Hero = () => {
    const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme}>
      <div className=' container lg:mb-12'>
          <nav className=' py-10 mb-10 flex justify-between'>
            <h1 className=' font-burtons text-4xl dark:text-white'>JM</h1>
            <ul className=' flex items-center'>
              <li><BsFillMoonStarsFill className=' cursor-pointer text-xl mr-10 dark:text-white' onClick={()=>{
                toggleTheme();
                console.log(theme);
              }}/></li>
              <li>
                <a style={{cursor:"pointer"}} href={process.env.REACT_APP_RESUME_LINK} className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transition duration-500 hover:text-black'>Resume</a>
              </li>
            </ul>
          </nav>
          <div className=' mt-24 text-center'>
            <h2 className=' text-3xl py-4 font-mono text-teal-600 font-medium md:text-5xl'>Jagan Mohan</h2>
            <div className=' text-md text-teal-600 flex justify-center  md:text-xl dark:text-teal-500'>
              <p className='text-gray-500 dark:text-white'>I am a&nbsp;</p>
              <Typewriter className=' font-mono md:text-6xl'
                  options={{
                    strings: ['Software Engineer', 'Frontend developer', 'Full stack developer'],
                    delay: 75,
                    autoStart: true,
                    loop: true,
                  }}
                />
            </div>
         
          </div>
          <div className='text-4xl justify-center flex gap-16 py-10 text-gray-600 md:text-5xl'>
            <a href='https://github.com/jagz5246'><AiFillGithub className=' cursor-pointer transition duration-150 dark:text-gray-500 hover:text-teal-500 dark:hover:text-gray-300'/></a>
            <a href='https://www.linkedin.com/in/jagan-g-mohan'><AiFillLinkedin  className=' cursor-pointer transition duration-150 dark:text-gray-500 hover:text-teal-500 dark:hover:text-gray-300'/></a>
            <a href='https://www.instagram.com/jagz_5246/'><AiFillInstagram className=' cursor-pointer transition duration-150 dark:text-gray-500 hover:text-teal-500 dark:hover:text-gray-300'/></a>
          </div>
          <div className='w-44 h-44 rounded-full mx-auto overflow-hidden md:w-72 md:h-72'>
            <img src={proPic} alt='avatar.png'/>
          </div>
          </div>
    </div>
  )
}

export default Hero
