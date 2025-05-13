import { createContext, useState, useContext } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null)
  const [isAuthenticated, setIsAuthenticated] = useState(!!token)

  const login = (token) => {
    setToken(token)
    localStorage.setItem("token", token)
  }

  const logout = () => {
    setToken(null)
    localStorage.removeItem("token")
  }

  return(
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>

  )
}

export const useAuth = () => useContext(AuthContext)
