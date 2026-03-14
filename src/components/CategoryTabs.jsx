import { motion } from "framer-motion"

const CategoryTabs = ({ categorias, categoriaActivaId, setCategoriaActivaId }) => {
  if (!categorias || categorias.length === 0) return null

  return (
    <div className="flex justify-center mb-8 px-4 relative z-20">
      <div className="bg-oscuro-700 p-1 rounded-2xl flex gap-1 border border-white/5 overflow-x-auto snap-x scrollbar-hide">

        {categorias.map((cat) => {
          const activo = categoriaActivaId === cat.id
          return (
            <button
              key={cat.id}
              onClick={() => setCategoriaActivaId(cat.id)}
              className="relative px-6 py-2.5 rounded-xl font-semibold text-sm md:text-base transition-colors duration-200 snap-center whitespace-nowrap"
            >
              {/* underline animado debajo del tab activo */}
              {activo && (
                <motion.div
                  layoutId="tab-activo"
                  className="absolute inset-0 bg-naranja-500 rounded-xl"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}

              {/* texto del tab */}
              <span className={`relative z-10 flex items-center gap-1.5 ${activo ? "text-white" : "text-white/50 hover:text-white/80"}`}>
                <span>{cat.emoji}</span>
                <span>{cat.nombre}</span>
              </span>
            </button>
          )
        })}

      </div>
    </div>
  )
}

export default CategoryTabs
