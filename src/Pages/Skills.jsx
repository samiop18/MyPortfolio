import SkillsBG from "../Components/SkillsBG"
import SkillsBar from "../Components/SkillsBar";
import { useState,useEffect,useRef } from "react"
const Skills = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.5
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative h-screen w-full bg-black overflow-hidden items-center flex flex-col justify-center"
    >
      <SkillsBG />
      <h1 className="z-30 mt-30 -mb-20 text-4xl text-center text-white font-extrabold">SKILLS - <span className="text-orange-500">What I can do ?</span></h1>
      <div className="z-30 h-[90%] w-[95%] flex lg:flex-row flex-col justify-center items-center gap-7 m-auto mt-20">
        <div className="h-[80%] w-[45%] rounded-2xl flex lg:flex-col flex-row justify-center items-center gap-5">
          <div style={{boxShadow:"0 4px 24px #e06f12"}} className="h-1/2 w-full flex bg-black flex-col justify-center items-center px-4 py-3 rounded-2xl border-2 transition-all duration-200 ease hover:scale-105">
            <h1 className="text-center text-white font-bold text-2xl">Frontend <span className="text-orange-500">Development</span></h1>
            <div className="w-full h-[37.5%] border-2 mt-3 flex flex-row items-center justify-center gap-5">
              <SkillsBar language="HTML5" percentage={97} isIntersecting={hasAnimated}/>
              <SkillsBar language="CSS3" percentage={90} isIntersecting={hasAnimated}/>
              
            </div>
            <div className="w-full h-[37.5%] mt-3 flex flex-row items-center justify-center gap-5">
              <SkillsBar language="JavaScript (ES6+)" percentage={87} isIntersecting={hasAnimated}/>
              <SkillsBar language="React.js" percentage={82} isIntersecting={hasAnimated}/>
            </div>
          </div>
          <div style={{boxShadow:"0 4px 24px #e06f12"}} className="h-1/2 w-full flex flex-col bg-black justify-center items-center px-4 py-3 rounded-2xl border-2 transition-all duration-200 ease hover:scale-105">
            <h1 className="text-center text-white font-bold text-2xl">Backend & <span className="text-orange-500">Frameworks</span></h1>
            <div className="w-full h-[37.5%] mt-3 flex flex-row items-center justify-center gap-5">
              <SkillsBar language="Node.js" percentage={85} isIntersecting={hasAnimated}/>
              <SkillsBar language="Express.js" percentage={79} isIntersecting={hasAnimated}/>
              
            </div>
            <div className="w-full h-[37.5%] mt-3 flex flex-row items-center justify-center gap-5">
              <SkillsBar language="Fast API/Python" percentage={67} isIntersecting={hasAnimated}/>
              <SkillsBar language="C++/OOPS" percentage={98} isIntersecting={hasAnimated}/>
            </div>
          </div>
          
        </div>
        <div className="h-[80%] w-[45%] rounded-2xl border-2 border-orange-500"></div>
      </div>
     
      
    </section>
  );
};

export default Skills;
