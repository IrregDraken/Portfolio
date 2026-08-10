import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoaded(true)
    }, 100)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div
      id="top"
      className={`min-h-screen bg-[#080a0f] text-[#f5f7fa] transition-opacity duration-700 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Navbar />

      <main>
        <Home />
      </main>

      <Footer />
    </div>
  )
}

export default App