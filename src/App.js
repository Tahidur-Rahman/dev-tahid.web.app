import React from 'react'
import './App'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skill from './Components/Skill'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Social from './Components/Social'


function App() {
    return (
        <div className="app">
          <Navbar />
          <Home />
          <Social />
          <About />
          <Skill />
          <Project />
          <Contact />
        </div>
    )
}

export default App
