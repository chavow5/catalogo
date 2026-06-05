export default [
  // Menu de Precios
  // CATEGORÍA: PROMOCIONES

  {
    "id": "cat-promociones",
    "nombre": "Promociones",
    "emoji": "🔖",
    "descripcion": "Elegí tus combos favoritos",
    "productos": [
      {
        "id": "promo-01",
        "nombre": "Media Docena",
        "descripcion": "¡Elegí 6 empanadas a precio de promo!",
        "precioBase": 11000,
        "emoji": "🔥",
        "imagen": "/imagenes/promociones/prom-mdoc1.png",
        "disponible": true,
        "tipo": "combo",
        "opcionesDe": "cat-empanadas",
        "cantidadCombo": 6
      },
      {
        "id": "promo-02",
        "nombre": "Una Docena",
        "descripcion": "¡Elegí 12 empanadas a super precio!",
        "precioBase": 22000,
        "emoji": "🔥",
        "imagen": "/imagenes/promociones/prom-doc.png",
        "disponible": true,
        "tipo": "combo",
        "opcionesDe": "cat-empanadas",
        "cantidadCombo": 12
      },
      {
        "id": "promo-03",
        "nombre": "1 Doc. Empanadas + Pepsi 1.5lt",
        "descripcion": "1 docena de empanadas + 1 Pepsi 1.5lt",
        "precioBase": 24000,
        "emoji": "🔥",
        "imagen": "/imagenes/promociones/prom-doc-p.png",
        "disponible": true,
        "tipo": "combo",
        "opcionesDe": "cat-empanadas",
        "cantidadCombo": 12
      },
      {
        "id": "promo-04",
        "nombre": "Dos Docenas",
        "descripcion": "¡Elegí 24 empanadas a super precio!",
        "precioBase": 42000,
        "emoji": "🔥",
        "imagen": "/imagenes/promociones/prom-2doc.png",
        "disponible": true,
        "tipo": "combo",
        "opcionesDe": "cat-empanadas",
        "cantidadCombo": 24
      },
      {
        "id": "promo-05",
        "nombre": "Cinco Docenas",
        "descripcion": "¡Elegí 60 empanadas a precio de Locos!",
        "precioBase": 95000,
        "emoji": "🔥",
        "imagen": "/imagenes/promociones/promo-5doc.png",
        "disponible": false,
        "tipo": "combo",
        "opcionesDe": "cat-empanadas",
        "cantidadCombo": 60
      }
    ]
  },

  // CATEGORÍA: EMPANADAS
  {
    "id": "cat-empanadas",
    "nombre": "Empanadas",
    "emoji": "🥟",
    "descripcion": "Podés combinar cualquier variedad",
    "productos": [
      {
        "id": "emp-06",
        "nombre": "Carne Salada",
        "descripcion": "Carne picada sazonada con verduras y especias clásicas",
        "precioBase": 2500,
        "emoji": "🥟",
        "imagen": "/imagenes/productos/emp-c.jpg",
        "disponible": true
      },
      {
        "id": "emp-02",
        "nombre": "Carne Dulce",
        "descripcion": "Carne con pasas de uva. aceitunas y huevo duro",
        "precioBase": 2500,
        "emoji": "🥟",
        "imagen": "/imagenes/productos/emp-c.jpg",
        "disponible": true
      },
      {
        "id": "emp-05",
        "nombre": "Jamón y Queso",
        "descripcion": "Jamón cocido con queso derretido por dentro",
        "precioBase": 2500,
        "emoji": "🥟",
        "imagen": "/imagenes/productos/emp-jyq.jpg",
        "disponible": true
      },
      {
        "id": "emp-03",
        "nombre": "Matambre a la Pizza",
        "descripcion": "Matambre,mozzarella, tomate y orégano",
        "precioBase": 2500,
        "emoji": "🥟",
        "imagen": "/imagenes/productos/emp.jpg",
        "disponible": true
      },
      {
        "id": "emp-07",
        "nombre": "Verdura",
        "descripcion": "Verdura",
        "precioBase": 2500,
        "emoji": "🥟",
        "imagen": "/imagenes/productos/emp-v.jpg",
        "disponible": true
      },
      {
        "id": "emp-08",
        "nombre": "Choclo",
        "descripcion": "Choclo",
        "precioBase": 2500,
        "emoji": "🥟",
        "imagen": "/imagenes/productos/emp.jpg",
        "disponible": true
      },
      {
        "id": "emp-09",
        "nombre": "Tomate y Albahaca",
        "descripcion": "Queso, Tomate y Albahaca",
        "precioBase": 2500,
        "emoji": "🥟",
        "imagen": "/imagenes/productos/empanada.jpg",
        "disponible": true
      },
      {
        "id": "emp-10",
        "nombre": "Fugazzeta",
        "descripcion": "Fugazzeta",
        "precioBase": 2500,
        "emoji": "🥟",
        "imagen": "/imagenes/productos/empanada.jpg",
        "disponible": true
      },
      {
        "id": "emp-11",
        "nombre": "Cheese Burger",
        "descripcion": "Cheese Burger",
        "precioBase": 2500,
        "emoji": "🥟",
        "imagen": "/imagenes/productos/emp-c.jpg",
        "disponible": true
      },
      {
        "id": "emp-12",
        "nombre": "Roquefort y Nuez",
        "descripcion": "Roquefort y Nuez",
        "precioBase": 2500,
        "emoji": "🥟",
        "imagen": "/imagenes/productos/empanada.jpg",
        "disponible": true
      },
      {
        "id": "emp-13",
        "nombre": "Humita",
        "descripcion": "Humita cremosa con choclo y queso",
        "precioBase": 2500,
        "emoji": "🥟",
        "imagen": "imagenes/productos/empanada.jpg",
        "disponible": true
      },
      {
        "id": "emp-14",
        "nombre": "Árabe",
        "descripcion": "Carne con especias árabes, cebolla y limón",
        "precioBase": 2500,
        "emoji": "🥟",
        "imagen": "imagenes/productos/emp.jpg",
        "disponible": true
      }
    ]
  },

  // CATEGORÍA: PIZZAS
  {
    "id": "cat-pizzas",
    "nombre": "Pizzas",
    "emoji": "🍕",
    "descripcion": "Elegí Como vas a querer tu pizza",
    "productos": [
      {
        "id": "piz-01",
        "nombre": "Muzzarella",
        "descripcion": "Salsa de tomate y mozzarella fresca",
        "precioBase": 12000,
        "emoji": "🍕",
        "imagen": "imagenes/productos/pizza-esp.jpg",
        "disponible": true,
        "filtroCombo": "comun"
      },
      {
        "id": "piz-02",
        "nombre": "Especial",
        "descripcion": "Muzzarella con rodajas de Jamon Cocido",
        "precioBase": 15000,
        "emoji": "🍕",
        "imagen": "imagenes/productos/pizza-esp.jpg",
        "disponible": true,
        "filtroCombo": "Especial"
      }
    ]
  },

  // CATEGORÍA: BEBIDAS
  {
    "id": "cat-bebidas",
    "nombre": "Bebidas",
    "emoji": "🥤",
    "descripcion": "Refrescate con nuestras bebidas",
    "productos": [
      {
        "id": "beb-01",
        "nombre": "Lata de Pepsi",
        "descripcion": "Pepsi 354ml bien fría",
        "precioBase": 1,
        "emoji": "🥤",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtKLsa2gKyrEaOasHo37K4dX3DfeOA8Y0pw&s",
        "disponible": true
      },
      {
        "id": "beb-02",
        "nombre": "Lata de 7Up",
        "descripcion": "7Up 354ml bien fría",
        "precioBase": 1,
        "emoji": "🥤",
        "imagen": "https://elnenearg.vtexassets.com/arquivos/ids/155546/SEVEN-UP-LATA-X-354CC-1-274.jpg?v=637889961703130000",
        "disponible": true
      },
      {
        "id": "beb-03",
        "nombre": "7Up 1.5lt",
        "descripcion": "7Up 1.5 litros",
        "precioBase": 1,
        "emoji": "🥤",
        "imagen": "https://cdn.batitienda.com/baticloud/images/product_picture_21d6b16212b9460a882bbe40943b1d09_638563004241190592_0_m.jpg",
        "disponible": true
      },
      {
        "id": "beb-04",
        "nombre": "Pepsi 1.5lt",
        "descripcion": "Pepsi 1.5 litros",
        "precioBase": 1,
        "emoji": "🥤",
        "imagen": "https://delimart.com.ar/user-content/8447fa3a-32f0-412e-8d20-99e8d881413a.jpg",
        "disponible": true
      },
      {
        "id": "beb-04",
        "nombre": "Pepsi Black 1.5lt",
        "descripcion": "Pepsi Black 1.5 litros",
        "precioBase": 1,
        "emoji": "🥤",
        "imagen": "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3080434_f.jpg",
        "disponible": true
      },
      {
        "id": "beb-05",
        "nombre": "Paso de los Toros 1.5lt",
        "descripcion": "Paso de los Toros 1.5 litros",
        "precioBase": 1,
        "emoji": "🥤",
        "imagen": "https://tercertiempo.tiendasi.ar/images/cache/tpt700x700/2022/04/tercertiempo/entities/paso-de-los-toros-15l-28084240.jpg",
        "disponible": true
      },
      {
        "id": "beb-06",
        "nombre": "Corona 330ml",
        "descripcion": "Botella de Corona 330ml",
        "precioBase": 1,
        "emoji": "🍺",
        "imagen": "https://acdn-us.mitiendanube.com/stores/001/926/291/products/cerveza-corona-botella-no-retornable-330-ml-_2-896ac98079b1056f8b17168431763884-1024-1024.webp",
        "disponible": true
      },
      {
        "id": "beb-07",
        "nombre": "Corona 710ml",
        "descripcion": "Botella de Corona 710ml",
        "precioBase": 1,
        "emoji": "🍺",
        "imagen": "https://acdn-us.mitiendanube.com/stores/001/926/291/products/cerveza-corona-botella-no-retornable-330-ml-_2-896ac98079b1056f8b17168431763884-1024-1024.webp",
        "disponible": true
      },
      {
        "id": "beb-08",
        "nombre": "Stella Noire Lata",
        "descripcion": "Lata de Stella Artois Noire",
        "precioBase": 1,
        "emoji": "🍺",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo2k7D8T25kFXuFsUYTEjmcmV2Vw25dtCpBg&s",
        "disponible": true
      },
      {
        "id": "beb-09",
        "nombre": "Budweiser",
        "descripcion": "Botella de Budweiser",
        "precioBase": 1,
        "emoji": "🍺",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU6w9a_Szlwu0vdvA7TEj1oACzm6wfvswYSg&s",
        "disponible": true
      }
    ]
  }
];
