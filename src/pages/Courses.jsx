import { useEffect, useState } from "react"
import { useAuth } from "../context/AuthContext"

export default function Courses() {
  const { token } = useAuth()
  const [courses, setCourses] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/courses", {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        if(res.ok) throw new Error("Error al cargar cursos")
        const data = await res.json()
        setCourses(data)
      }catch (error) {
        setError("No se pudieron cargar los datos")
      }
    }
    fetchCourses()
  }, [token])
  return(
    <>
      <h1>Cursos Disponibles</h1>
      {error && <p>{error}</p>}
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
