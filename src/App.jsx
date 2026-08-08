import React from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Dentists from "./components/Dentists";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Floating from "./components/Floating";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="dentists">
          <Dentists />
        </section>

        <section id="pricing">
          <Pricing />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="faq">
          <FAQ />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Button */}
      <Floating />
    </div>
  );
};

export default App;