
import './App.css'
import { motion } from "motion/react"

function App() {

  return (
    <>
       <motion.div
            style={box}
            animate={{ rotate: 360 }}
            transition={{ duration: 1 }}
        />
       
    </>
  )
}

export default App
