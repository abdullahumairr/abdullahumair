import LoadingScreen from "@/components/loading-screen";
import Navbar from "@/components/navbar";
import GridBackground from "@/components/grid-background";
import Hero from "@/components/hero";
import MarqueeStrip from "@/components/marquee-strip";
import AboutMe from "@/components/about-me";
import ExperienceTimeline from "@/components/experience-timeline";
import TechStack from "@/components/tech-stack";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <GridBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <MarqueeStrip />
        <AboutMe />
        <ExperienceTimeline />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
