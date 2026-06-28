import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon ,LinkedinIcon, LeetcodeIcon} from "@hugeicons/core-free-icons";
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';



const MovingStars = ({ speed = 0.1, ...props }) => {
  const group = useRef();

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * speed;
      group.current.rotation.x += delta * speed * 0.1;
    }
  });

  return (
    <group ref={group}>
      <Stars {...props} />
    </group>
  );
};

const LandingPage = () => {
  const COLORS = ["#750b27", "#a81e51", "#1d2fb5", "#1e750b", "#e01414"];
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(80% 100% at 50% 25% , black 60%, ${color})`;
  const border = useMotionTemplate`2px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  });
  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative min-h-screen z-20 w-full flex justify-center items-center px-4 sm:px-6"
      id="home"
    >
      <div className="absolute inset-x-0 top-10 lg:top-24 flex flex-col items-center px-4 sm:px-6">
        <h1 className="z-20 text-4xl sm:text-5xl lg:text-8xl font-bold text-gray-300 max-w-3xl text-center mx-auto pt-32 lg:pt-20">
          SAMI<motion.span style={{color}}>TESH</motion.span>
          <br />
          <motion.span style={{color}}>PAN</motion.span>DA
        </h1>
        <p className="w-2/3 lg:w-1/3 text-md sm:text-base lg:text-md text-gray-400 text-center max-w-2xl mx-auto mt-6">
          Computer science undergraduate specialized in modern full-stack
          frameworks and optimizing complex backend database architectures.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 w-full max-w-md mt-6">
          <motion.a href="https://github.com/samiop18" style={{color,border,boxShadow}} className="lg:mt-5 z-30 font-bold p-3 transition-all duration-100 ease-in-out rounded-full hover:scale-110 active:scale-95">
            <HugeiconsIcon icon={GithubIcon} size={24} />
          </motion.a>
          <motion.a href="https://github.com/samiop18" style={{color,border,boxShadow}} className="lg:mt-5 z-30 font-bold p-3 transition-all duration-100 ease-in-out rounded-full hover:scale-110 active:scale-95">
            <HugeiconsIcon icon={LinkedinIcon} size={24} />
          </motion.a>
          <motion.a href="https://github.com/samiop18" style={{color,border,boxShadow}} className="lg:mt-5 z-30 font-bold p-3 transition-all duration-100 ease-in-out rounded-full hover:scale-110 active:scale-95">
            <HugeiconsIcon icon={LeetcodeIcon} size={24} />
          </motion.a>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mt-6 w-full max-w-2xl">
          <motion.a
            href="/#projects"
            style={{ border, boxShadow }}
            className="w-fit sm:w-auto mt-5 z-30 rounded-2xl px-6 py-3 text-center transition-all duration-100 ease-in-out text-white text-md hover:scale-105 active:scale-95"
          >
            View my works
          </motion.a>
          <motion.a
            href="/#contact"
            style={{ border, boxShadow }}
            className="w-fit sm:w-auto mt-5 z-30 rounded-2xl px-6 py-3 text-center transition-all duration-100 ease-in-out text-white hover:scale-105 active:scale-95"
          >
            Get in touch
          </motion.a>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 35 }}>
          <ambientLight intensity={0.5} />
          <MovingStars radius={30} depth={50} count={1000} factor={4} fade speed={0.6} />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default LandingPage;
