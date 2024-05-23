
import Image from "./Image"
import Title from "./Title"
import Gato from '../assets/images.jpg'
import Details from "./Detail/Detail"

const Card = (props) => {
    // logica, codigo javascript
    return (
        <div className="container">
            
            <Image url={Gato} />
            <Title title={props.title} />
            <Details genre="accion" status="ok" />
        </div>
    )
}

export default Card