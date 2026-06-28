export const formatearFechaCorta = (fechaISO) => {
  const fecha = new Date(fechaISO);

  const dia = String(fecha.getDate()).padStart(2, '0');
  const mes = String(fecha.getMonth() + 1).padStart(2, '0'); 
  const anio = fecha.getFullYear();

  const horas = String(fecha.getHours()).padStart(2, '0');
  const minutos = String(fecha.getMinutes()).padStart(2, '0');

  // Construir formato dd/mm/yyyy hh:mm
  return `${dia}/${mes}/${anio} ${horas}:${minutos}`;
};