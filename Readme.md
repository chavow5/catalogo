# 📱 Catálogo Digital para Negocios (Pedidos vía WhatsApp)

Este es un catálogo digital moderno, rápido y optimizado para dispositivos móviles, diseñado para que pequeños negocios locales (pizzerías, hamburgueserías, tiendas de ropa, etc.) puedan mostrar sus productos y recibir pedidos directamente en su WhatsApp.

![Banner](https://img.shields.io/badge/Status-Desarrollo-orange?style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Características Principales

- 🚀 **Carga Ultra Rápida**: Construido con Vite y React.
- 📱 **Mobile First**: Interfaz intuitiva y premium optimizada para celulares.
- 🥟 **Gestor de Combos**: Sistema inteligente para armar promos (ej: elegir gustos de empanadas).
- 🏷️ **Filtros Dinámicos**: Categorización por tipos de productos.
- 💰 **Promociones Automáticas**: Aplica descuentos por cantidad configurables.
- 💬 **Pedido Directo**: Genera un mensaje de WhatsApp detallado con el total y los items elegidos.

---

## 🚀 Instalación y Desarrollo

1. **Clonar el repositorio:**
   ```bash
   git clone <url-del-repo>
   cd catalogo
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

---

## 🛠️ Configuración para un Nuevo Local

Para poner en marcha el catálogo para un cliente, solo necesitas modificar dos archivos principales:

1.  **`src/data/menu.csv`**: Aquí se cargan todas las categorías, productos, precios e imágenes.
2.  **`src/config/local.js`**: Aquí defines el nombre del local, su WhatsApp y las promos globales.

---

## 📝 Guía para Locales: ¿Qué pedirle al cliente?

Para configurar el catálogo correctamente, solicita los siguientes datos al dueño del local:

### 1. Información Básica
- **Nombre comercial** del local.
- **Número de WhatsApp** (con código de país, ej: `54911...`).
- **Logo o Imagen de marca** (preferentemente en formato PNG con fondo transparente).

### 2. Estructura del Menú
- **Categorías**: (ej: Pizzas, Empanadas, Bebidas, Postres).
- **Lista de Productos**: Por cada producto se necesita:
    - Nombre.
    - Descripción breve (ingredientes).
    - Precio base.
    - Si tiene variantes (ej: Pizza Grande vs. Chica).

### 3. Imágenes de Productos (Recomendación Técnica) 📸
Para que el catálogo se vea profesional y cargue rápido, pide las fotos con estas especificaciones:

- **Relación de Aspecto**: 1:1 (Cuadradas) o 4:3.
- **Tamaño Sugerido**: **800 x 800 px**.
- **Formato**: **WebP** (ideal) o **JPG**.
- **Fondo**: Se recomienda usar fondos limpios, buena iluminación y, si es posible, un estilo visual consistente entre todas las fotos.

### 4. Promociones y Combos
- ¿Hay descuento por cantidad? (ej: "Llevando una docena de empanadas, cada una sale X").
- ¿Hay combos armados? (ej: "Pizza + Gaseosa").

---

## 🏗️ Estructura del Proyecto

- `src/components`: UI modular (Botones, Modales, Tarjetas).
- `src/context`: Lógica del carrito y procesamiento de pedidos.
- `src/data`: Manejo del archivo CSV de productos.
- `src/config`: Parámetros personalizables por local.

---

*Desarrollado con ❤️ para potenciar el comercio local.*