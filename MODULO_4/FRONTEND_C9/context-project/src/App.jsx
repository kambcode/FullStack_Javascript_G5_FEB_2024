
import { useState } from 'react'
import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import './App.css'
import MyContext from './contexts/MyContext'
import Home from './pages/Home'
import ContextPage from './pages/ContextPage'

function App() {
  const [state, setState] = useState('hello, world')

  return (
    <>
     <MyContext.Provider value={{state, setState}}>
      <Router>
      <div>
        <nav>
          <h2>{state}</h2>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li><Link to='/context'>Context</Link></li>
          </ul>
        </nav>
      </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/context' element={<ContextPage />} />
        </Routes>
      </Router>
     </MyContext.Provider>
    </>
  )
}

export default App
