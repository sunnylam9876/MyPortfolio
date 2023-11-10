/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// icons
//import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import {fadeIn} from "../variants";

// services
const services = [
  {
    name: "Programming Language",
    description:
      "HTML, CSS, Javascript, React.js, Node.js, Express.js, C++, C#, Java, Python",
    //link: "Learn more",
  },
  {
    name: "Programming Tools and Platforms",
    description:
      "Git, Github, Android Studio, Visual Studio Code",
    //link: "Learn more",
  },
  {
    name: "Database",
    description:
      "MySQL, MongoDB",
    //link: "Learn more",
  },
  {
    name: "Graphic Tools",
    description:
      "Photoshop, Figma",
    //link: "Learn more",
  }
];

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:mt-16">
          {/* text and images */}
          <motion.div 
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className="flex-1 lg:bg-skills lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6 ">Skills</h2>
            <h3 className="h3 mb-12 max-w-[455px]">
              Technical knowledge
            </h3>
            {/* <button className="btn btn-sm">See my work</button> */}
          </motion.div>
          {/* services */}
          <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          >
            {/* services list */}
            <div className="flex-1">
              {
                services.map((service, index) => {
                  // destructure data
                  const {name, description, link} = service;
                  return (
                    <div className="border-b border-white/20 h-[142px] mb-[36px] flex" key={index}>
                      <div className="max-w-[476px]">
                        <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-5">{name}</h4>
                        <p className="font-secondary leading-tight">{description}</p>
                      </div>
                      {/* <div className="flex  flex-col flex-1 items-end">
                        <a href="#" className="btn w-9 h-9 mb-[42px] flex justify-center items-center"> <BsArrowUpRight/> </a>
                        <a href="#" className="text-gradient text-sm">{link}</a>
                      </div> */}
                    </div>
                  )
                })
              }
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
