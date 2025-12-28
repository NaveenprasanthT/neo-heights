import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import TrustedBy from "@/components/TrustedBy/TrustedBy";
import AboutUs from "@/components/AboutUs/AboutUs";
import Services from "@/components/Services/Services";
import Projects from "@/components/Projects/Projects";
import Clients from "@/components/Clients/Clients";
import Sustainability from "@/components/Sustainability/Sustainability";
import Legacy from "@/components/Legacy/Legacy";
import Team from "@/components/Team/Team";
import Blogs from "@/components/Blogs/Blogs";
import Journey from "@/components/Journey/Journey";
import FAQ from "@/components/FAQ/FAQ";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustedBy />
      <AboutUs />
      <Services />
      {/* <Projects /> */}
      <Clients />
      <Sustainability />
      <Legacy />
      <Team />
      <Blogs />
      <Contact />
      <Journey />
      <FAQ />
      <Footer />
    </main>
  );
}
