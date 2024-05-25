/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import Card from './components/CardComponent'
import './App.css'



function App() {
  const [pagina, setPagina] = useState(0)
  const [personajes, setPersonajes] = useState([])
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
      .then((response) => response.json())
      .then((data) => setPersonajes(data.results))
  }, [pagina])
  console.log(personajes)
  const incrementarContador = () => {
    setPagina(pagina + 1)
  }
  return (
    <>
      {personajes.length !== 0 && personajes.map((personaje) => (
        <Card key={personaje.id} title={personaje.name} genre={personaje.gender} status={personaje.status} img={personaje.image} />
      )) }
      <button onClick={incrementarContador} >siguiente pagina</button>
    </>
  )
}


export default App
