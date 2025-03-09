import { motion } from "framer-motion";
import design from '../Images/design.png';
import code from '../Images/code.png';
import html from '../Icons/html.png';
import css from '../Icons/css.png';
import js from '../Icons/js.png';
import react from '../Icons/react.png';
import nextjs from '../Icons/nextjs.png';
import typescript from '../Icons/icons8-typescript-48.png';
import redux from '../Icons/icons8-redux-48.png';
import sass from '../Icons/icons8-sass-48.png';
import tailwind from '../Icons/icons8-tailwind-css-48.png';
import aws from '../Icons/aws.png';
import azure from '../Icons/azure.png';
import nodejs from '../Icons/nodejs.png';
import firebase from '../Icons/icons8-firebase-48.png';
import figma from '../Icons/figma.png';
import xd from '../Icons/xd.png';

const Skills = () => {
  return (
    <div className="py-10 px-5 text-white">
        <h3 className=' text-teal-600 text-xl py-1 font-semibold md:text-2xl lg:text-3xl mt-20'>Skills</h3>
      <div className="py-14 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className='flex flex-col lg:flex-row items-center bg-grey-300 justify-evenly my-10 gap-4'>
            <div className=' outline outline-gray-300 dark:outline-gray-800 text-center mb-5 rounded-full '>
              <div className='flex flex-col px-4 py-12 gap-2 w-full h-full justify-center '>
                <img src={design} alt="design.png" width={50} height={50} className='mx-auto'/>
                <h3 className='text-center font-semibold dark:text-gray-400 mb-2'>Frontend</h3>
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
                </div>
              </div>
            </div>

            <div className=' outline outline-gray-300 dark:outline-gray-800 text-center mb-5 rounded-full '>
              <div className='flex flex-col px-4 py-12 gap-2 w-full h-full justify-center '>
                <img src={design} alt="design.png" width={50} height={50} className='mx-auto'/>
                <h3 className='text-center font-semibold dark:text-gray-400 mb-2'>Tools</h3>
                <div className='flex flex-wrap w-72 lg:w-80 justify-center gap-2 mb-4'>
                  <div className='flex flex-col items-center'><img src={xd} alt='js.png' className='w-6 lg:w-8'/><span className=' text-gray-900 dark:text-white rounded p-2 text-xs'>Adobe XD</span></div>
                  <div className='flex flex-col items-center'><img src={figma} alt='js.png' className='w-6 lg:w-8'/><span className=' text-gray-900 dark:text-white rounded p-2 text-xs'>Figma</span></div>
                  <div className='flex flex-col items-center'><img src={aws} alt='js.png' className='w-6 lg:w-8'/><span className=' text-gray-900 dark:text-white rounded p-2 text-xs'>AWS</span></div>
                  <div className='flex flex-col items-center'><img src={firebase} alt='js.png' className='w-6 lg:w-8'/><span className=' text-gray-900 dark:text-white rounded p-2 text-xs'>Firebase</span></div>
                  <div className='flex flex-col items-center'><img src={azure} alt='js.png' className='w-6 lg:w-8'/><span className=' text-gray-900 dark:text-white rounded p-2 text-xs'>Azure</span></div>
                </div>
              </div>
            </div>

            <div className='flex-col outline outline-gray-300 dark:outline-gray-800 text-center mb-5 rounded-full'>
                <div className='flex flex-col px-10 py-8 h-full justify-center mb-4'>
                  <img src={code} alt="design.png" width={50} height={50} className='mx-auto'/>
                  <h3 className='font-semibold dark:text-gray-400 mb-2'>Backend</h3>
                  <div className=' flex justify-center gap-2 mt-2'>
                  <div className='flex flex-col items-center'><img src={js} alt='js.png' className='w-6 lg:w-8'/><span className=' text-gray-900 dark:text-white rounded p-2 text-xs'>Js</span></div>
                  <div className='flex flex-col items-center'><img src={nodejs} alt='js.png' className='w-6 lg:w-8'/><span className=' text-gray-900 dark:text-white rounded p-2 text-xs'>NodeJS</span></div>
                  <div className='flex flex-col items-center'><img src={aws} alt='js.png' className='w-6 lg:w-8'/><span className=' text-gray-900 dark:text-white rounded p-2 text-xs'>AWS</span></div>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
