/* eslint-disable react/prop-types */

// el import es el nombre de la funcion que importan el from la ruta de la funcion

//Importaciones de librerias externas
// No requiere una ruta solo el nombre en el from ej: from 'react'
import { useState, useEffect } from 'react'

// Importaciones de componentes
// Requieren la ruta, debemos asegurarnos que existe el export default en el componente, debemos poner
// el import igual al nombre de la funcion que exportamos y este debe iniciar en mayuscula
import Card from './components/CardComponent'

// Importaciones de imagenes
// ustedes asignan el nombre de la variable en el import
// import gato from './assets/images.jpg'

// Importaciones de css globales
// no requieren el nombre ni el from solo import y la ruta
import './App.css'


function App() {
  const [pagina, setPagina] = useState(0)
  const [personajes, setPersonajes] = useState([])
  const [info, setInfo] = useState({})
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
      .then((response) => response.json())
      .then((data) =>{
        setInfo(data.info)
        setPersonajes(data.results)})
  }, [pagina])
  console.log(info)

  // useEffect(() => {
  //   // la logica para llamar un solo personaje de la serie
  // },[])

  useEffect(() => {
    const url = new URL(window.location)
    const params = new URLSearchParams(url.search)
    const page = params.get('page')
    setPagina(page)
  }, [])

  const addQueryParams = () => {
    const url = new URL(window.location)
    url.searchParams.set('page', parseInt(pagina) + 1)
    window.history.replaceState({}, '', url)
    setPagina(parseInt(pagina) + 1)
  }

  return (
    <>
      {personajes.length !== 0 && personajes.map((personaje) => (
        <Card key={personaje.id} title={personaje.name} genre={personaje.gender} status={personaje.status} img={personaje.image} />
      )) }
      <button onClick={addQueryParams} >siguiente pagina</button>
    </>
  )
}


export default App
