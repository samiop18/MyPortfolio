import LandingPage from "./Pages/LandingPage"
import About from "./Pages/About"
import Navbar from "./Pages/Navbar"
import Skills from "./Pages/Skills"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
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
