import { useState } from 'react'
import{ BrowserRouter, Routes, Route } from 'react-router-dom'
import AiHelper from './pages/AiHelper'
import Community from './pages/Community'
import Home from './pages/Home'
import MyCar from './pages/MyCar'
import MyInfo from './pages/MyInfo'
import NotFound from './pages/NotFound'
import ParkingHelper from './pages/ParkingHelper'
import './index.css'
import TopNavbar from './components/layout/TopNavbar'
import BotNavbar from './components/layout/BotNavbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aihelper" element={<AiHelper />} />
        <Route path="/community" element={<Community />} />
        <Route path="/mycar" element={<MyCar />} />
        <Route path="/myinfo" element={<MyInfo />} />
        <Route path="/ParkingHelper" element={<ParkingHelper />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
