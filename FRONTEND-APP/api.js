const API_URL = "http://localhost:3000/api/products";

// Obtener todos los productos
export const getjoyeria = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

// Obtener Producto por ID
export const getjoyeriaByID = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

// Crear un Producto
export const addjoyeria = async (joyeria) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(joyeria)
  });
  return response.json();
};

// Actualizar un Producto
export const updatejoyeria = async (id, joyeria) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(joyeria)
  });
  return response.json();
};

// Borrar un Producto
export const deletejoyeria= async (id) => {
  return fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};


