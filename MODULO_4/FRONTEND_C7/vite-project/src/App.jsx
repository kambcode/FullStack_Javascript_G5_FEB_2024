import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Services from './pages/Services'
import About from './pages/About'

function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li><Link to='/contacto'>Contacto</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/nosotros">nosotros</Link></li>
          </ul>
        </nav>
      </div>
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
