import Education from "@/components/education";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Intro />
      <SectionDivider />
      <div className="flex flex-col items-center px-4">
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
