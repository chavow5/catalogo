// =====================================
// DATOS DEL CATÁLOGO (JSON)
// Modificar el archivo menu.json para adaptar el 
// menú a cualquier rubro
// =====================================

import categoriasData from "./menu.js";

// Copiamos los datos para poder mutarlos si es necesario (ej: agregar la promo Hot Sale)
export const categorias = categoriasData.map(cat => ({
  ...cat,
  productos: [...cat.productos]
}));

// =====================================
// LÓGICA DE HOT SALE DINÁMICA
// =====================================
const now = new Date();
const limiteHotSale = new Date("2026-05-14T00:00:00-03:00");

// Si es antes del jueves 14 a las 00:00, agregamos la promo
if (now < limiteHotSale) {
  const catPromos = categorias.find(cat => cat.id === "cat-promociones");
  if (catPromos) {
    catPromos.productos.unshift({
      id: "promo-hotsale",
      nombre: "HOT SALE - 1 Docena",
      descripcion: "¡Llevate 1 Docena de Empanadas a un súper precio! Válido hasta el miércoles.",
      precioBase: 17000,
      emoji: "🔥",
      imagen: "/imagenes/promociones/prom-doc.png",
      disponible: true,
      tipo: "combo",
      opcionesDe: "cat-empanadas",
      cantidadCombo: 12
    });
  }
}
