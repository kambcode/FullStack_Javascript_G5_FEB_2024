const NuevoComponente = (props) => {

    const { mensaje, imagen, descripcion } = props
    return (
      <>
        <div className='card'>
          {/* <img src={imagen} /> */}
          <img className='img' src={imagen} />
          <h2 className='parrafo'>{mensaje}</h2>
          <p className='parrafo'>{descripcion}</p>
        </div>
      </>
    )
  }

export default NuevoComponente