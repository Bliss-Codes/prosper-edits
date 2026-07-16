import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Thumbnails from "@/components/Thumbnails";
import Services from "@/components/Services";
import About from "@/components/About";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Portfolio />
        <Thumbnails />
        <Services />
        <About />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
