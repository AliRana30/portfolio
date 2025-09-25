import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Portfolio from './Portfolio'
import ProjectDetails from './Components/ProjectDetails.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/project/:name' element={<ProjectDetails />} />
          <Route path='/' element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
