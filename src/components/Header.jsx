import { motion, AnimatePresence } from "framer-motion"
import { FiShoppingBag } from "react-icons/fi"
import { useCarrito } from "../context/CarritoContext"
import { config } from "../config/local"

//header

const Header = () => {
  const { cantidadTotal, setCarritoAbierto } = useCarrito()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-oscuro-800/90 backdrop-blur-md border-b border-naranja-500/20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* logo + nombre */}
        <div className="flex items-center gap-2">
          <img
            src="/imagenes/logo/logo-lahuella.png"
            alt={`Logo de ${config.nombreLocal}`}
            className="w-10 h-10 object-contain rounded-full"
            onError={(e) => {
              e.target.style.display = 'none'; // ocultar si la imagen no existe
            }}
          />
          <span className="text-xl font-bold text-gradient">
            {config.nombreLocal}
          </span>
        </div>

        {/* botón del carrito con badge */}
        <button
          onClick={() => setCarritoAbierto(true)}
          className="relative p-2 rounded-xl bg-glass hover:bg-naranja-500/10 transition-all duration-200"
          aria-label="Abrir carrito"
        >
          <FiShoppingBag className="text-2xl text-naranja-400" />

          {/* badge cantidad */}
          <AnimatePresence>
            {cantidadTotal > 0 && (
              <motion.span
                key="badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -top-1 -right-1 bg-naranja-500 text-white text-xs
                           font-bold w-5 h-5 rounded-full flex items-center justify-center"
              >
                {cantidadTotal}
              </motion.span>
            )}
          </AnimatePresence>
        </button>

      </div>
    </header>
  )
}

export default Header
