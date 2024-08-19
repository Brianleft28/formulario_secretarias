import type { Secretaria } from "../../types/secretarias";

const base_url = "http://localhost:3000/api/v1/secretarias";

export const getSecretarias = async () => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(base_url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch secretarias:", error);
    throw error;
  }
};

export const getSecretariaById = async (id: number) => {
  const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
    url = `${base_url}/${id}`;
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Falló al hacer fetch secretaria:", error);
    throw error;
  }
};

export const createSecretaria = async (secretaria: Secretaria) => {
  const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(secretaria),
    },
    url = base_url;
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Falló al crear secretaria:", error);
    throw error;
  }
};

export const updateSecretaria = async (secretaria: Secretaria) => {
  const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(secretaria),
    },
    url = `${base_url}/${secretaria.id}`;
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Falló al actualizar secretaria:", error);
    throw error;
  }
};

export const deleteSecretaria = async (id: number) => {
  const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    },
    url = `${base_url}/${id}`;
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Falló al eliminar secretaria:", error);
    throw error;
  }
};
