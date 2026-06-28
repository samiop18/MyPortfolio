import LandingPage from "./Pages/LandingPage"
import About from "./Pages/About"
import Navbar from "./Pages/Navbar"
import Skills from "./Pages/Skills"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
import AboutBgm from "./Components/AboutBgm"
const App = () => {
  
  return (
    <div className="z-30 flex w-full flex-col items-center justify-center">
      <Navbar  />
      <LandingPage />
      <AboutBgm />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      
    </div>
  )
}

export default App
