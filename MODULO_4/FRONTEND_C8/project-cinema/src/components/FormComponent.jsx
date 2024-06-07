import { useEffect, useState } from "react"

const FormComponent = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState()
    const [success, setSuccess] = useState()

    useEffect(() => {
        setTimeout(() => {
            setError()
        }, 5000)
    }, [error])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(user === '') setError('el usuario no puede ir vacio')
        if(password.length <= 8) setError('la contrasenia debe tener mas de 8 caracteres')
        if(user === 'miUsuario' && password === 'clavede8digitos'){
          setSuccess(`Bienvenido ${user} te has loggeado con exito`)
        }else{
          setSuccess()
          setError('el usuario no existe, por favor registrate')
        }
        
    }
    return (
        <>
          <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre de usuario</label>
                <input  value={user} onChange={(e) => setUser(e.target.value)} type="text" />
            </div>
            <div>
                <label>Contraseña:</label>
                <input  value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            </div>
            <button type="submit">Iniciar sesion</button>

          </form>
          {error && (
            <h2 className="errorClass" style={{border: 'solid'}}>{error}</h2>
          )}
          {success && (
            <h2 className="successClass" style={{border: 'solid'}}>{success}</h2>
          )}
        </>
       
    )
}

export default FormComponent