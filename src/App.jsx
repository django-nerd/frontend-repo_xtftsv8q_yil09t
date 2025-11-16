import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Generator from './components/Generator'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Generator />
      </main>
      <Footer />
    </div>
  )
}

export default App
