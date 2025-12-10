import './App.css';
import BentoGrid from './components/BentoGrid';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-white text-slate-900 overflow-x-hidden selection:bg-[#a3ff00] selection:text-slate-900">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid h-[100vh]"></div>
        {/* Ambient Glows */}
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px]"></div>
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-indigo-50/50 rounded-full blur-[100px]"></div>
      </div>

      <Navbar />
      <Hero />
      <Marquee />
      <BentoGrid />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
