import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Order from './components/Order'
import ContextProvider from './Context/productContext'
import { SingleProduct } from './components/SingleProduct'


function App() {
  return (
    <>
      <ContextProvider>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/singleProduct/:id" element={<SingleProduct />} />

          </Routes>
        </HashRouter>
      </ContextProvider>
    </>
  )
}

export default App
