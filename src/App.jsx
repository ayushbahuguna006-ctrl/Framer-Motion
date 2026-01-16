import React from 'react'
import { motion } from "motion/react"
import "./App.css"


function App() {
  return (
    <div >
     <motion.div whileHover={{backgroundColor:"green"}}  className='bg-red-500 w-[20vh] m-2 h-[20vh]' initial={{x:0,y:0}}  whileTap={{scale:0.5}}>
             


     </motion.div>
    </div>
  )
}

export default App
