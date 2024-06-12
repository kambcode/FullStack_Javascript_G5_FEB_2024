import { useContext } from "react"
import MyContext from "../contexts/MyContext"

const NuevoComponente = () =>  {
    const {setState} = useContext(MyContext)
    return (
        <button onClick={() => setState('esto es otro saludo')}>este es un valor muy diferente</button>
    )
}

export default NuevoComponente