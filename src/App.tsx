// import { useState } from 'react'
// import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'
import {Header} from './components/header'
import {Home} from './pages/homePage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className=' font-Montserrat'>
    <Header/ >
    <div className="mt-32">
    <Home />
    
    </div>
    </div>
    </>
    )
}

export default App
