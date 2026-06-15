import LandingPage from "./Components/LandingPage"
import About from "./Components/About"
import Navbar from "./Components/Navbar"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"

import Contact from "./Components/Contact"
const App = () => {
  
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Navbar  />
      <LandingPage />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
