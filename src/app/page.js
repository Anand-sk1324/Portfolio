import Image from "next/image";
import Nav from "./components/Nav";
import HeroSession from "./components/HeroSession";
import SkillSession from "./components/SkillSession";
import ProjectSession from "./components/ProjectSession";
import ContactSession from "./components/ContactSession";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="  " id="">
      <Nav />
      <HeroSession />
      <div className="bg-slate-950 relative z-30 py-5 md:py-16">
        <SkillSession />
        <ProjectSession />
        <ContactSession />
        <Footer />
      </div>
    </div>
  );
}
