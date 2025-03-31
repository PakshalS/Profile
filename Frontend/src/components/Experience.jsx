import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Flutter Developer",
    company: "Branding Catalyst",
    period: "2022 Summer",
    description:
      "Led the frontend development team in building responsive apps using Flutter.",
    skills: ["GitHub", "Dart", "Flutter"],
  },
  {
    title: "Publicity Member",
    company: "DJS CodeStars",
    period: "2023 - 2024",
    description:
      "Publicize events, design promotional materials, and engage with the community to attract and inform participants.",
    skills: ["Communications", "English", "Presentations" , "C++"],
  },
];

const ExperienceSection = () => {
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

  return (
    <section id="experience" className="py-20 px-6 md:px-12 max-w-full overflow-hidden" ref={ref}>
      <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.5 }} className="space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">My Experience</h2>
          <p className="text-gray-500">My professional journey</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="border-l-4 border-t-4 border-green-900 p-4 shadow-md rounded-lg"
            >
              <div className="flex flex-wrap justify-between items-start gap-2">
                <div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-gray-500">{exp.company}</p>
                </div>
                <span className="px-3 py-1 text-sm font-medium  rounded">{exp.period}</span>
              </div>
              <p className="mt-4 text-gray-700">{exp.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 text-sm rounded">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
