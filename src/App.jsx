import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CarritoProvider } from "./context/CarritoContext"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import CategoryTabs from "./components/CategoryTabs"
import { ProductCard } from "./components/ProductCard"
import CartSidebar from "./components/CartSidebar"
import Footer from "./components/Footer"
import { categorias } from "./data/productos"
import { config } from "./config/local"

const categoriasExtendidas = [];

// Las promociones ahora se cargan como una categoría más desde el CSV.

categoriasExtendidas.push({
  id: "cat-todos",
  nombre: "Todos",
  emoji: "🌟",
  descripcion: "Todo nuestro menú en un solo lugar",
  productos: categorias.flatMap(c => 
    c.productos.map(p => ({ ...p, categoriaOriginalId: c.id }))
  )
});

categoriasExtendidas.push(...categorias);

const animGrilla = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
}

function App() {
  // Inicialmente la primera categoría disponible
  const [categoriaActivaId, setCategoriaActivaId] = useState(() => 
    categoriasExtendidas.length > 0 ? categoriasExtendidas[0].id : null
  )

  // Filtro activo dentro de una categoría (si aplica)
  const [filtroActivo, setFiltroActivo] = useState("todas")

  // Reseteamos el filtro interno cada vez que cambiamos de pestaña
  useEffect(() => {
    setFiltroActivo("todas")
  }, [categoriaActivaId])

  // Buscar la data completa de la categoría activa actual
  const categoriaActiva = categoriasExtendidas.find((c) => c.id === categoriaActivaId)

  // Productos filtrados a renderizar en la grilla actual
  const productosRender = () => {
    if (!categoriaActiva) return []
    const prods = categoriaActiva.productos.filter((p) => p.disponible)
    
    // Si la categoría soporta filtros y el usuario seleccionó uno específico
    if (categoriaActiva.filtros && filtroActivo !== "todas") {
      return prods.filter((p) => p.etiquetaFiltro === filtroActivo)
    }
    
    return prods
  }

  return (
    <CarritoProvider>
      <Header />
      <CartSidebar />

      <main className="min-h-screen">
        <HeroSection />

        <section className="max-w-6xl mx-auto px-4 py-10">
          
          <CategoryTabs
            categorias={categoriasExtendidas}
            categoriaActivaId={categoriaActivaId}
            setCategoriaActivaId={setCategoriaActivaId}
          />

          <AnimatePresence mode="wait">
            {categoriaActiva && (
              <motion.div
                key={categoriaActiva.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                {/* Cabecera dinámica de la categoría */}
                <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                      <span>{categoriaActiva.emoji}</span>
                      <span>{categoriaActiva.nombre}</span>
                    </h2>
                    {categoriaActiva.descripcion && (
                      <p className="text-white/40 text-sm mt-1">
                        {categoriaActiva.descripcion}
                      </p>
                    )}
                  </div>

                  {/* Renderizar Filtros si la categoría los provee */}
                  {categoriaActiva.filtros && categoriaActiva.filtros.length > 0 && (
                    <div className="flex gap-2">
                      {categoriaActiva.filtros.map((f) => (
                        <button
                          key={f.id}
                          onClick={() => setFiltroActivo(f.id)}
                          className={`px-3 py-1 rounded-full text-xs font-semibold scrollbar-hide whitespace-nowrap transition-all duration-200 border
                            ${filtroActivo === f.id
                              ? "bg-naranja-500 border-naranja-500 text-white"
                              : "border-white/10 text-white/50 hover:border-white/30"
                            }`}
                        >
                          {f.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Grilla Genérica de Productos */}
                <motion.div
                  variants={animGrilla}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                >
                  {productosRender().map((producto) => (
                    <ProductCard 
                      key={producto.id} 
                      producto={producto} 
                      categoriaId={producto.categoriaOriginalId || categoriaActiva.id}
                    />
                  ))}
                  
                  {productosRender().length === 0 && (
                     <div className="col-span-full text-center py-10 text-white/30">
                       No hay productos disponibles en esta sección actualmente.
                     </div>
                  )}
                </motion.div>
                
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        <Footer />
      </main>
    </CarritoProvider>
  )
}

export default App
