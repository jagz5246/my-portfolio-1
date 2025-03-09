import React from 'react';
import { motion } from "framer-motion";
import rx from '../Images/rx-screen.png';
import zamtel from '../Images/zamtel-screen.png';
import kimaru from '../Images/kimaru-screen.png';   

const Projects = () => {
    const projects = [
        {
            client: 'Reflexion Medical',
            imgURL: rx,
            title: 'Deidentifier',
            description: 'Built an Electron application by formulating robust algorithms to remove or obfuscate Protected Health Information (PHI), significantly reducing data leakage risks by 95%.',
            techStack: ['ElectronJS', 'JavaScript', 'Mermaid.js']
        },
        {
            client: 'Zamtel',
            imgURL: zamtel,
            title: 'E-Tuition',
            description: 'Developed a secure payment module using Harakapay and utilized AWS services to architect scalable backend functionalities, maintaining platform uptime at 99.9%.',
            techStack: ['ReactJS', 'ReduxJS', 'NodeJS', 'AWS Amplify', 'AWS SES', 'AWS DynamoDB']   
        },
        {
            client: 'Kimaru.ai',
            imgURL: kimaru,
            title: 'CDD Builder',
            description: 'Built a Causal Decision Diagram (CDD) Generator leveraging React.js and React Flow, delivering a fully customizable UI, driving a 40% increase in adoption among business analysts and boosting workflow automation efficiency by 50%.',
            techStack: ['ReactJS', 'Redux', 'React-flow', 'JSON']
        }
    ]
  return (
    <div>
      <h3 className=' text-teal-600 text-xl font-semibold md:text-2xl lg:text-3xl '>Project Experience</h3>
          <div className=' container my-12'>
            <div className='lg:flex gap-4'>
            {projects.map((project, index) => {
                console.log("project", project.imgURL)
                return (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                    viewport={{ once: false, amount: 0.3 }}
                    // initial={{ opacity: 0, y: 30 }}
                    // whileInView={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.5, delay: index * 0.3 }}
                    // viewport={{ once: true, amount: 0.2 }}
                    className=' text-center lg:w-1/2 p-5 rounded-lg cursor-pointer transition ease-in-out delay-50 hover:-translate-y-2 my-10 shadow  outline outline-gray-200 dark:outline-gray-800 dark:text-whitedark:hover:shadow-gray-100 hover:outline-none'
                >
                    <div
                    className="rounded-lg container mx-auto w-52 h-36 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage:  `url(${project.imgURL})` }}
                    ></div>
                    <h3 className=' text-lg font-bold lg:text-xl py-2 text-teal-500  '>{project.client}</h3>
                    <h4 className=' font-bold py-2 text-teal-500  '>{project.title}</h4>
                    <div className='flex flex-wrap justify-center gap-2 max-w-max text-gray-900'>
                        <p className='text-left p-2 dark:text-gray-100 rounded-md text-xs dark:hover:text-black-500'>Built an Electron application by formulating robust algorithms to remove or obfuscate Protected Health
                        Information (PHI), significantly reducing data leakage risks by 95%.</p>
                        {project.techStack.map((tech, idx) => {
                            return <p key={idx} className='p-2 bg-gray-300 dark:bg-gray-900 dark:text-gray-100 rounded-md text-xs'>{tech}</p>
                        }
                        )}                        
                    </div>
                </motion.div>
                )
            })}            
          </div>           
          </div>
    </div>
  )
}

export default Projects
