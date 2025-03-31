import { useRef, useState } from "react";
import { Img } from "react-image";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { Eye } from "lucide-react";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: 0.2,
  });

  const allProjects = {
    tab1: [
      {
        title: "Expense Splitting Website",
        description: "A full-featured platform with creating groups, adding expenses, settle ups and summary processing.",
        image: "/placeholder.svg?height=300&width=500",
        tags: ["React", "Node.js", "MongoDB", "Express"],
        demoUrl: "https://split-money-alpha.vercel.app/",
        codeUrl: "https://github.com/PakshalS/split_money",
      },
      {
        title: "Portfolio Website",
        description: "A responsive portfolio website with dark mode, animations, and contact form.",
        image: "/placeholder.svg?height=300&width=500",
        tags: ["React", "Tailwind CSS", "Framer Motion"],
        demoUrl: "#",
        codeUrl: "https://github.com/PakshalS/Profile",
      },
      {
        title: "Solar Monitoring System",
        description: "IOT project that monitors solar panels, calculates savings, gives updates for maintenance.",
        image: "/placeholder.svg?height=300&width=500",
        tags: ["C++", "Arduino", "HTML" ,"CSS","ThinkCloud"],
        codeUrl: "https://github.com/PakshalS/Solar-Monitoring-System",
      },
    ],
    // tab2: [
    //   {
    //     title: "Weather Dashboard",
    //     description: "A weather dashboard that displays current and forecasted weather data for any location.",
    //     image: "/placeholder.svg?height=300&width=500",
    //     tags: ["JavaScript", "OpenWeather API", "CSS"],
    //     demoUrl: "#",
    //     codeUrl: "#",
    //   },
    // ],
  };

  // Filter out empty tabs
  const availableTabs = Object.keys(allProjects).filter(tab => allProjects[tab].length > 0);
  const [filter, setFilter] = useState(availableTabs[0] || "");

  return (
    <section id="projects" className="py-20 px-6" ref={ref}>
      <div className="space-y-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight">My Projects</h2>
        <p className="text-muted-foreground">Some of my recent work</p>
        {availableTabs.length > 1 && (
          <div className="flex justify-center gap-2">
            {availableTabs.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category)}
                className="capitalize"
              >
                {category.toUpperCase()}
              </Button>
            ))}
          </div>
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects[filter]?.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group"
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <Img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="flex-grow pt-6 space-y-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 flex justify-between">
                  <a href={project.demoUrl} target="_blank" className="text-primary hover:underline flex items-center">
                    <Eye className="mr-2 h-4 w-4" /> Demo
                  </a>
                  <a href={project.codeUrl} target="_blank" className="text-primary hover:underline flex items-center">
                    <FaGithub className="mr-2 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
