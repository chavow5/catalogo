import { motion } from "framer-motion"
import { config } from "../config/local"

const HeroSection = () => {
  return (
    <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-16">

      {/* fondo degradado animado */}
      <div className="absolute inset-0 bg-gradient-to-b from-naranja-700/20 via-oscuro-900 to-oscuro-900" />

      {/* círculos decorativos de fondo */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-naranja-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-dorado-500/5 rounded-full blur-3xl" />

      {/* contenido principal */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">

        {/* ícono animado */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
          className="text-7xl mb-4 inline-block"
        >
          🥟
        </motion.div>

        {/* nombre del local */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-black text-gradient mb-3"
        >
          {config.nombreLocal}
        </motion.h1>

        {/* descripción */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg md:text-xl text-white/70 mb-2"
        >
          {config.descripcion}
        </motion.p>

        {/* eslogan */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-naranja-400 font-medium italic text-base md:text-lg"
        >
          "{config.eslogan}"
        </motion.p>

        {/* separador */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-naranja-500 to-transparent"
        />
      </div>
    </section>
  )
}

export default HeroSection
