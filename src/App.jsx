import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Courses from "./pages/Courses"
import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/courses" element={
          <PrivateRoute>
            <Courses />
          </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
