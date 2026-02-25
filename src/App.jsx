import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Order from './components/Order'


function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />

        </Routes>
      </HashRouter>
    </>
  )
}

export default App
