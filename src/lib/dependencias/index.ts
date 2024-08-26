export class Dependencias {
  private entity: string;
  private base_url: string;

  constructor(entity: string) {
    this.entity = entity;
    this.base_url = `http://localhost:3000/api/v1/${this.entity}`;
  }

  // metodo para validaciones
  static validateNombre(nombre: string) {
    if (nombre.length < 5 || nombre.length > 50) {
      throw new Error("El nombre debe tener entre 5 y 50 caracteres");
    }
    if (nombre === "") {
      throw new Error("El nombre no puede estar vacío");
    }
    return null;
  }

  static validateDireccion(direccion: string) {
    if (direccion.length < 5 || direccion.length > 50) {
      throw new Error("La dirección debe tener entre 5 y 50 caracteres");
    }
    if (direccion === null) {
      throw new Error("La dirección no puede estar vacía");
    }
    return null;
  }

  static validateDependencia(dependencia: string) {
    if (dependencia === "0" || dependencia === "") {
      throw new Error("Seleccione un tipo de dependencia");
    }
    return null;
  }

  static validateTelefono(telefono: string) {
    if (telefono.length < 7 || telefono.length > 20) {
      throw new Error("El teléfono debe tener entre 7 y 20 caracteres");
    }
    if (telefono.trim() === "") {
      throw new Error("El teléfono no puede estar vacío");
    }
    return null;
  }

  static validateCorreo(correo: string) {
    if (correo.length < 5 || correo.length > 50) {
      throw new Error("El email debe tener entre 5 y 50 caracteres");
    }
    if (correo.trim() === "") {
      throw new Error("El email no puede estar vacío");
    }
    if (!correo.includes("@" || ".")) {
      throw new Error("El email debe tener un formato válido");
    }
    return null;
  }

  public static validate(
    nombre: string,
    dependencia: string,
    direccion: string,
    telefono: string,
    correo: string
  ) {
    return (
      this.validateNombre(nombre),
      this.validateDependencia(dependencia),
      this.validateDireccion(direccion),
      this.validateTelefono(telefono),
      this.validateCorreo(correo)
    );
  }

  // Método que retorna las dependencias de la entidad
  async getIndex() {
    console.log(`Fetching ${this.entity}...`);
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(this.base_url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Re-throw the error after logging it
    }
  }

  // Método que retorna una dependencia de la entidad
  async getOne(id: string) {
    console.log(`Fetching ${this.entity}...`);
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(`${this.base_url}/${id}`, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Re-throw the error after logging it
    }
  }

  // Método que crea una dependencia de la entidad
  async create(data: any) {
    console.log(`Creating ${this.entity}...`);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(this.base_url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const created = await response.json();
      return created;
    } catch (error) {
      console.error("Error creating data:", error);
      throw error; // Re-throw the error after logging it
    }
  }

  // Método que actualiza una dependencia de la entidad
  async update(id: string, data: any) {
    console.log(`Updating ${this.entity}...`);
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(`${this.base_url}/${id}`, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const updated = await response.json();
      return updated;
    } catch (error) {
      console.error("Error updating data:", error);
      throw error; // Re-throw the error after logging it
    }
  }

  // Método que elimina una dependencia de la entidad

  async delete(id: string) {
    console.log(`Deleting ${this.entity}...`);
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(`${this.base_url}/${id}`, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const deleted = await response.json();
      return deleted;
    } catch (error) {
      console.error("Error deleting data:", error);
      throw error; // Re-throw the error after logging it
    }
  }
}
