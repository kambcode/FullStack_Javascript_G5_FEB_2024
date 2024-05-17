import './App.css'

function App() {
  const isColor = true
  const color = isColor ? 'blue' : 'black'

  return (
    <>
     <div className='container'>
        <h1 style={{
          border: 'solid 10px black',
          borderRadius: '10px',
          color: color
        }}>Hola mundo, soy mi primer proyecto en react</h1>
     </div>
    </>
  )
}

export default App
