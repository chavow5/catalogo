import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiX, FiPlus, FiMinus, FiShoppingBag } from "react-icons/fi"
import { useCarrito } from "../context/CarritoContext"
import { categorias } from "../data/productos"
import toast from "react-hot-toast"

const ComboBuilderModal = ({ productoCombo, onClose }) => {
  const { agregarItem } = useCarrito()
  const [selecciones, setSelecciones] = useState({})

  if (!productoCombo) return null

  // Buscar las opciones de las que se puede elegir 
  // (Filtramos opciones que no sean otros combos)
  const categoriaOpciones = categorias.find((c) => c.id === productoCombo.opcionesDe)
  const opciones = categoriaOpciones ? categoriaOpciones.productos.filter((p) => p.tipo !== "combo" && p.disponible) : []

  const totalSeleccionado = Object.values(selecciones).reduce((acc, current) => acc + current, 0)
  const faltan = productoCombo.cantidadCombo - totalSeleccionado
  const completado = faltan === 0

  const handleModificar = (idProducto, cantidadCambiante) => {
    setSelecciones((prev) => {
      const actual = prev[idProducto] || 0
      const nueva = actual + cantidadCambiante

      // No podemos bajar de 0
      if (nueva < 0) return prev
      // No podemos pasarnos del maximo del combo si intentamos sumar
      if (cantidadCambiante > 0 && faltan <= 0) return prev

      const nuevoEstado = { ...prev, [idProducto]: nueva }
      if (nueva === 0) delete nuevoEstado[idProducto]
      
      return nuevoEstado
    })
  }

  const handleAgregarAlCarrito = () => {
    if (!completado) return

    // Generamos un string con el resumen de opciones para armar el mensaje y carrito
    // Ej: "4 Carne, 2 Jamón"
    const detalles = Object.entries(selecciones)
      .filter(([_, cant]) => cant > 0)
      .map(([idProd, cant]) => {
        const op = opciones.find(o => o.id === idProd)
        return `${cant} ${op.nombre}`
      })
      .join(", ")

    // Le pasamos el string como 'variante' al carrito para que lo guarde correctamente
    const itemEnCarrito = {
      ...productoCombo,
      precio: productoCombo.precioBase,
    }

    agregarItem(itemEnCarrito, 1, detalles)
    toast.success(`${productoCombo.emoji} ¡${productoCombo.nombre} agregado!`)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="relative z-10 max-w-lg w-full bg-oscuro-800 rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col max-h-[90vh]"
      >
        {/* Cabecera */}
        <div className="p-6 border-b border-white/5 bg-oscuro-900 sticky top-0 z-20">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/50 hover:text-white bg-white/5 p-2 rounded-full transition-colors"
          >
            <FiX size={20} />
          </button>
          
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 pr-8">
            <span>{productoCombo.emoji}</span>
            <span>Armá tu {productoCombo.nombre}</span>
          </h2>
          <p className="text-white/60 text-sm">
            Elegí {productoCombo.cantidadCombo} unidades. 
            {faltan > 0 
              ? <span className="text-naranja-400 font-semibold ml-1">Faltan {faltan}</span>
              : <span className="text-green-400 font-semibold ml-1">¡Listo!</span>
            }
          </p>
        </div>

        {/* Lista de Opciones */}
        <div className="p-4 overflow-y-auto hidden-scrollbar flex flex-col gap-3">
          {opciones.map((op) => {
            const cantOpcion = selecciones[op.id] || 0
            return (
              <div 
                key={op.id} 
                className={`flex items-center justify-between p-3 rounded-2xl border transition-colors
                  ${cantOpcion > 0 ? "bg-naranja-500/10 border-naranja-500/30" : "bg-white/5 border-white/5"}`}
              >
                <div className="flex-1 pr-4">
                  <h4 className="font-bold text-white text-sm">{op.nombre}</h4>
                  {op.descripcion && <p className="text-white/40 text-xs mt-0.5 leading-tight">{op.descripcion}</p>}
                </div>
                
                {/* Controles de Cantidad */}
                <div className="flex items-center gap-2 bg-oscuro-900 rounded-xl px-2 py-1 border border-white/5">
                  <button
                    onClick={() => handleModificar(op.id, -1)}
                    disabled={cantOpcion === 0}
                    className="text-white/60 hover:text-white p-1.5 disabled:opacity-30 transition-colors"
                  >
                    <FiMinus size={16} />
                  </button>
                  <span className="text-white font-bold text-sm w-5 text-center">{cantOpcion}</span>
                  <button
                    onClick={() => handleModificar(op.id, 1)}
                    disabled={faltan === 0}
                    className="text-white/60 hover:text-white p-1.5 disabled:opacity-30 transition-colors"
                  >
                    <FiPlus size={16} />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer Acción */}
        <div className="p-5 border-t border-white/5 bg-oscuro-900 sticky bottom-0 z-20">
          <div className="flex items-center justify-between mb-4">
            <span className="text-white/60 text-sm">Total del combo</span>
            <span className="text-naranja-400 font-bold text-xl">${productoCombo.precioBase.toLocaleString("es-AR")}</span>
          </div>

          <motion.button
            whileTap={completado ? { scale: 0.97 } : {}}
            onClick={handleAgregarAlCarrito}
            disabled={!completado}
            className={`w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all
              ${completado 
                ? "bg-naranja-500 hover:bg-naranja-600 text-white shadow-lg shadow-naranja-500/25" 
                : "bg-white/10 text-white/40 cursor-not-allowed"
              }`}
          >
            <FiShoppingBag size={18} />
            {completado ? "Agregar al pedido" : `Seleccioná ${faltan} más`}
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default ComboBuilderModal
