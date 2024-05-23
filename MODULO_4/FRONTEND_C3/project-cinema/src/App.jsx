/* eslint-disable react/prop-types */
import './App.css'
import Card from './components/CardComponent'

function App() {
  return (
    <Card title='esto es un titulo' />
  )
}

export default App

// const data = [
//   {
//     mensaje: 'esto es un mensaje',
//     imagen: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTFw0Tu56CpyO9h_g2Dj50Lu4jJ-ZI3aHNWwxB6IiwjYuShvqq3',
//     descripcion: "esta es una descripcion"
//   },
//   {
//     mensaje: 'esto es un mensaje',
//     imagen: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTFw0Tu56CpyO9h_g2Dj50Lu4jJ-ZI3aHNWwxB6IiwjYuShvqq3',
//     descripcion: "esta es una descripcion"
//   },
//   {
//     mensaje: 'esto es un mensaje',
//     imagen: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTFw0Tu56CpyO9h_g2Dj50Lu4jJ-ZI3aHNWwxB6IiwjYuShvqq3',
//     descripcion: "esta es una descripcion"
//   },
//   {
//     mensaje: 'el mensaje es este',
//     imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1IwK6-SxM83UpFVY6WtUZxXx-phss_gAUfdKbkTfau6VWVkt',
//     descripcion: "vamos con otra descripcion"
//   },
//   {
//     mensaje: 'por a qui va otro mensaje',
//     imagen: 'https://concepto.de/wp-content/uploads/2021/07/caballos-e1626738224231.jpg',
//     descripcion: "una ultima descripcion por aqui"
//   },
//   {
//     mensaje: 'por a qui va otro mensaje',
//     imagen: 'https://concepto.de/wp-content/uploads/2021/07/caballos-e1626738224231.jpg',
//     descripcion: "una ultima descripcion por aqui"
//   },
//   {
//     mensaje: 'por a qui va otro mensaje',
//     imagen: 'https://concepto.de/wp-content/uploads/2021/07/caballos-e1626738224231.jpg',
//     descripcion: "una ultima descripcion por aqui"
//   },
// ]

// class MiComponente extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       contador: 0
//     };
//     this.incrementar = this.incrementar.bind(this);
//   }
//   incrementar(){
//     this.setState(prevState => ({
//       contador: prevState + 1
//     }))
//   }

//   componentDidMount() {
//     console.log('El componente se montó en el DOM');
//   }

//   componentDidUpdate() {
//     console.log('El componente se actualizó');
//   }

//   componentWillUnmount() {
//     console.log('El componente se va a desmontar del DOM');
//   }

//   render() {
//     return( 
//     <div>
//       <h1>Contador: {this.state.contador}</h1>
//       <button onClick={this.incrementar}>Incrementar</button>
//     </div>
//     )
//   }
// }

 



