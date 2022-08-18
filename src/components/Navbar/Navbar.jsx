import React, {useState} from 'react';
import { HiOutlineMenu,  HiXCircle} from 'react-icons/hi';

import { motion } from 'framer-motion';

import './Navbar.scss';

import { images } from '../../constants';


// import ends // 

const Navbar = () => {
   const [toggle, setToggle] = useState(false)


  return (
     <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <h1>MOHD AMAN</h1>
        {/* <img src={images.logo} alt="logo" /> */}
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about','contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}</ul>

        <div className='app__navbar-manu'>
            < HiOutlineMenu onClick={()=> setToggle(true)}/>

            {toggle && (
              <motion.div
                whileInView={{ x:[300,0]}}
                transition={{ duration:0.85, ease: 'easeOut'}}
                >
                  < HiXCircle onClick={()=>setToggle(false)} />
                  <ul>
                  {['home', 'about', 'contact'].map((item) => (
          <li key={item}>
             
            <a href={`#${item}`} onClick={()=>setToggle(false)}>{item}</a>
          </li>
           
        ))}
        </ul>
              </motion.div>
              )}
        </div>

     </nav>
  )
}

export default Navbar