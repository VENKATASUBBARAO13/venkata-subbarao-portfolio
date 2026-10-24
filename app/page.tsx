import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AwsSkills from "@/components/AwsSkills";
import AwsJourney from "@/components/AwsJourney";
import AwsLabs from "@/components/AwsLabs";
import AwsProjects from "@/components/AwsProjects";
import EducationTimeline from "@/components/EducationTimeline";
import ProjectsTimeline from "@/components/ProjectsTimeline";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import GithubStats from "@/components/GithubStats";
import LearningInPublic from "@/components/LearningInPublic";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
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
        <AwsSkills />
        <AwsJourney />
        <AwsLabs />
        <AwsProjects />
        <EducationTimeline />
        <ProjectsTimeline />
        <Skills />
        <Achievements />
        <GithubStats />
        <LearningInPublic />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
