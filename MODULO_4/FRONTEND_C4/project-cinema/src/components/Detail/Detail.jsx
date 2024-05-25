import './style.css'
function Details(props) {
    // Recuerda que este es solo un componente funcional,
    // tu debes incluir estilos para hacerlo más atractivo
    return (
      <div className="containerDetails">
          <p>
            <b>Genero:</b> {props.genre}
          </p>
          <p>
            <b>Estado:</b> {props.status}
          </p>
      </div>
    );
  }
  export default Details;