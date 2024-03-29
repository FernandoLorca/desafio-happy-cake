import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

import NavBar from "./components/Navbar"

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
