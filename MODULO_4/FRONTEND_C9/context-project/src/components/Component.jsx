import { useContext } from "react"
import MyContext from "../contexts/MyContext"

const Component = () => {
    const {state, setState} = useContext(MyContext)
    return (
        <div>
            <p>valor del contexto {state}</p>
            <button onClick={() => setState('good bye')}>Cambiar valor del contexto</button>
        </div>
    )
}

export default Component