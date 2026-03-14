// variables de entorno del local
// se cargan desde .env.local (dev) o Vercel Dashboard (producción)
export const config = {
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMERO || "3804201334",
  nombreLocal: import.meta.env.VITE_NOMBRE_LOCAL || "La Huella",
  descripcion: import.meta.env.VITE_DESCRIPCION_LOCAL || "Especialistas en sabor",
  eslogan: import.meta.env.VITE_ESLOGAN || "El sabor que te marca",
  direccion: import.meta.env.VITE_DIRECCION || "",
  horario: import.meta.env.VITE_HORARIO || "Mar a Dom · 12:00 - 23:00",
  instagram: import.meta.env.VITE_INSTAGRAM || "",

  // Promociones configurables del local
  // true = activa el descuento automático agrupando múltiplos de la cantidad mínima
  promociones: {
    activa: true,
    // ID de la categoría a la que aplica la promo (ej: "cat-empanadas")
    categoriaId: "cat-empanadas",
    cantidadMinima: 6, // múltiplo (ej: docena, media docena)
    precioPromocionalUnitario: 1000, // a cuánto queda cada unidad dentro de la promo
    nombrePromoMostrado: "Promo Empanadas" // el nombre que sale en el ticket/carrito
  }
}
