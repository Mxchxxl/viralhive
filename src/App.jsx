import "./App.scss"

import { Route, Routes } from "react-router-dom"

import Home from './pages/Home/Home'
import HowItWorks from "./pages/HowItWorks/HowItWorks"
import Instagram from "./pages/Instagram/Instagram"
import Tiktok from "./pages/Tiktok/Tiktok"
import Youtube from "./pages/Youtube/Youtube"

function App()
{
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/tiktok" element={<Tiktok />} />
        <Route path="/services/instagram" element={<Instagram />} />
        <Route path="/services/youtube" element={<Youtube />} />
        <Route path="/how-it-works/for-brands" element={<HowItWorks />} />
      </Routes>
    </div>
  )
}

export default App