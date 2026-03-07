import Contac from "@/components/organism/Contac";
import Education from "@/components/organism/Education";
import Footer from "@/components/organism/Footer";
import Header from "@/components/organism/Header";
import Hero from "@/components/organism/Hero";
import Project from "@/components/organism/Project";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Education />
      <Project />
      <Contac />
      <Footer />
    </main>
  );
}
