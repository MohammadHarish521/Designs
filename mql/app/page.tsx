import Audience from "./components/Audience";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Works from "./components/Works";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Metrics />
      <Features />
      <Works />
      <Pricing />
      <Audience />
      <CTA />
      <Footer />
    </main>
  );
}
