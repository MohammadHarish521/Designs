import Nav from './components/Nav'
import Hero from './components/Hero'
import Featured from './components/Featured'
import RecentArrivals from './components/RecentArrivals'
import ToolsList from './components/ToolsList'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#050505] text-neutral-400 font-manrope selection:bg-neutral-800 selection:text-white overflow-x-hidden relative min-h-screen">
      {/* Ambient Lighting */}
      <div className="fixed top-0 left-0 w-full h-[800px] bg-[radial-gradient(circle_at_50%_0%,_var(--tw-gradient-stops))] from-neutral-900/30 via-[#050505] to-[#050505] pointer-events-none -z-20"></div>

      <Nav />
      
      <main className="max-w-[1400px] mx-auto px-6 md:px-12 relative min-h-screen">
        <Hero />
        <Featured />
        
        {/* Divider */}
        <div className="w-full h-px bg-neutral-900 my-24 relative flex items-center justify-center">
          <div className="absolute px-4 bg-[#050505] text-neutral-700">
            <iconify-icon
              icon="solar:asteroid-linear"
              width="16"
              className="animate-spin-slow"
            ></iconify-icon>
          </div>
        </div>

        <RecentArrivals />
        <ToolsList />
      </main>

      <Footer />
    </div>
  )
}

export default App
