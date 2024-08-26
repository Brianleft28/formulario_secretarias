import type { Secretaria } from "../../types/secretarias";

const base_url = "http://localhost:3000/api/v1/secretarias";

export class SecretariaService {
  // validaciones
  static validateNombre(nombre: string) {
    if (nombre.length < 3) {
      throw new Error("El nombre debe tener al menos 3 caracteres");
    } else if (nombre.length > 50) {
      throw new Error("El nombre debe tener menos de 50 caracteres");
    } else if (nombre.trim() === "") {
      throw new Error("El nombre no puede estar vacío");
    } else {
      return null;
    }
  }

  static validateTelefono(telefono: string) {
    if (telefono.trim() === "") {
      throw new Error("El teléfono es obligatorio");
    }
    if (telefono.length < 8) {
      throw new Error("El teléfono debe tener al menos 8 caracteres");
    }
    if (telefono.length > 20) {
      throw new Error("El teléfono debe tener menos de 20 caracteres");
    }
    return null;
  }

  static validateCorreo(correo: string) {
    if (correo.trim() === "") {
      throw new Error("El correo es obligatorio");
    }
    if (!correo.includes("@")) {
      throw new Error("Introduzca una dirección de correo válida");
    }
    return null;
  }

  public static validate(
    nombre: string,
    telefono: string,
    correo: string
  ): string | null {
    return (
      this.validateNombre(nombre) ||
      this.validateTelefono(telefono) ||
      this.validateCorreo(correo)
    );
  }

  // CRUD

  async getSecretarias() {
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
  }

  async getSecretariaById(id: number) {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const url = `${base_url}/${id}`;
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch secretaria:", error);
      throw error;
    }
  }

  async createSecretaria(secretaria: Secretaria) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(secretaria),
    };
    try {
      const response = await fetch(base_url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to create secretaria:", error);
      throw error;
    }
  }

  async updateSecretaria(secretaria: Secretaria, id: number) {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(secretaria),
    };
    const url = `${base_url}/${id}`;
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to update secretaria:", error);
      throw error;
    }
  }

  async deleteSecretaria(id: number) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const url = `${base_url}/${id}`;
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to delete secretaria:", error);
      throw error;
    }
  }
}
