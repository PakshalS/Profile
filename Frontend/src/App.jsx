import LandingSection from "./components/Landing";
import { Navbar } from "./components/Navbar";
import AboutSection from "./components/About";
import ExperienceSection from "./components/Experience";
import EducationSection from "./components/Education";
import SkillsSection from "./components/Skills";
import { ProjectsSection } from "./components/Projects";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <>
    <Header/>
      <Navbar />
      <div>
        <section id="home" >
          <LandingSection />
        </section>
        <section id="about" >
          <AboutSection/>
        </section>
        <section id="experience">
          <ExperienceSection/>
        </section>
        <section id="education">
          <EducationSection/>
        </section>
        <section id="skills" >
          <SkillsSection/>
        </section>
        <section id="projects" >
          <ProjectsSection/>
        </section>
        <section id="contact">
          <ContactSection/>
          </section>
          <section id="footer">
            <Footer/>
          </section>
      </div>
    </>
  );
}

export default App;
