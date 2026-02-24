import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main className="container">
        <section className=" section hero">
          <h1>Premium Prawns, Delivered Fresh.</h1>
          <p>Experience the finest selection of ocean-fresh prawns delivered straight from the coast to your kitchen.</p>
          <button className="btn-primary">Order Now</button>
        </section>
      </main>
    </>
  )
}

export default App
