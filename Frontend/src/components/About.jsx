import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import profileImage from "../assets/img.png"; // Update with actual image path

export default function AboutSection() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: "-100px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const onButtonClick = () => {
    const pdfUrl = '/PAKSHALSHAH_TYIT-DJSCE26.pdf';
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "PAKSHALSHAH_TYIT-DJSCE26.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <section id="about" ref={ref} className="py-20  lg:pl-35 lg:pr-30 px-6 md:px-12 ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-gray-500">Get to know me better</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative max-w-xs md:max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden"
          >
            <img src={profileImage} alt="Profile" className="w-full h-auto object-cover rounded-2xl" />
          </motion.div>

          <div className="space-y-4 text-left ">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl font-bold"
            >
              Who am I?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-gray-500"
            >
              I am a passionate Full Stack Developer with a strong foundation in web technologies, specializing in 
              building interactive and high-performance applications.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-gray-500"
            >
              With hands-on experience in modern frameworks and libraries, I craft seamless digital experiences, 
              from user-friendly interfaces to scalable backend solutions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-500"
            >
              Beyond coding, I enjoy exploring new technologies, staying up-to-date with industry trends, and engaging in 
              open-source contributions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="pt-4 flex-row justify-items-center sm:justify-items-start"
            >
              <button onClick ={onButtonClick}
              className="px-6 py-3 flex items-center gap-2 bg-green-900 text-white rounded-full hover:bg-green-950 ">
                <FileText className="w-5 h-5" /> Download CV
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
