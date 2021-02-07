import React from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const HowMoja = {
  hidden: {
    opacity:0,
    x: '100vw'
  },
  visible:{
    opacity:1,
    x:5,
    transition: {
      type:'spring',
      delay: 0.5
    }
  }
}
const NButton = {
  hidden: {
    x:'-100vw',
 
  },
  visible: {
    x:0,
    transition: {
      type: "spring",
      stiffness:100,
     
    }
  
  },
  hover:{
   
      duration: 0.3,
      yoyo: Infinity 
 
  }

}






const Base = ({ addBase, pizza }) => {
    const type = ['Human Bones', 'Rat Bones', 'Jellyfish Bones', 'Ocelot Bones']
    return (
     <motion.div className="base container"
      variants={HowMoja}
      initial="hidden"
      animate="visible"
     >

    
          <h3>Step 1: Choose your base</h3>
          <ul>
            {
              type.map(base => {
                let spanClass = pizza.base === base ? 'active' : '';
                return (
                  <motion.li 
                  transition={{ type: "spring", stiffness:300 }}
                  whileHover={{scale:1.3,originX:0, textShadow: "0px 0px 8px rgb(255,255,255)", color:'#f8e112'}}
                  key={base} onClick={ ()=> addBase(Base)}>
                    <span className={spanClass}>{base}</span>
                  </motion.li>
                )
              })
            }
          </ul>

          {
            pizza.base  && (
              <motion.div className="next"
              variants={NButton}
            
              >
                <Link to="/toppings">
                  <motion.button
                  initial={{
                    rotate: 180,
                    textShadow: "0px 0px 8px rgb(255,255,255)",
                    boxShadow: "0px 0px 8px red",
                  }}
                  whileHover={{
                   
                    rotate: 0,
                    textShadow: "6px 5px 8px red",
                    boxShadow: "0px 0px 8px white",
                  }}
                  >Next</motion.button>
                </Link>
              </motion.div>
            )
          }

     </motion.div>
          // {pizza.base && (
          //   <motion.div className="next"
          //     variants={nextVariants}
          //   >
          //     <Link to="/toppings">
          //       <motion.button
          //         variants={buttonVariants}
          //         whileHover='hover'
          //       >
          //         Next</motion.button>
          //     </Link>
          //   </motion.div>
          // )}
    
      
      )
};

export default Base;