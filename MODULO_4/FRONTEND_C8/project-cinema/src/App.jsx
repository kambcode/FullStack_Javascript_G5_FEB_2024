import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Services from './pages/Services'
import About from './pages/About'
import './App.css'


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/nosotros" element={<About />} />
      </Routes>
      
    </Router>
  )
}


export default App
