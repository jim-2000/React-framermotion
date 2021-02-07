import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

const modalVariants = {
    hidden: {
        y: '-100vh',
        opacity: 0
    },
    visible: {
        y: '200px',
        opacity: 1,
        transition: { delay: 0.5 }
    }
}

const Modal = ({ showModal, setShowModal }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div className='backdrop'
                    variants={backdropVariants}
                    initial='hidden'
                    animate='visible'
                    exit='hidden'
                >
                    <motion.div className='modal'
                        variants={modalVariants}
                    >
                        <p>Would you like more bones? </p>
                        <Link to='/'>
                            <button onClick={() => setShowModal(false)}>More Bones! MORE BONES!!</button>
                        </Link>
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal