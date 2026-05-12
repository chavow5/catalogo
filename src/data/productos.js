// =====================================
// DATOS DEL CATÁLOGO (PLANTILLA GENÉRICA)
// Modificar este archivo para adaptar el 
// menú a cualquier rubro
// =====================================

import Papa from "papaparse";
import menuCsv from "./menu.csv?raw";

// Leemos y parseamos el CSV de forma síncrona
const { data } = Papa.parse(menuCsv, {
  header: true,
  skipEmptyLines: true,
});

const categoriasMap = new Map();

data.forEach((row) => {
  // Ignorar filas sin ID de producto o sin ID de categoría
  if (!row.Categoria_ID || !row.Producto_ID) return;

  const catId = row.Categoria_ID.trim();

  // Si la categoría no existe en el mapa, la creamos
  if (!categoriasMap.has(catId)) {
    const filtros = row.Categoria_Filtros
      ? row.Categoria_Filtros.split("|").map((f) => {
          const [id, label] = f.split(":");
          return { id: id.trim(), label: label.trim() };
        })
      : undefined;

    categoriasMap.set(catId, {
      id: catId,
      nombre: row.Categoria_Nombre?.trim() || "",
      emoji: row.Categoria_Emoji?.trim() || "",
      descripcion: row.Categoria_Descripcion?.trim() || "",
      filtros: filtros,
      productos: [],
    });
  }

  const categoria = categoriasMap.get(catId);

  // Parsear variantes si existen en el formato "Id:Precio|Id:Precio"
  const variantes = row.Variantes
    ? row.Variantes.split("|").map((v) => {
        const [id, precio] = v.split(":");
        return {
          id: id.trim().toLowerCase(),
          nombre: id.trim(),
          precio: Number(precio),
        };
      })
    : undefined;

  const producto = {
    id: row.Producto_ID.trim(),
    nombre: row.Producto_Nombre?.trim() || "",
    descripcion: row.Producto_Descripcion?.trim() || "",
    precioBase: row.Producto_PrecioBase ? Number(row.Producto_PrecioBase) : undefined,
    emoji: row.Producto_Emoji?.trim() || "",
    imagen: row.Producto_Imagen?.trim() || undefined,
    disponible: row.Producto_Disponible?.trim().toUpperCase() === "SI",
    tipo: row.Producto_Tipo?.trim() || undefined,
    opcionesDe: row.Combo_OpcionesDe?.trim() || undefined,
    cantidadCombo: row.Combo_Cantidad ? Number(row.Combo_Cantidad) : undefined,
    filtroCombo: row.Combo_FiltroEtiqueta?.trim() || undefined,
    etiquetaFiltro: row.Filtro_Etiqueta?.trim() || undefined,
    etiquetaDestacada: row.Filtro_Destacado?.trim() || undefined,
    variantes: variantes,
  };

  // Limpiar propiedades undefined para mantener limpio el objeto
  Object.keys(producto).forEach((key) => {
    if (producto[key] === undefined) {
      delete producto[key];
    }
  });

  categoria.productos.push(producto);
});

// =====================================
// LÓGICA DE HOT SALE DINÁMICA
// =====================================
const now = new Date();
const limiteHotSale = new Date("2026-05-14T00:00:00-03:00");

// Si es antes del jueves 14 a las 00:00, agregamos la promo
if (now < limiteHotSale) {
  const catPromos = categoriasMap.get("cat-promociones");
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

export const categorias = Array.from(categoriasMap.values());
