import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect,useState } from "react";
import { Menu , X } from 'lucide-react';
import { HashLink } from "react-router-hash-link";




const Navbar = () => {
  const COLORS = ["#750b27", "#a81e51", "#1d2fb5", "#1e750b", "#e01414"];
  const color = useMotionValue(COLORS[0]);
  const border = useMotionTemplate`1px solid ${color}`
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  const [isClicked, setisClicked] = useState(false)
  const triggerSideBar = ()=>{
    setisClicked(!isClicked)
  }

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  });
  
  return (
    
    <motion.div
      style={{boxShadow}}
      className="fixed top-0 lg:top-5 w-full lg:w-[70%] h-16 lg:h-15 pl-5 lg:px-10 py-2 rounded-none lg:rounded-4xl bg-white/10 backdrop-blur-lg z-49 mx-auto flex items-center justify-between"
    >
      <div>
        <a href="#">
          <h1 className="items-center flex justify-center font-extrabold text-xl sm:text-2xl text-gray-300">
            SAMI
            <motion.span style={{color}}>TESH</motion.span>
          </h1>
        </a>
      </div>
      <motion.button 
        onClick={triggerSideBar}
        className="absolute z-50 right-5 h-10 mr-3 w-10 p-1 lg:hidden flex items-center justify-center text-center transition-all duration-400 ease-in-out hover:scale-110 active:scale-95" style={{color,border,}}>
            {isClicked ? <X strokeWidth={4}/> : <Menu strokeWidth={4} />}
        </motion.button>
      <div className={`lg:h-full lg:relative absolute lg:w-fit flex lg:flex-row lg:gap-10 lg:shadow-none  justify-center lg:px-0 lg:py-2.5 px-10  h-screen w-7/10 shadow-pink-700 bg-radial from-pink-950 to-gray-950 lg:from-transparent lg:to-transparent shadow-xl right-0 flex-col top-0 gap-15 transition-all duration-800 ease-in-out lg:translate-x-0 ${isClicked ? "translate-x-0":"translate-x-200"}`}>
        <HashLink smooth to='/#home' className="bg-red text-gray-300 font-lg font-bold transition-all duration-100 ease-in-out hover:text-pink-800 active:scale-90">HOME</HashLink>
        <HashLink smooth to='/#about' className="text-gray-300 font-lg font-bold transition-all duration-100 ease-in-out hover:text-pink-800 active:scale-90">ABOUT</HashLink>
        <HashLink smooth to='/#skills' className="text-gray-300 font-lg font-bold transition-all duration-100 ease-in-out hover:text-pink-800 active:scale-90">SKILLS</HashLink>
        <HashLink smooth to='/#projects' className="text-gray-300 font-lg font-bold transition-all duration-100 ease-in-out hover:text-pink-800 active:scale-90">PROJECTS</HashLink>
        <HashLink smooth to='/#contact' className="text-gray-300 font-lg font-bold transition-all duration-100 ease-in-out hover:text-pink-800 active:scale-90">CONTACT</HashLink>
      </div>
    </motion.div>
    
  );
};

export default Navbar;
