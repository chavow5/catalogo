// =====================================
// DATOS DEL CATÁLOGO (PLANTILLA GENÉRICA)
// Modificar este archivo para adaptar el 
// menú a cualquier rubro
// =====================================

export const categorias = [
  {
    id: "cat-empanadas",
    nombre: "Empanadas",
    emoji: "🥟",
    descripcion: "Podés combinar cualquier variedad",
    // Esta categoría usa precios fijos por unidad (sin variantes de tamaño)
    productos: [
      {
        id: "emp-01",
        nombre: "Carne Salada",
        descripcion: "Carne picada sazonada con verduras y especias clásicas",
        precioBase: 1200,
        emoji: "🥟",
        imagen: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=400&auto=format&fit=crop",
        disponible: true,
      },
      {
        id: "emp-02",
        nombre: "Carne Dulce",
        descripcion: "Carne con pasas de uva, aceitunas y huevo duro",
        precioBase: 1200,
        emoji: "🥟",
        imagen: "https://images.unsplash.com/photo-1596765796791-2a6cda33ba17?q=80&w=400&auto=format&fit=crop",
        disponible: true,
      },
      {
        id: "emp-03",
        nombre: "Matambre a la Pizza",
        descripcion: "Matambre, mozzarella, tomate y orégano",
        precioBase: 1400,
        emoji: "🥟",
        disponible: true,
      },
      {
        id: "emp-04",
        nombre: "Cheese Burger",
        descripcion: "Carne, queso cheddar, cebolla y mostaza",
        precioBase: 1400,
        emoji: "🥟",
        disponible: true,
      },
      {
        id: "emp-05",
        nombre: "Jamón y Queso",
        descripcion: "Jamón cocido con queso derretido por dentro",
        precioBase: 1100,
        emoji: "🥟",
        imagen: "https://images.unsplash.com/photo-1522881113911-c967fb4791ea?q=80&w=400&auto=format&fit=crop",
        disponible: true,
      },
      {
        id: "emp-promo-6",
        nombre: "Media Docena",
        descripcion: "¡Elegí 6 sabores a precio de promo!",
        precioBase: 6000,
        emoji: "🔥",
        imagen: "https://images.unsplash.com/photo-1614777986387-015c2a89b696?q=80&w=400&auto=format&fit=crop",
        disponible: true,
        tipo: "combo",
        opcionesDe: "cat-empanadas",
        cantidadCombo: 6,
      },
    ]
  },
  {
    id: "cat-pizzas",
    nombre: "Pizzas",
    emoji: "🍕",
    descripcion: "Elegí el tamaño para cada pizza",
    // Configuración para permitir filtrar dentro de la categoría
    filtros: [
      { id: "todas", label: "Todas" },
      { id: "comun", label: "Comunes" },
      { id: "especial", label: "Especiales ⭐" }
    ],
    // Esta categoría usa variantes dependientes del tamaño/opción en vez de precio base
    productos: [
      {
        id: "piz-01",
        nombre: "Muzzarella",
        descripcion: "Salsa de tomate y mozzarella fresca",
        etiquetaFiltro: "comun", // Coincide con el id del filtro
        emoji: "🍕",
        disponible: true,
        variantes: [
          // { id: "chica", nombre: "Chica", precio: 3500 },
          { id: "grande", nombre: "Grande", precio: 5500 }
        ]
      },
      {
        id: "piz-02",
        nombre: "Napolitana",
        descripcion: "Muzzarella con rodajas de tomate y albahaca",
        etiquetaFiltro: "comun",
        emoji: "🍕",
        disponible: true,
        variantes: [
          // { id: "chica", nombre: "Chica", precio: 3800 },
          { id: "grande", nombre: "Grande", precio: 5800 }
        ]
      },
      // {
      //   id: "piz-03",
      //   nombre: "Fugazzeta",
      //   descripcion: "Cebolla caramelizada y mozzarella abundante",
      //   etiquetaFiltro: "comun",
      //   emoji: "🧅",
      //   disponible: true,
      //   variantes: [
      //     { id: "chica", nombre: "Chica", precio: 3800 },
      //     { id: "grande", nombre: "Grande", precio: 5800 }
      //   ]
      // },
      // {
      //   id: "piz-04",
      //   nombre: "Especial de la Huella",
      //   descripcion: "Nuestra pizza signature: jamón, morrones, aceitunas y queso",
      //   etiquetaFiltro: "especial",
      //   etiquetaDestacada: "Especial", // Para mostrar un badge visual
      //   emoji: "⭐",
      //   disponible: true,
      //   variantes: [
      //     { id: "chica", nombre: "Chica", precio: 4500 },
      //     { id: "grande", nombre: "Grande", precio: 6800 }
      //   ]
      // },
      // {
      //   id: "piz-05",
      //   nombre: "Calabresa",
      //   descripcion: "Salami picante calabresa con mozzarella",
      //   etiquetaFiltro: "especial",
      //   emoji: "🌶️",
      //   disponible: true,
      //   variantes: [
      //     { id: "chica", nombre: "Chica", precio: 4200 },
      //     { id: "grande", nombre: "Grande", precio: 6500 }
      //   ]
      // },
      // {
      //   id: "piz-06",
      //   nombre: "4 Quesos",
      //   descripcion: "Mozzarella, provolone, roquefort y parmesano",
      //   etiquetaFiltro: "especial",
      //   emoji: "🧀",
      //   disponible: true,
      //   variantes: [
      //     { id: "chica", nombre: "Chica", precio: 4500 },
      //     { id: "grande", nombre: "Grande", precio: 7000 }
      //   ]
      // },
    ]
  }
]
