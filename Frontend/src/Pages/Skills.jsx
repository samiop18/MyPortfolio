import SkillsBG from "../Components/SkillsBG"
import SkillsBar from "../Components/SkillsBar";
import { useState,useEffect,useRef } from "react"
import Chart from "../Components/Chart";
import { ArrowUpRight } from 'lucide-react';
import Topics from "../Components/Topics";
import LeetcodeProgress from "../Data/LeetcodeProgress";

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
      <h1 className="z-30 lg:mt-30 mt-20 lg:-mb-20 lg:text-4xl text-2xl text-center text-white font-extrabold">SKILLS - <span className="text-orange-500">What I can do ?</span></h1>
      <div className="z-30 h-[90%] w-[95%] flex lg:flex-row flex-col justify-center items-center lg:gap-7 gap-4 m-auto lg:mt-20 mt-5">
        <div className="lg:h-[80%] lg:w-[45%] h-9/10 w-9/10 rounded-2xl flex lg:flex-col flex-row justify-center items-center gap-5">
          <div className="lg:h-1/2 h-full lg:w-full border-2 border-orange-600 w-1/2 flex bg-black flex-col justify-center items-center px-4 py-3 rounded-2xl transition-all duration-200 ease-in-out hover:scale-105">
            <h1 className="text-center text-white font-bold lg:text-2xl">Frontend <span className="text-orange-500">Development</span></h1>
            <div className="w-full lg:h-[37.5%] h-1/2 border-2 lg:mt-3 flex lg:flex-row flex-col items-center justify-center gap-5">
              <SkillsBar language="HTML5" percentage={97} isIntersecting={hasAnimated}/>
              <SkillsBar language="CSS3" percentage={90} isIntersecting={hasAnimated}/>
              
            </div>
            <div className="w-full h-[37.5%] mt-3 flex lg:flex-row flex-col items-center justify-center gap-5">
              <SkillsBar language="JavaScript (ES6+)" percentage={87} isIntersecting={hasAnimated}/>
              <SkillsBar language="React.js" percentage={82} isIntersecting={hasAnimated}/>
            </div>
          </div>
          <div className="lg:h-1/2 h-full lg:w-full w-1/2 flex flex-col border-2 border-orange-600  bg-black justify-center items-center px-4 py-3 rounded-2xl transition-all duration-200 ease hover:scale-105">
            <h1 className="text-center text-white font-bold lg:text-2xl">Backend & <span className="text-orange-500">Frameworks</span></h1>
            <div className="w-full h-[37.5%] mt-3 flex lg:flex-row flex-col items-center justify-center gap-5">
              <SkillsBar language="Node.js" percentage={85} isIntersecting={hasAnimated}/>
              <SkillsBar language="Express.js" percentage={79} isIntersecting={hasAnimated}/>
              
            </div>
            <div className="w-full h-[37.5%] mt-3 flex lg:flex-row flex-col items-center justify-center gap-5">
              <SkillsBar language="Fast API/Python" percentage={67} isIntersecting={hasAnimated}/>
              <SkillsBar language="C++/OOPS" percentage={98} isIntersecting={hasAnimated}/>
            </div>
          </div>
          
        </div>
        <div className="lg:h-[80%] lg:w-[45%] h-1/2 w-full rounded-2xl flex flex-col items-center justify-center gap-5">
          <div className="rounded-2xl lg:h-1/2 h-9/10 border-2 border-orange-600  lg:w-full w-9/10 flex flex-col items-center justify-center bg-black transition-all duration-200 ease-in-out hover:scale-105 lg:py-1 py-2">
              <h1 className="text-center text-white font-bold lg:text-2xl text-lg">Competitive <span className="text-orange-500">Programming</span></h1>
              <div className="h-8/10 w-full flex-row flex items-center justify-center ">
                <Chart />
                <div className="h-full w-1/2 flex flex-col justify-center lg:gap-2 items-start">
                  <h1 className="lg:text-xl text-md flex items-center gap-1 text-gray-300 font-bold w-full">Leetcode <span className="text-orange-500"> Progress</span><a href='https://leetcode.com/u/iemcGXqwvo/' className="mt-0.5 ml-2 transition-all duration-200 ease-in-out hover:text-orange-500 active:scale-75"><ArrowUpRight strokeWidth={4}/></a></h1>
                  <ul>
                    <li className="w-full flex flex-row justify-between gap-3  text-gray-300 font-light text-start items-start lg:text-sm text-xs">easy <div className="h-4 w-4 rounded-sm bg-green-500 mt-1"></div><span>: {LeetcodeProgress.easy} questions</span></li>
                    <li className="w-full flex flex-row justify-between gap-3  text-gray-300 font-light text-start items-start lg:text-sm text-xs">medium <div className="h-4 w-4 rounded-sm bg-orange-500 mt-1"></div><span>: {LeetcodeProgress.medium} questions</span></li>
                    <li className="w-full flex flex-row justify-between gap-3  text-gray-300 font-light text-start items-center lg:text-sm text-xs">hard <div className="h-4 w-4 rounded-sm bg-red-500 mt-1"></div><span>: {LeetcodeProgress.hard} questions</span></li>
                    <li className="w-full flex flex-row justify-start gap-3  text-gray-300 font-light text-start items-center lg:text-sm text-xs">MAX STREAK <span className="text-orange-400 font-semibold">: {LeetcodeProgress.maxStreak} days</span></li>
                    <li className="w-full flex flex-row justify-start gap-3  text-gray-300 font-light text-start items-center lg:text-sm text-xs">Acceptance Rate <span className="text-orange-400 font-semibold">: 75.68%</span></li>
                  
                  </ul>
                </div> 
              </div>
          </div>
          <div className=" hidden rounded-2xl h-1/2 w-full border-2 border-orange-600  lg:flex flex-col items-center justify-center bg-black transition-all duration-200 ease-in-out hover:scale-105 gap-2">
            <h1 className="text-center text-white font-bold lg:text-2xl text-xl">Currently <span className="text-orange-500">Exploring</span></h1>
            <div className="h-13/20 w-7/10 rounded-2xl flex flex-wrap items-center justify-center gap-3">
              <Topics topic='Next.js' />
              <Topics topic='GenAI' />
              <Topics topic='Fast API' />
              <Topics topic='Django' />
              <Topics topic='AIML' />
              
            </div>
          </div>


        </div>
      </div>
     
      
    </section>
  );
};

export default Skills;
