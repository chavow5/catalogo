import { motion } from "framer-motion"
import { FiGift } from "react-icons/fi"

const BannerSorteo = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 -mt-6 mb-8 relative z-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-r from-naranja-600/20 via-orange-500/10 to-oscuro-800 border border-naranja-500/30 rounded-2xl p-4 md:p-5 flex flex-col md:flex-row items-center gap-4 shadow-[0_0_30px_rgba(249,115,22,0.1)] relative overflow-hidden backdrop-blur-md"
      >
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-naranja-500/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="w-12 h-12 rounded-full bg-naranja-500/20 flex items-center justify-center shrink-0 border border-naranja-500/40">
          <FiGift className="text-naranja-400 text-2xl" />
        </div>
        
        <div className="text-center md:text-left flex-1">
          <h3 className="text-white font-bold text-lg mb-0.5">¡Participá de nuestro sorteo! 🎉</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Con cada pedido tenés chances de ganar. Al finalizar tu compra, <span className="text-naranja-300 font-semibold">ingresá tu DNI en el paso de confirmación</span> y participás automáticamente.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default BannerSorteo
