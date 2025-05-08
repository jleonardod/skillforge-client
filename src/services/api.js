const API_BASE_URL = 'httP://localhost:3000/api'

export const login = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
  if (!response.ok) {
    throw new Error('Login failed')
  }
  return response.json()
}
