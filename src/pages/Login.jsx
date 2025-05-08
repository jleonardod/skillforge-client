import { useState } from "react"
import { login as loginService } from "../services/api"
import { useAuth } from "../context/AuthContext"

export default function Login() {
  const { login } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async(e) => {
    e.preventDefault()
    try{
      const data = await loginService(email, password)
      login(data.token)
    } catch (error) {
      setError("Invalid email or password")
    }
  }

  return(
    <>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Email"
          value={email}
          type="text" 
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          placeholder="Password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p>{error}</p>}
        <button type="submit">Entrar</button>
      </form>
    </>
  )
}
