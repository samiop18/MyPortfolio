import AboutBgm from "../Components/AboutBgm"
import Profile from "../Components/Profile"
const About = () => {

  return (
    <div id="about" className="relative h-screen w-full overflow-hidden flex items-center justify-center cursor-pointer">
      <AboutBgm />
      <div className="h-3/4 w-[90%] z-30 mt-20 mx-auto flex lg:flex-row flex-col lg:gap-10 justify-center items-center">
          <div style={{ boxShadow: "0 4px 24px #fc0384" }} className="hidden lg:flex items-center justify-center flex-col h-full w-[60%] gap-8 ">
    
            <div style={{ boxShadow: "0 4px 24px #fc0384" }} className="h-1/2 w-[90%] rounded-2xl bg-black/40 backdrop-blur-lg flex justify-center flex-col px-10 py-6 border-2 border-pink-600 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-102">
              <h1 className="text-center text-white font-extrabold text-3xl">MY <span className="text-pink-600">EDUCATION</span></h1>
              <h1 className="mt-10 text-gray-200 text-start font-bold text-lg">Bachelor of Technology in <span className="text-pink-600">Computer Science</span> and <span className="text-pink-600">Engineering</span> (2024 – 2028)</h1>
              <h2 className="text-gray-300 text-start font-semibold text-md">Veer Surendra Sai University of Technology (VSSUT),Burla</h2>
              <ul style={{ boxShadow: "0 4px 24px #fc0384" }} className="list-disc text-gray-400 text-sm m-auto ml-7 bg-radial from-gray-900 to-black py-2 px-8 rounded-xl transition-all duration-300 border-2 border-transparent ease-in-out hover:translate-x-1.5 hover:-translate-y-1 hover:scale-101 hover:border-pink-900">
                <li><span className="text-pink-500">Academics </span>: Maintained a 9.26 CGPA across core DSA and DBMS subjects.</li>
                <li><span className="text-pink-500">Projects </span>: Collaborated in teams to build and optimize full-stack applications.</li>
              </ul>
            </div>
            <div className="h-1/3 w-[90%] flex gap-5">
              <div style={{ boxShadow: "0 4px 24px #fc0384" }} className="h-full w-1/2 rounded-2xl bg-black/40 backdrop-blur-lg border-2 border-pink-600 flex flex-col justify-center px-5 pt-5 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-102">
                <h1 className="text-gray-200 text-center font-bold text-lg">My <span className="text-pink-600"> Experience</span></h1>
                <ul className="list-disc text-gray-400 text-sm m-auto mt-2 ml-6">
                  <li>MERN Stack Intern: Engineered real-time web architectures, optimizing video-conferencing and crypto-tracking systems at <a href="https://codectechnologies.in/" className="text-pink-500 underline">Codec Technologies</a> for seamless performance</li>
                  
                </ul>
              </div>
              <div id="my-home" style={{ boxShadow: "0 4px 24px #fc0384" }} className="relative h-full w-1/2 rounded-2xl bg-black/40 backdrop-blur-lg border-2 border-pink-600 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d601.9171613375779!2d85.81187862446188!3d20.2797711680947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1781597152017!5m2!1sen!2sin"
                  className="h-full w-full transition-all duration-300 ease-in-out hover:scale-150"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>
                
              </div>
            </div>
          </div>
          <Profile />
      </div>

    </div>
  )
}

export default About

