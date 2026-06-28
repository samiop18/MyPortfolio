import ProjectsBG from "../Components/ProjectsBG";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import CardBG from "../Components/CardBG";
import { MoveUpRight } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon } from "@hugeicons/core-free-icons";
import { useState, useEffect, useRef } from "react";
import projectsInfo from "../Data/projectsInfo";
const Projects = () => {
  const l = projectsInfo.length;
  const [idx, setidx] = useState(0);
  const slideInterval = useRef(null);

  const goRight = () => {
    setidx((prevIdx) => (prevIdx + 1) % l);
  };

  const goLeft = () => {
    setidx((prevIdx) => (prevIdx - 1 + l) % l);
  };

  const resetAutoSliding = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    slideInterval.current = window.setInterval(goRight, 3000);
  };

  useEffect(() => {
    resetAutoSliding();

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="projects"
      className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center cursor-pointer gap-3"
    >
      <ProjectsBG />
      <h1 className="mt-15 z-30 lg:text-5xl text-2xl text-center text-white font-extrabold">
        MY <span className="text-pink-700">PROJECTS</span>
      </h1>
      <div className="z-30 h-3/4 w-full lg:w-9/10 rounded-4xl flex justify-center lg:gap-10 gap-2 items-center text-pink-600 shadow-1xl shadow-pink-800">
        <button
          onClick={() => {
            resetAutoSliding();
            goLeft();
          }}
          style={{ boxShadow: "0 4px 24px #fc0384" }}
          className="h-10 w-10 bg-black p-2 border-2 border-black rounded-full flex justify-center items-center transition-all duration-200 ease-in-out hover:scale-120 active:scale-95 hover:border-pink-600"
        >
          <ChevronLeft strokeWidth={4} />
        </button>
        <div className="relative h-17/20 lg:w-270 w-65 rounded-4xl border-2 border-pink-950">
          <CardBG />
          <div
            
            className="z-40 absolute lg:w-270 w-65 overflow-hidden h-full rounded-4xl bg-black/10 backdrop-blur-xl flex "
          >
            <div 
              style={{transform:`translateX(${-idx * (isMobile ? 260:1080)}px)`}}
              className={`z-41 h-full flex w-${(isMobile ? 65:270) * projectsInfo.length}transition-all lg:duration-1000 duration-500 ease-in-out`}>
              {projectsInfo.map((e) => {
                return (
                  <div className="h-full lg:w-270 w-65 bg-transparent flex flex-row shrink-0 items-center justify-center">
                    <div className="h-full lg:w-1/2 w-full flex flex-col items-center justify-center gap-4 p-3">
                      <h1 className="w-9/10 uppercase text-center font-bold border-2 px-5 py-2 rounded-lg text-pink-600 bg-black/40 backdrop-blur-3xl">
                        {e.title}
                      </h1>
                      <div className="flex overflow-hidden lg:h-2/4 lg:w-9/10 h-1/2 w-8/10 rounded-2xl">
                        <img
                          src={e.imgUrl}
                          className="h-full w-full rounded-2xl object-cover transition-all duration-300 ease-in-out hover:scale-120"
                        ></img>
                      </div>

                      <div className="w-full  h-1/8 flex flex-row items-center justify-center gap-4">
                        <a
                          href={e.sourceCode}
                          className="lg:w-1/3 w-1/2 h-4/5 bg-black text-center lg:text-md text-xs flex text-white items-center justify-center rounded-xl transition-all duration-300 ease-in-out border-2 border-black hover:bg-pink-700 hover:scale-108 hover:border-black gap-2"
                        >
                          Source Code{" "}
                          <HugeiconsIcon icon={GithubIcon} size={20} />
                        </a>
                        <a
                          href={e.liveUrl}
                          className="lg:w-1/3 w-1/2 h-4/5 bg-pink-700 text-center lg:text-md text-xs flex text-white items-center border-2 border-transparent justify-center rounded-xl transition-all duration-300 ease-in-out hover:bg-transparent hover:border-pink-600 hover:text-white hover:scale-108 gap-2"
                        >
                          Live Link <MoveUpRight size={15} />
                        </a>
                      </div>
                    </div>
                    <div className="h-full w-1/2 hidden lg:flex flex-col justify-start items-start pl-10 pr-5 py-7 gap-3">
                      <button className="h-1/10 py-3 px-5 border-2 border-pink-700 flex items-center justify-center rounded-lg">
                        KEY FEATURES
                      </button>
                      <ul className="list-disc text-sm">
                        {
                          e.keyFeatures.map((e)=>{
                            return <li className="text-pink-600 font-semibold">{e.pointHeader}<span className="font-medium text-gray-400">{e.point}</span></li>
                          })
                        }
                        
                      </ul>
                      <h1 className="text-gray-300 font-bold mt-3">Technology <span className="text-pink-600">Stack</span></h1>
                      <ul style={{ boxShadow: "0 4px 24px #b0174c" }} className="list-none flex flex-wrap items-center justify-center h-4/9 w-full gap-1 rounded-xl">
                        
                        {
                          e.techStack.map((i)=>{
                            return <li className="h-1/4 w-1/5 border-2 border-pink-600 flex items-center justify-center rounded-2xl text-center text-xs">{i}</li>
                          })
                        }
                        
                       
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            resetAutoSliding();
            goRight();
          }}
          style={{ boxShadow: "0 4px 24px #fc0384" }}
          className="h-10 w-10 p-2 bg-black border-2 border-black rounded-full flex justify-center items-center transition-all duration-200 ease-in-out hover:scale-120 active:scale-95 hover:border-pink-600"
        >
          <ChevronRight strokeWidth={4} />
        </button>
      </div>
    </section>
  );
};

export default Projects;
