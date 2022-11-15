import React from 'react'
import Home from '../pages/Home'
import Placetostay from '../pages/Placetostay'
import { Routes, Route } from 'react-router-dom'


const App = () => {
  // const [modalOpen, setModalOpen] = useState(false)

  // function openModal() {
  //   setModalOpen(true)
  // }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Placetostay" element={<Placetostay  />} />
      </Routes>
    </div>
  )
}

export default App