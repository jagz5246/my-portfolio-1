import React from 'react'
import sideProject1 from '../Images/side-project-1.png';
import sideProject2 from '../Images/side-project-2.png';
import sideProject3 from '../Images/side-project-3.png';
import { motion } from "framer-motion";

const SideProjects = () => {
  const sideProjects = [
    {
      title: 'Rigi (Video Player)',
      imgURL: sideProject1,
      techStack: ['React.js', 'React hooks', 'contextAPI', 'react-player', 'tailwindcss', 'screenful', 'Vercel'],
      liveDemo: 'https://video-player-six-sigma.vercel.app/',
      sourceCode: 'https://github.com/jagz5246/video-player'
    },
    {
      title: 'Eternattire (shopping app)',
      imgURL: sideProject2,
      techStack: ['Next.js', 'Typescript', 'Redux', 'Tailwindcss', 'Shadcn', 'Sanity.io', 'Stripe', 'Vercel'],
      liveDemo: 'https://eternattire-ecomm.vercel.app/',
      sourceCode: 'https://github.com/jagz5246/eternattire-ecomm'
    },
    {
      title: 'Netflix Clone',
      imgURL: sideProject3,
      techStack: ['React.js', 'Redux', 'React hooks', 'Firebase', 'Firestore', 'Stripe', 'Github pages'],
      liveDemo: 'https://jagz5246.github.io/netflix-clone/',
      sourceCode: 'https://github.com/jagz5246/netflix-clone'
    }
  ];

  return (
    <div>
      <div className=' container my-12'>
            <h3 className=' text-teal-600 text-xl py-4 font-semibold md:text-2xl lg:text-3xl '>Side Projects</h3>
            <p className=' text-md md:text-xl py-2 leading-8 dark:text-white'>
            Take a look at some of my <span className=' text-teal-500'>side projects</span>
            </p>
            <div className='lg:flex gap-4'>
            {sideProjects.map((project, index) => {
                return (
                    <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                    viewport={{ once: false, amount: 0.1 }}
                    className=' text-center lg:w-1/2 p-5 rounded-lg cursor-pointer transition ease-in-out delay-50 hover:-translate-y-2 my-10 shadow  hover:bg-gray-300 outline outline-gray-200 dark:outline-gray-800 dark:text-white dark:hover:bg-gray-100 dark:hover:shadow-gray-300 hover:outline-none'>
                        <div className="rounded-lg container mx-auto w-52 h-36 background bg-cover bg-center bg-no-repeat" 
                        style={{ backgroundImage:  `url(${project.imgURL})` }}/>
                        <h3 className=' text-lg font-bold lg:text-xl py-4 text-teal-500  '>{project.title}</h3>
                        <div className='flex flex-wrap justify-center gap-2 max-w-max text-gray-900'>
                            {project.techStack.map((tech, idx) => {
                                return <p key={idx} className='p-2 bg-gray-300 dark:bg-gray-900 dark:text-gray-100 rounded-md text-xs'>{tech}</p>
                            })}                        
                            </div>
                        <div className=' flex justify-center gap-2 mt-10'>
                        <button className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md text-sm hover:text-black '><a href={project.liveDemo}>Live demo</a></button>
                        <button className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md text-sm hover:text-black'><a href={project.sourceCode}>Source code</a></button>
                        </div>
                    </motion.div>
                )})}

            {/* {/* Side Project 1

            <div className=' text-center lg:w-1/2 p-5 rounded-lg cursor-pointer transition ease-in-out delay-50 hover:-translate-y-2 my-10 shadow  hover:bg-gray-300 outline outline-gray-200 dark:outline-gray-800 dark:text-white dark:hover:bg-gray-100 dark:hover:shadow-gray-300 hover:outline-none'>
            <div className="rounded-lg container mx-auto w-52 h-36 background bg-[url('./Images/side-project-1.png')] bg-cover bg-center bg-no-repeat" />
              <h3 className=' text-lg font-bold lg:text-xl py-4 text-teal-500  '>VIDEO-PLAYER</h3>
              <div className='flex flex-wrap justify-center gap-2 max-w-max text-gray-900'>
                  <p className='p-2 bg-gray-300 dark:bg-gray-900 dark:text-gray-100 rounded-md text-xs'>React.js</p>
                  <p className='p-2 bg-gray-300 dark:bg-gray-900 dark:text-gray-100 rounded-md text-xs'>React hooks</p>
                  <p className='p-2 bg-gray-300 dark:bg-gray-900 dark:text-gray-100 rounded-md text-xs'>contextAPI</p>
                  <p className='p-2 bg-gray-300 dark:bg-gray-900 dark:text-gray-100 rounded-md text-xs'>react-player</p>
                  <p className='p-2 bg-gray-300 dark:bg-gray-900 dark:text-gray-100 rounded-md text-xs'>tailwindcss</p>
                  <p className='p-2 bg-gray-300 dark:bg-gray-900 dark:text-gray-100 rounded-md text-xs'>screenful</p>
                  <p className='p-2 bg-gray-300 dark:bg-gray-900 dark:text-gray-100 rounded-md text-xs'>Vercel</p>
                </div>
              <div className=' flex justify-center gap-2 mt-10'>
              <button className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md text-sm hover:text-black '><a href='https://video-player-six-sigma.vercel.app/'>Live demo</a></button>
              <button className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md text-sm hover:text-black'><a href='https://github.com/jagz5246/video-player'>Source code</a></button>
              </div>
            </div> 

            <div className=' text-center lg:w-1/2 p-5 rounded-lg cursor-pointer transition ease-in-out delay-50 hover:-translate-y-2  my-10 shadow hover:bg-gray-300 outline outline-gray-200 dark:outline-gray-800 dark:text-white dark:hover:bg-gray-100 dark:hover:shadow-gray-300 hover:outline-none'>
              <div className="rounded-lg mx-auto container w-52 h-36 background bg-[url('./Images/side-project-2.png')] bg-cover bg-center bg-no-repeat" />
              <h3 className='text-lg font-bold lg:text-xl text-teal-500 py-4 '>SHOPPING APP</h3>
                <div className='flex flex-wrap justify-center gap-2 max-w-max text-gray-900'>
                  <p className='p-2 bg-gray-300 dark:bg-gray-900 dark:text-gray-100 rounded-md text-xs'>Next.js</p>
                  <p className='p-2 bg-gray-300 dark:bg-gray-900 dark:text-gray-100 rounded-md text-xs'>Typescript</p>
                  <p className='p-2 bg-gray-300 dark:bg-gray-900 dark:text-gray-100 rounded-md text-xs'>Redux</p>
                  <p className='p-2 bg-gray-300 dark:bg-gray-900 dark:text-gray-100 rounded-md text-xs'>Tailwindcss</p>
                  <p className='p-2 bg-gray-300 dark:bg-gray-900 dark:text-gray-100 rounded-md text-xs'>Shadcn</p>
                  <p className='p-2 bg-gray-300 dark:bg-gray-900 dark:text-gray-100 rounded-md text-xs'>Sanity.io</p>
                  <p className='p-2 bg-gray-300 dark:bg-gray-900 dark:text-gray-100 rounded-md text-xs'>Stripe</p>
                  <p className='p-2 bg-gray-300 dark:bg-gray-900 dark:text-gray-100 rounded-md text-xs'>Vercel</p>
                </div>
              <div className=' flex justify-center gap-2 mt-10'>
              <button className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md text-sm hover:text-black '><a href='https://eternattire-ecomm.vercel.app/'>Live demo</a></button>
              <button className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md text-sm hover:text-black'><a href='https://github.com/jagz5246/eternattire-ecomm'>Source code</a></button>
              </div>
            </div>

<div className=' text-center lg:w-1/2 p-5 rounded-lg cursor-pointer transition ease-in-out delay-50 hover:-translate-y-2  my-10 shadow hover:bg-gray-300 outline outline-gray-200 dark:outline-gray-800 dark:text-white dark:hover:bg-gray-100 dark:hover:shadow-gray-300 hover:outline-none'>
            <div className="rounded-lg container mx-auto w-52 h-36 background bg-[url('./Images/side-project-3.png')] bg-cover bg-center bg-no-repeat" />
              <h3 className='text-lg font-bold lg:text-xl py-4 text-teal-500  '>NETFLIX-CLONE</h3>
              <div className='flex flex-wrap justify-center gap-2 max-w-max text-gray-900'>
                  <p className='p-2 bg-gray-300 dark:bg-gray-900 dark:text-gray-100 rounded-md text-xs font-medium'>React.js</p>
                  <p className='p-2 bg-gray-300 dark:bg-gray-900 dark:text-gray-100 rounded-md text-xs font-medium'>Redux</p>
                  <p className='p-2 bg-gray-300 dark:bg-gray-900 dark:text-gray-100 rounded-md text-xs font-medium'>React hooks</p>
                  <p className='p-2 bg-gray-300 dark:bg-gray-900 dark:text-gray-100 rounded-md text-xs font-medium'>Firebase</p>
                  <p className='p-2 bg-gray-300 dark:bg-gray-900 dark:text-gray-100 rounded-md text-xs font-medium'>Firestore</p>
                  <p className='p-2 bg-gray-300 dark:bg-gray-900 dark:text-gray-100 rounded-md text-xs font-medium'>Stripe</p>
                  <p className='p-2 bg-gray-300 dark:bg-gray-900 dark:text-gray-100 rounded-md text-xs font-medium'>Github pages</p>
                </div>
            <div className=' flex justify-center gap-2 mt-10'>
              <button className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md text-sm hover:text-black '><a href='https://jagz5246.github.io/netflix-clone/'>Live demo</a></button>
              <button className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md text-sm hover:text-black'><a href='https://github.com/jagz5246/netflix-clone'>Source code</a></button>
              </div>
            </div>
            */}
          </div>           
          </div>
    </div>
  )
}

export default SideProjects
