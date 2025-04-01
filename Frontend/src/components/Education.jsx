import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Dwarkadas Jivanlal College of Engineering and Technology",
      period: "2023 - 2026",
      description: "Focused on programming fundamentals and software development. Participated in multiple hackathons.",
      courses: ["Advanced Data Structures", "Object-Oriented Programming", "Database Systems", "Web Development"],
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Pravin Patil College of Engineering and Diploma",
      period: "2020 - 2023",
      description: "Intensive 3 years program focused on core computer engineering subjects and practices.",
      courses: ["Java", "C++", "Javascript", "Data Structures"],
    },
    {
      degree: "Secondary School Certificate",
      institution: "Shantibai Lalchand Porwal High School",
      period: "2008 - 2020",
      courses: ["English", "Communications", "HTML", "CSS" ,"Mathematics"],
    },
  ];

  return (
    <section id="education" className="py-20  lg:pl-35 lg:pr-30 px-6 md:px-12" ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">My Education</h2>
          <p className="text-gray-500">Academic background and qualifications</p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 border border-gray-200 rounded-2xl shadow-md "
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-2 bg-green-100 rounded-full">
                    <GraduationCap className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <p className="text-gray-500">{edu.institution}</p>
                  </div>
                </div>
                <span className="px-3 py-1 hidden md:inline-block text-sm border rounded-full text-gray-600 ">{edu.period}</span>
              </div>
              <p className="mt-4 text-gray-600">{edu.description}</p>
              <div className="mt-4">
                <p className="font-medium mb-2">Key Courses:</p>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, i) => (
                    <span key={i} className="px-3 py-1 text-sm  rounded-full ">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
