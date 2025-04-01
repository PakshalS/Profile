
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Database, Layers, Palette, Terminal, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px", amount: 0.2 });

  const skillCategories = [
    { title: "Frontend", icon: <Code className="h-6 w-6 text-green-600" />, skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Framer Motion"] },
    { title: "Backend", icon: <Database className="h-6 w-6 text-green-600" />, skills: ["Node.js", "Express", "Python", "RESTful APIs"] },
    { title: "Database", icon: <Layers className="h-6 w-6 text-green-600" />, skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Mongoose","SQL"] },
    { title: "Design", icon: <Palette className="h-6 w-6 text-green-600" />, skills: ["Figma", "Responsive Design", "UI/UX", "Wireframing", "Prototyping", "Accessibility"] },
    { title: "DevOps", icon: <Terminal className="h-6 w-6 text-green-600" />, skills: ["Git", "GitHub", "Docker", "CI/CD", "AWS", "Vercel", "Netlify", "Testing"] },
    { title: "Other", icon: <Globe className="h-6 w-6 text-green-600" />, skills: ["SEO", "Performance Optimization", "Agile", "Scrum", "Technical Writing", "Problem Solving", "Team Leadership", "Project Management"] },
  ];

  return (
    <section id="skills" className="py-20 px-6  lg:pl-35 lg:pr-30 sm:px-10 lg:px-20" ref={ref}>
      <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.5 }} className="space-y-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.7 }} className="text-center">
          <h2 className="text-3xl font-bold">My Skills</h2>
          <p className="text-gray-500">Technologies and tools I work with</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div key={index} initial={{ y: 100, opacity: 0 }} animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }} transition={{ duration: 0.7, delay: index * 0.1 }} whileHover={{ y: -10, transition: { duration: 0.3 } }} className="group">
              <Card className="overflow-hidden h-full flex flex-col">
                <CardContent className="pt-2 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-full">{category.icon}</div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
