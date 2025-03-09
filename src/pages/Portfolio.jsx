import React,{useState, useEffect} from 'react'
import { useTheme } from '../context/ThemeProvider';
import Message from '../Message';
import { useForm, ValidationError } from '@formspree/react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import SideProjects from '../components/SideProjects';

const Portfolio = () => {
    const [completion, setCompletion] = useState();
    const [state, handleSubmit] = useForm("xyyrpzab");
    const { theme } = useTheme();
     
    useEffect(()=>{
    const updateScrollPosition = () =>{
        const currentProgress = window.scrollY;
        const scrollHeight = document.body.scrollHeight - window.innerHeight
        if(scrollHeight){
        setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100)
        }
    }
    window.addEventListener('scroll', updateScrollPosition);
    return ()=>{
        window.removeEventListener('scroll', updateScrollPosition)
    }
    },[])
    if (state.succeeded) {
    return <Message dark={theme}/>
    }
    
  return (
    <div className={theme}>
      <span style={{transform: `translateX(${completion-100}%)`}} className='fixed bg-gradient-to-r from-cyan-500 to-teal-500 h-2 w-full top-0'></span>
        <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-black font-mono'>
        <section className='max-h-screen'>
        <Hero /> 
        </section>
        {/* About section */}
        <section className='mt-48 mb-24'>
          <div className=' container mx-auto my-12'>
            <h3 className='text-xl py-1 font-semibold md:text-2xl lg:text-3xl text-teal-600'>About Me</h3>
            <p className='text-md py-2 leading-8 dark:text-white'>
            Hi, I’m Jagan, a passionate Frontend Engineer with 3.2+ years of experience building scalable and user-friendly web applications. I specialize in <span className=' text-teal-600'>React.js, JavaScript, Typescript</span> and modern frontend frameworks, ensuring seamless UI/UX experiences.</p>
            <p className=' text-md py-2 leading-8 dark:text-gray-300'>
            I thrive on solving complex problems, collaborating with teams, and continuously learning new technologies. Whether it’s creating intuitive interfaces, integrating APIs, or enhancing performance, I’m always up for a challenge.
            </p>
          </div>

          <Skills />
        </section>

        {/* Experience section */}
        <section className='my-24'>
          <Experience />          
        </section>

        {/* Projects section */}
        <section className='my-24'>
          <Projects />
        </section>

        {/* Side Projects section */}
        <section className='my-24'>
          <SideProjects />
        </section>

        {/* Contact section */}
        <section className='my-24'>
        <h3 className='text-teal-600 text-xl py-1 font-semibold md:text-2xl lg:text-3xl'>Hit me up!</h3>
         <div className=' w-full p-10 flex flex-col items-center md:flex md:flex-row lg:gap-10'>
          <div className='text-center'>
            <iframe src="https://lottie.host/embed/3fe1abaa-723f-4594-a02d-0a820f842d3a/iDwDBOtMmk.json"
            title='contact-logo'
            className='w-72 h-1/2'></iframe>
            <p className='text-lg font-semibold dark:text-gray-100 md:text-xl mb-4'>Reach out to me</p>
          </div>
          <div className='w-full'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                      <input
                        id="email"
                        type="email" 
                        name="email"
                        className='bg-gray-100 p-2 w-full md:w-3/4 rounded text-sm focus:outline focus:outline-teal-500'
                        placeholder='Enter your email!'
                        required
                      />
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                      />
                      <textarea
                        id="message"
                        name="message"
                        required
                        className='bg-gray-100 focus:outline-teal-500 md:w-3/4 p-2 text-sm outline-none rounded' placeholder='Enter your message...'
                      />
                      <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                      />
                      <button type="submit" disabled={state.submitting}
                      className='w-48 mx-auto md:mx-0 bg-gradient-to-r from-cyan-500 to-teal-500 text-white transition duration-150 hover:text-black 
                      rounded px-4 py-2'>Submit
                      </button>
                    </form>

          </div>
          </div>
        </section>
        <footer className='mt-24'>
          <p className='mt-10 text-center text-sm p-4 text-gray-600 dark:text-gray-300'>Developed by <span className=' text-teal-500'>Jagan G Mohan</span></p>
        </footer>
      </main>
     
    </div>
  )
}

export default Portfolio
