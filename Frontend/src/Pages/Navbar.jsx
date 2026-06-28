
import { useState, useEffect } from "react";
import { Menu , X } from 'lucide-react';
import { HashLink } from "react-router-hash-link";




const Navbar = () => {
  
  
  const [isClicked, setisClicked] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      // Toggle state based on scroll position
      if (window.scrollY > 360) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const triggerSideBar = ()=>{
    setisClicked(!isClicked)
  }

 
  
  return (
    
    <div
      style={{boxShadow : `0 4px 30px ${isScrolled ? "#fc0384":"grey"}`}}
      className={`cursor-pointer fixed left-0 right-0 top-0 lg:top-5 w-full ${isScrolled ? 'lg:w-[70%]' : 'lg:w-[50%]'} h-16 lg:h-15 pl-5 lg:px-10 py-2 rounded-none lg:rounded-4xl bg-white/10 backdrop-blur-lg z-49 mx-auto flex items-center ${isScrolled ? 'justify-between' : 'lg:justify-center justify-between'} transition-all duration-1200 ease-in-out`}
    >
      <div className={`transition-all duration-700 ease-in-out overflow-hidden flex items-center ${isScrolled ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0'}`}>
        <a href="/">
          <h1 className="cursor-pointer whitespace-nowrap items-center flex justify-center font-extrabold text-xl sm:text-2xl text-gray-300">
            SAMI
            <span className="text-pink-600">TESH</span>
          </h1>
        </a>
      </div>
      <button 
        onClick={triggerSideBar}
        className="absolute z-50 right-5 h-10 mr-3 w-10 p-1 lg:hidden flex items-center justify-center text-center transition-all duration-400 ease-in-out hover:scale-110 active:scale-95" style={{color : '#fc0384',border : '#fc0384'}}>
            {isClicked ? <X strokeWidth={4}/> : <Menu strokeWidth={4} />}
        </button>
      <div className={`lg:h-full lg:relative absolute lg:w-fit flex lg:flex-row lg:gap-10 lg:shadow-none justify-center lg:px-0 lg:py-2.5 px-10 h-screen w-7/10 shadow-pink-700 bg-radial from-pink-950 to-gray-950 lg:from-transparent lg:to-transparent shadow-xl right-0 flex-col top-0 gap-10 transition-all duration-800 ease-in-out lg:translate-x-0 ${isClicked ? "translate-x-0":"translate-x-200"}`}>
        {[
          { to: '/#', text: 'HOME' },
          { to: '/#about', text: 'ABOUT' },
          { to: '/#skills', text: 'SKILLS' },
          { to: '/#projects', text: 'PROJECTS' },
          { to: '/#contact', text: 'CONTACT' },
        ].map((link) => (
          <div
            key={link.text}
            style={{ border : '0 4px 24px #fc0384'}}
            className="pointer:cursor! lg:border-none! lg:shadow-none! lg:bg-transparent1 lg:backdrop-blur-none! bg-white/10 backdrop-blur-md rounded-2xl w-full lg:w-auto overflow-hidden lg:px-4 lg:bg-transparent"
          >
            <HashLink 
              smooth 
              to={link.to} 
              onClick={() => setisClicked(false)} 
              className="pointer:cursor! block w-full text-center lg:text-left text-gray-300 text-lg font-semibold transition-all duration-100 ease-in-out hover:text-pink-800 active:scale-90 py-3 lg:py-0 hover:shadow-2xl"
            >
              <span className="cursor-pointer">{link.text}</span>
            </HashLink>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Navbar;
