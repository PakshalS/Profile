
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, useInView, useAnimation } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import header from "../assets/header-img.png"; // Importing the astronaut image
import darkBg from "../assets/banner-bg.png"; // Dark mode background
import lightBg from "../assets/light-bg.jpg"; // Light mode background

export default function LandingSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode(); // Initial check
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="home" 
      ref={ref} 
      className="relative min-h-screen flex flex-col md:flex-row justify-center items-center pl-10 pt-10 pb-20 sm:pb-0 px-6 transition-all duration-300"
      style={{
        backgroundImage: `url(${isDarkMode ? darkBg : lightBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-4 md:w-1/2"
      >
<motion.h2 className="text-xl font-medium text-green-700 dark:bg-white dark:text-gray-900 px-2 py-1 rounded dark:inline-block ">
  Hello, I'm
</motion.h2>

        <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Pakshal Shah
        </motion.h1>
        <motion.h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-600">
          <Typewriter
            words={["Full Stack Web Developer", "Flutter Developer", "Student"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h3>
        <motion.p className="max-w-xl text-gray-600">
          A Passionate Full Stack Developer with a strong technical background in 
          MERN Stack and Flutter for cross-platform mobile applications.  
        </motion.p>
        <motion.div className="flex flex-wrap gap-4 pt-4">
        
        <a href="#projects"><Button size="lg" variant="outline" className="rounded-full bg-green-900 text-white"
          >
            View My Work
          </Button> </a>
          <a href="#contact">
          <Button size="lg" variant="outline" className="rounded-full bg-green-900 text-white">
            Contact Me
          </Button>
          </a>
        </motion.div>
      </motion.div>
      
      {/* Astronaut Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-8 md:mt-0 md:w-1/2 flex justify-center"
      >
        <img src={header} alt="Astronaut" className="w-64 md:w-80 lg:w-auto" />
      </motion.div>
    </section>
  );
}
