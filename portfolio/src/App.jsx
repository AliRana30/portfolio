import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Portfolio from './Portfolio'
import ProjectDetails from './Components/ProjectDetails.jsx'
import SmoothCursor from './Components/SmoothCursor'

function App() {
  return (
    <>
      <BrowserRouter>
        <SmoothCursor />
        <Routes>
          <Route path='/project/:id' element={<ProjectDetails />} />
          <Route path='/' element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
