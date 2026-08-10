import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'

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
      className={`min-h-screen bg-[#080a0f] transition-opacity duration-700 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Navbar />
      <Home />
    </div>
  )
}

export default App