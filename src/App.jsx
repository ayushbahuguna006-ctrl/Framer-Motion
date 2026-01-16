import React from 'react'
import { motion } from "motion/react"
import "./App.css"


function App() {
  return (
    <div >
     <motion.div whileHover={{backgroundColor:"green"}} className='bg-red-500 w-[20vh] m-2 h-[20vh]' initial={{x:0,y:0}} animate={{x:[0,1000,1000,0,0],y:[0,0,400,400,0]}} transition={{duration:4,delay:1,repeat:1,ease:"anticipate"}}>
             


     </motion.div>
    </div>
  )
}

export default App
