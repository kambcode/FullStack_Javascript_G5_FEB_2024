import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='estilos'>
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
    )
}

export default Navbar