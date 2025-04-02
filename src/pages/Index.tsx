
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Script para ativar animações no scroll
  useEffect(() => {
    const scrollElements = document.querySelectorAll(".reveal");
    
    const elementInView = (el: Element, percentageScroll = 100) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <= 
        ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
      );
    };
    
    const displayScrollElement = (element: Element) => {
      element.classList.add("active");
    };
    
    const hideScrollElement = (element: Element) => {
      element.classList.remove("active");
    };
    
    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 70)) {
          displayScrollElement(el);
        } else {
          hideScrollElement(el);
        }
      });
    };
    
    // Initialize
    handleScrollAnimation();
    
    // Event listener
    window.addEventListener("scroll", handleScrollAnimation);
    
    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
