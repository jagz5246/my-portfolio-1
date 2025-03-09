import { motion } from "framer-motion";
import DT from '../Icons/DT_logo.png';
import wipro from '../Icons/wipro-logo.png';
import draup from '../Icons/draup-logo.png';

const experiences = [
  {
    year: "Apr 2024 — Present",
    company: "Data Template Infotech Pvt Ltd",
    role: "Software Engineer",
    img: DT,
  },
  {
    year: "July 2021 — Mar 2024",
    company: "Wipro",
    role: "Frontend Developer",
    img: wipro,
  },
  {
    year: "Oct 2020 — Jan 2021",
    company: "Draup",
    role: "Market Research Intern",
    img: draup,
  },
];

const Experience = () => {
  return (
    <div className="py-10 px-5 text-white">
      <h2 className="text-teal-600 text-xl pt-2 pb-4 font-semibold md:text-2xl lg:text-3xl">Experience</h2>
      <div className="max-w-3xl mx-auto py-14 space-y-4">
        {experiences.map((exp, index) => {
            const opacity = 70 - index * 25;
            return (
          <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className={`flex justify-between items-center p-4 rounded-lg shadow-lg dark:bg-gray-700`}
          style={{ backgroundColor: `rgba(31, 41, 55, ${opacity / 100})` }}
        >
            <span className="text-gray-400">{exp.year}</span>
            <div className="text-right">
              <img src={exp.img} alt="company-logo" className="w-12 h-10 inline-block" />
              <h3 className="md:text-md text-teal-500">{exp.company}</h3>
              <p className="md:text-sm py-2 font-light text-gray-600 dark:text-gray-400">{exp.role}</p>
            </div>
          </motion.div>
        )
    })}
      </div>
    </div>
  );
};

export default Experience;
