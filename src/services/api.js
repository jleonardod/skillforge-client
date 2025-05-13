import axios from "axios"

const API_BASE_URL = 'http://localhost:4000/api';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/login`, {
      email,
      password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
      maxBodyLength: Infinity,
    });

    //console.log("Login successful:", response.data);
    return response.data; // Devuelve los datos de la respuesta
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error.response?.data || new Error("An error occurred during login");
  }
};
