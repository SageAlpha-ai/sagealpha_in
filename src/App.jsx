import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import ChatAssistant from './components/ChatAssistant'

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-[#0B1220] text-slate-400">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        <Footer />
        <ChatAssistant />
      </div>
    </BrowserRouter>
  )
}

export default App
