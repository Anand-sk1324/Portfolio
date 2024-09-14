import Image from "next/image";
import Nav from "./components/Nav";
import HeroSession from "./components/HeroSession";
import SkillSession from "./components/SkillSession";
import ProjectSession from "./components/ProjectSession";
import ContactSession from "./components/ContactSession";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <HeroSession />
      <SkillSession />
      <ProjectSession />
      <ContactSession />
      <Footer />
    </div>
  );
}
