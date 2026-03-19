import { GiFootprint } from "react-icons/gi"
import { FaWhatsapp, FaInstagram } from "react-icons/fa"
import { FiClock, FiMapPin } from "react-icons/fi"
import { config } from "../config/local"

//Footer del sitio

const Footer = () => {
  return (
    <footer className="border-t border-white/5 mt-16 py-10 px-4">
      <div className="max-w-4xl mx-auto">

        {/* logo + slogan */}
        <div className="flex flex-col items-center text-center gap-2 mb-8">
          <img
            src="/imagenes/logo/logo-lahuella.png"
            alt={`Logo de ${config.nombreLocal}`}
            className="w-10 h-10 object-contain rounded-full"
            onError={(e) => {
              e.target.style.display = 'none'; // ocultar si la imagen no existe
            }}
          />
          <span className="text-xl font-bold text-gradient">{config.nombreLocal}</span>
          <p className="text-white/40 text-sm italic">"{config.eslogan}"</p>
        </div>

        {/* info del local */}
        <div className="flex flex-wrap justify-center gap-6 text-white/50 text-sm mb-8">
          {/* horario */}
          <div className="flex items-center gap-1.5">
            <FiClock className="text-naranja-400 shrink-0" />
            <span>{config.horario}</span>
          </div>

          {/* dirección */}
          {config.direccion && (
            <div className="flex items-center gap-1.5">
              <FiMapPin className="text-naranja-400 shrink-0" />
              <span>{config.direccion}</span>
            </div>
          )}

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${config.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-green-400 transition-colors"
          >
            <FaWhatsapp className="text-green-400 shrink-0" />
            <span>{config.whatsapp}</span>
          </a>

          {/* Instagram */}
          {config.instagram && (
            <a
              href={`https://instagram.com/${config.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-pink-400 transition-colors"
            >
              <FaInstagram className="text-pink-400 shrink-0" />
              <span>@{config.instagram}</span>
            </a>
          )}
        </div>
        <div className="w-full bg-white dark:bg-slate-900 text-center text-xs text-white-500 py-2 shadow-inner mt-10">
          Desarrollado por David Ramírez — {config.nombreLocal} © {new Date().getFullYear()} ·{" "}
          <a
            href="https://wa.me/5493804201334"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mx-1"
          >
            📞 WhatsApp
          </a>
          |
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline mx-1"
          >
            📷 Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
