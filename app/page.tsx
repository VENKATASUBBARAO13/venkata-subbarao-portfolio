import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import EducationTimeline from "@/components/EducationTimeline";
import ProjectsTimeline from "@/components/ProjectsTimeline";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import GithubStats from "@/components/GithubStats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <EducationTimeline />
        <ProjectsTimeline />
        <Skills />
        <Achievements />
        <GithubStats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
