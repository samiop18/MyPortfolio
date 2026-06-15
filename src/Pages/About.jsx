import AboutBgm from "../Components/AboutBgm"
import Profile from "../Components/Profile"
const About = () => {
  return (
    <div id="about" className="relative h-screen w-full flex items-center justify-center">
      <AboutBgm />
      <div  className="h-3/4 w-9/10 z-30 mt-30 m-auto flex lg:flex-row flex-col lg:gap-10 justify-center items-center">
          <div style={{ boxShadow:"0px 4px 24px #1d2fb5"}} className="hidden lg:flex h-full w-6/10 "></div>
          <Profile />
      </div>

    </div>
  )
}

export default About

