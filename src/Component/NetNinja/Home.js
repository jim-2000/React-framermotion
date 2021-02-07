import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



const buttonVariants={
 
  hover:{
    scale:[1,1.1,1.1,1,1.1,1.2,1],
    textShadow: '5px 5px 8px blue',
    boxShadow: '0px 0px 8px rgb(255,255,255)'
  }
}

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
};

const Home = () => {
  return (
   
    <motion.div className="home container"
    initial={{ opacity:0}}
    animate={{ opacity:1}}
    transition={{ delay: 1.5, duration: 1.5}}
    >
      
            <motion.h2 
            animate={{}}
            >
              Welcome to Pizza Joint
            </motion.h2>
          <Link to="/base">
          
            <motion.button
            variants={buttonVariants}
            animate="visible"
            whileHover="hover"
            >
            Create Your Pizza
            </motion.button>
          </Link>

    </motion.div>

  )
}

export default Home;