/**
 * Función para formatear la fecha
 * @param {string} isoString
 * @returns {string}
 * @example formatDate('2021-09-01T03:00:00.000Z') // '01/09/2021'
 */

export function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString("es-ES"); // 'es-ES' es el código de idioma para español (España), ajusta según necesites
}

/**
 * Función para estilizar los badges de estados condicionalmente segun su valor
 * @param {string} estado
 * @returns {string}
 */

export function switchEstadoStyle(estado) {
  switch (estado) {
    case "completo":
      return " badge bg-primary p-1 px-3 rounded";
    case "pendiente":
      return " badge bg-info p-1 px-3 rounded";
    case "derivado":
      return " badge bg-warning p-1 px-3 rounded";
    default:
      return " badge bg-secondary p-1 px-3 rounded";
  }
}
export function estadoIntToString(estado) {
  switch (estado) {
    case 1:
      return "completo";
    case 2:
      return "pendiente";
    case 3:
      return "derivado";
    default:
      return "completo";
  }
}
