import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai';
import './App.css';
import { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Typewriter from 'typewriter-effect';
import proPic from './Images/jagan.jpg';
import contact from './Images/contact-me.gif'
import design from './Images/design.png';
import code from './Images/code.png';
import consulting from './Images/design1.png';
import html from './Icons/html.png';
import css from './Icons/css.png';
import js from './Icons/js.png';
import react from './Icons/react.png';
import nextjs from './Icons/icons8-nextjs-48.png';
import typescript from './Icons/icons8-typescript-48.png';
import redux from './Icons/icons8-redux-48.png';
import sass from './Icons/icons8-sass-48.png';
import tailwind from './Icons/icons8-tailwind-css-48.png';
// import firebase from './Icons/icons8-firebase-48.png';
import java from './Icons/java.png';
import python from './Icons/python.png';
import figma from './Icons/figma.png';
import xd from './Icons/xd.png';
import Message from './Message';


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [completion, setCompletion] = useState();
  const [state, handleSubmit] = useForm("xyyrpzab");
 
 
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
    return <Message dark={darkMode}/>
  }
  return (
    <div className={darkMode?"dark":"" }>
      <span style={{transform: `translateX(${completion-100}%)`}} className='fixed bg-gradient-to-r from-cyan-500 to-teal-500 h-2 w-full top-0'></span>
        <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 font-mono'>
        <section className=' max-h-screen'>
        <div className=' container lg:mb-12'>
          <nav className=' py-10 mb-10 flex justify-between'>
            <h1 className=' font-burtons text-4xl dark:text-white'>JM</h1>
            <ul className=' flex items-center'>
              <li><BsFillMoonStarsFill className=' cursor-pointer text-xl mr-10 dark:text-white' onClick={()=>setDarkMode(!darkMode)}/></li>
              <li>
                <a href='https://drive.google.com/file/d/1-PJc3ls8o5K76_HPaDvb47h9AZRPWRj7/view?usp=sharing' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md transition duration-500 hover:text-black'>Resume</a>
              </li>
            </ul>
          </nav>
          <div className=' text-center'>
            <h2 className=' text-3xl py-4 font-mono text-teal-600 font-medium md:text-5xl'>Jagan Mohan</h2>
            <div className=' text-md text-teal-600 flex justify-center  md:text-xl dark:text-teal-500'>
              <p className='text-gray-500 dark:text-white'>I am a&nbsp;</p>
              <Typewriter className=' font-mono md:text-6xl'
                  options={{
                    strings: ['Project engineer', 'Frontend developer', 'UI developer'],
                    delay: 75,
                    autoStart: true,
                    loop: true,
                  }}
                />
            </div>
         
            {/* <p className=' text-lg py-5 leading-8 text-gray-800 md:max-w-lg mx-auto dark:text-white'>Hi, I am Jagan. Nice to meet you😊</p> */}
          </div>
          <div className='text-4xl justify-center flex gap-16 py-10 text-gray-600 md:text-5xl'>
            <a href='https://github.com/jagz5246'><AiFillGithub className=' cursor-pointer transition duration-150 dark:text-gray-500 hover:text-teal-500 dark:hover:text-gray-300'/></a>
            <a href='https://www.linkedin.com/in/jagan-g-mohan-6b82701a2/'><AiFillLinkedin  className=' cursor-pointer transition duration-150 dark:text-gray-500 hover:text-teal-500 dark:hover:text-gray-300'/></a>
            <a href='https://www.instagram.com/jagz_5246/'><AiFillInstagram className=' cursor-pointer transition duration-150 dark:text-gray-500 hover:text-teal-500 dark:hover:text-gray-300'/></a>
          </div>
          <div className='w-44 h-44 rounded-full mx-auto overflow-hidden md:w-72 md:h-72'>
            <img src={proPic} alt='avatar.png'/>
          </div>
          </div> 
        </section>
        {/* About section begins */}
        <section className='py-5 md:py-10 lg:py-10'>
          <div className=' container mx-auto my-12'>
            <h3 className='text-xl py-1 font-bold md:text-2xl lg:text-4xl text-teal-600'>About Me</h3>
            <p className='text-md py-2 leading-8 dark:text-white'>
            As a dedicated developer with over 2 years of hands-on experience in technologies like HTML5, CSS3, JavaScript, Typescript, React js, Next js, Tailwind css and more. I bring a passion for creating user-friendly, responsive web applications.</p>
            <p className=' text-md py-2 leading-8 dark:text-gray-300'>
            My<span className=' text-teal-6'> interests</span> include Front end development, UI desiging, Data analytics and programming.
            </p>
          </div>
          <h3 className=' text-teal-600 text-3xl py-1 font-bold md:text-4xl lg:text-4xl mt-20'>Skills</h3>
          <div className='flex flex-col lg:flex-row items-center bg-grey-300 justify-evenly my-10 gap-4'>

            <div className=' outline outline-teal-800 text-center mb-5 rounded-full '>
              <div className='flex flex-col px-4 py-12 gap-2 w-full h-full justify-center '>
              <img src={design} alt="design.png" width={50} height={50} className='mx-auto'/>
              <h3 className='text-center font-semibold dark:text-gray-400 mb-2'>Front-end</h3>
              <div className='flex flex-wrap w-72 lg:w-80 justify-center gap-2 mb-4'>
                <div className='flex flex-col items-center'><img src={html} alt='html.png' className='w-6 lg:w-8'/><span className=' text-gray-900 dark:text-white rounded p-2 text-xs'>HTML5</span></div>
                <div className='flex flex-col items-center'><img src={css} alt='css.png' className='w-6 lg:w-8'/><span className=' text-gray-900 dark:text-white rounded p-2 text-xs'>CSS3</span></div>
                <div className='flex flex-col items-center'><img src={js} alt='js.png' className='w-6 lg:w-8'/><span className=' text-gray-900 dark:text-white rounded p-2 text-xs'>Js</span></div>
                <div className='flex flex-col items-center'><img src={typescript} alt='typescript.png' className='w-6 lg:w-8'/><span className=' text-gray-900 dark:text-white rounded p-2 text-xs'>Ts</span></div>
                <div className='flex flex-col items-center'><img src={react} alt='react.png' className='w-6 lg:w-8'/><span className=' text-gray-900 dark:text-white rounded p-2 text-xs'>React.js</span></div>
                <div className='flex flex-col items-center'><img src={redux} width={50} height={0} alt="redux.png" className='w-6 lg:w-8'/><span className=' text-gray-900 dark:text-white rounded p-2 text-xs'>Redux</span></div>
                <div className='flex flex-col items-center'><img src={nextjs} alt='nextjs.png' className='w-6 lg:w-8'/><span className=' text-gray-900 dark:text-white rounded p-2 text-xs'>Next.js</span></div>
                <div className='flex flex-col items-center'><img src={tailwind} alt="tailwind.png" className='w-6 lg:w-8'/><span className=' text-gray-900 dark:text-white rounded p-2 text-xs'>Tailwind</span></div>
                <div className='flex flex-col items-center'><img src={sass} alt="sass.png" className='w-6 lg:w-8'/><span className=' text-gray-900 dark:text-white rounded p-2 text-xs'>SASS</span></div>
                {/* <div className='flex flex-col items-center'><img src={firebase} alt="firebase.png" className='w-6 lg:w-8'/><span className=' text-gray-900 dark:text-white rounded p-2 text-xs'>firebase</span></div> */}
              </div>
              </div>
              </div>

            <div className='flex-col outline outline-teal-800 text-center mb-5 rounded-full'>
                <div className='flex flex-col px-8 py-6 h-full justify-center mb-4'>
                  <img src={code} alt="design.png" width={50} height={50} className='mx-auto'/>
                  <h3 className='font-semibold dark:text-gray-400 mb-2'>Programming</h3>
                  <div className=' flex justify-center gap-2 mt-2'>
                  <div className='flex flex-col items-center'><img src={js} alt='js.png' className='w-6 lg:w-8'/><span className=' text-gray-900 dark:text-white rounded p-2 text-xs'>Js</span></div>
                  <div className='flex flex-col items-center'><img src={python} alt='js.png' className='w-6 lg:w-8'/><span className=' text-gray-900 dark:text-white rounded p-2 text-xs'>Python</span></div>
                  <div className='flex flex-col items-center'><img src={java} alt='js.png' className='w-6 lg:w-8'/><span className=' text-gray-900 dark:text-white rounded p-2 text-xs'>Java</span></div>
                </div>
              </div>
            </div>

            <div className='outline outline-teal-800 text-center mb-5 rounded-full '>
              <div className='flex flex-col lg:w-48 px-6 py-6 justify-center h-full'>
                <img src={consulting} alt="design.png" width={50} height={50} className='mx-auto'/>
                <h3 className='font-semibold dark:text-gray-400 mb-2'>UI/UX</h3>
                <div className=' flex justify-center gap-4 mt-2'>
                <div className='flex flex-col items-center'><img src={xd} alt='js.png' className='w-6 '/><span className=' text-gray-900 dark:text-white rounded p-2 text-xs'>Adobe XD</span></div>
                <div className='flex flex-col items-center'><img src={figma} alt='js.png' className='w-6 '/><span className=' text-gray-900 dark:text-white rounded p-2 text-xs'>Figma</span></div>
              </div>
              </div>
            </div>

          </div>
        </section>
        {/* About section ends */}

        {/* Experience section begins */}
        <section className='md:py-10 lg:py-10'>
          <h3 className=' text-teal-600 text-3xl py-1 font-bold md:text-4xl lg:text-4xl '>Experience</h3>
          <div className='text-center outline outline-teal-800 rounded-xl px-5 py-5 mx-auto my-10 md:flex gap-11 md:justify-evenly'>
            <div className=' mb-2'>
              <p className='md:text-xl text-black dark:text-white'>Project Engineer</p>
              <p className='md:text-lg font-semibold text-teal-500'>Wipro Limited</p>
              <p className='md:text-md py-2 font-light text-gray-600 dark:text-gray-400'>2021-present</p>
            </div>
            <div className=' mb-2'>
              <p className='md:text-xl text-black dark:text-white'>Market Research Intern</p>
              <p className='md:text-lg font-semibold text-teal-500'>Draup</p>
              <p className='md:text-md py-2 font-light text-gray-600 dark:text-gray-400'>2020-2021</p>
            </div>
          </div>
        </section>
        {/* Experience section ends */}

        <section>
          <div className=' container my-12'>
            <h3 className=' text-teal-600 text-3xl py-4 font-bold md:text-4xl lg:text-4xl '>Projects</h3>
            <p className=' text-md md:text-xl py-2 leading-8 dark:text-white'>
            Take a look at some of my <span className=' text-teal-500'>side projects</span>
            </p>
            <div className='lg:flex gap-2'>
            {/* Project 1 */}
            <div className=' text-center lg:w-1/2 p-5 rounded-lg cursor-pointer transition ease-in-out delay-50 hover:-translate-y-2 my-10 shadow-2xl  hover:bg-gray-300 dark:outline dark:outline-teal-800 dark:text-white dark:hover:bg-gray-300 dark:hover:shadow-gray-300'>
            <div className="rounded-lg container mx-auto w-52 h-36 background bg-[url('./Images/project-1.png')] bg-cover bg-center bg-no-repeat" />
              <h3 className=' text-2xl py-4 text-teal-500 font-semibold '>VIDEO-PLAYER</h3>
              <div className='flex flex-wrap justify-center gap-2 max-w-max text-gray-900'>
                  <p className='p-2 bg-gray-300 dark:bg-white rounded-md text-xs'>React.js</p>
                  <p className='p-2 bg-gray-300 dark:bg-white rounded-md text-xs'>React hooks</p>
                  <p className='p-2 bg-gray-300 dark:bg-white rounded-md text-xs'>contextAPI</p>
                  <p className='p-2 bg-gray-300 dark:bg-white rounded-md text-xs'>react-player</p>
                  <p className='p-2 bg-gray-300 dark:bg-white rounded-md text-xs'>tailwindcss</p>
                  <p className='p-2 bg-gray-300 dark:bg-white rounded-md text-xs'>MaterialUI</p>
                  <p className='p-2 bg-gray-300 dark:bg-white rounded-md text-xs'>screenful</p>
                  <p className='p-2 bg-gray-300 dark:bg-white rounded-md text-xs'>Vercel</p>
                </div>
              <div className=' flex justify-center gap-2 mt-10'>
              <button className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md text-sm hover:text-black '><a href='https://video-player-six-sigma.vercel.app/'>Live demo</a></button>
              <button className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md text-sm hover:text-black'><a href='https://github.com/jagz5246/video-player'>Source code</a></button>
              </div>
            </div>
            {/* Project 2 */}  
            <div className=' text-center lg:w-1/2 p-5 rounded-lg cursor-pointer transition ease-in-out delay-50 hover:-translate-y-2  my-10 shadow-2xl hover:bg-gray-300 dark:outline dark:outline-teal-800 dark:text-white dark:hover:bg-gray-300 dark:hover:shadow-gray-300'>
              <div className="rounded-lg mx-auto container w-52 h-36 background bg-[url('./Images/project-2.png')] bg-cover bg-center bg-no-repeat" />
              <h3 className='text-2xl text-teal-500 py-4 font-semibold'>SHOPPING APP</h3>
                <div className='flex flex-wrap justify-center gap-2 max-w-max text-gray-900'>
                  <p className='p-2 bg-gray-300 dark:bg-white rounded-md text-xs'>Next.js</p>
                  <p className='p-2 bg-gray-300 dark:bg-white rounded-md text-xs'>Typescript</p>
                  <p className='p-2 bg-gray-300 dark:bg-white rounded-md text-xs'>Tailwindcss</p>
                  <p className='p-2 bg-gray-300 dark:bg-white rounded-md text-xs'>Shadcn</p>
                  <p className='p-2 bg-gray-300 dark:bg-white rounded-md text-xs'>Sanity.io</p>
                  <p className='p-2 bg-gray-300 dark:bg-white rounded-md text-xs'>Stripe</p>
                  <p className='p-2 bg-gray-300 dark:bg-white rounded-md text-xs'>Vercel</p>
                </div>
              <div className=' flex justify-center gap-2 mt-10'>
              <button className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md text-sm hover:text-black '><a href='https://eternattire-ecomm.vercel.app/'>Live demo</a></button>
              <button className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md text-sm hover:text-black'><a href='https://github.com/jagz5246/eternattire-ecomm'>Source code</a></button>
              </div>
            </div>
            {/* Project 3 */}
            <div className=' text-center lg:w-1/2 p-5 rounded-lg cursor-pointer transition ease-in-out delay-50 hover:-translate-y-2  my-10 shadow-2xl hover:bg-gray-300 dark:outline dark:outline-teal-800 dark:text-white dark:hover:bg-gray-300 dark:hover:shadow-gray-300'>
            <div className="rounded-lg container mx-auto w-52 h-36 background bg-[url('./Images/project-3.png')] bg-cover bg-center bg-no-repeat" />
              <h3 className='text-2xl py-4 text-teal-500 font-semibold '>NETFLIX-CLONE</h3>
              <div className='flex flex-wrap justify-center gap-2 max-w-max text-gray-900'>
                  <p className='p-2 bg-gray-300 dark:bg-white rounded-md text-xs font-medium'>React.js</p>
                  <p className='p-2 bg-gray-300 dark:bg-white rounded-md text-xs font-medium'>Redux</p>
                  <p className='p-2 bg-gray-300 dark:bg-white rounded-md text-xs font-medium'>React hooks</p>
                  <p className='p-2 bg-gray-300 dark:bg-white rounded-md text-xs font-medium'>Firebase</p>
                  <p className='p-2 bg-gray-300 dark:bg-white rounded-md text-xs font-medium'>Firestore</p>
                  <p className='p-2 bg-gray-300 dark:bg-white rounded-md text-xs font-medium'>Stripe</p>
                  <p className='p-2 bg-gray-300 dark:bg-white rounded-md text-xs font-medium'>Github pages</p>
                </div>
            <div className=' flex justify-center gap-2 mt-10'>
              <button className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md text-sm hover:text-black '><a href='https://jagz5246.github.io/netflix-clone/'>Live demo</a></button>
              <button className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md text-sm hover:text-black'><a href='https://github.com/jagz5246/netflix-clone'>Source code</a></button>
              </div>
            </div>
          </div>           
          </div>
        </section>

        <section className='my-10'>
        <h3 className='text-teal-600 text-3xl py-1 font-bold md:text-4xl lg:text-4xl'>Hit me up!</h3>
         <div className=' w-full p-10 flex flex-col items-center md:flex md:flex-row lg:gap-10'>
          <div className='text-center'>
            <iframe src="https://lottie.host/embed/3fe1abaa-723f-4594-a02d-0a820f842d3a/iDwDBOtMmk.json"
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
                      className='w-48 bg-gradient-to-r from-cyan-500 to-teal-500 text-white transition duration-150 hover:text-black 
                      rounded px-4 py-2'>Submit
                      </button>
                    </form>

          </div>
          </div>
        </section>
        <footer className='mt-10 dark:bg-gray-900'>
          <p className='mt-10 text-center text-sm p-4 text-gray-600 dark:text-gray-300'>Developed by <span className=' text-teal-500'>Jagan G Mohan</span></p>
        </footer>
      </main>
     
    </div>
  )
}

export default App;
