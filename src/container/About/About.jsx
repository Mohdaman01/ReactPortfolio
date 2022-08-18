import React,{ useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import {images} from '../../constants'

import './About.scss';

const abouts = [
  {title:"Full Stack Web Development " , description:"I am a good Web developer", imgUrl:images.about01},
  {title:"Frontend Development" , description:"I really like to work on Frontend", imgUrl:images.about02},
  {title:"Backend Development" , description:"I am great at Backend", imgUrl:images.about03},
  {title:"MERN Stack" , description:"I am a  a proper MERN Stack Developer", imgUrl:images.about04}
]


const About = () => {
  return (
     <>
     <h2 className="head-text">I Know That <span>Good Development</span>
      <br />
      means <span>Good Business</span>
     </h2>

     <div className='app__profiles'>
     {abouts.map((about,index)=>(
      <motion.div
      whileInView={{opacity:1}}
      whileHover={{scale:1.1}}
      transition={{duration:0.5, type:'tween'}}
      className='app__profile-item'
      key={about.title+ index}
      >
        <img src={about.imgUrl} alt={about.title}/>
        <h2 className='bold-text' style={{margintop:20}}>{about.title}</h2>
        <p className='p-text' style={{margintop:10}}>{about.description}</p>
      </motion.div>
     ))}
     
     </div>
     </>
  )
}

export default About