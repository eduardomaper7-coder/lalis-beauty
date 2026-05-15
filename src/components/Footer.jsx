import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#2b1f18] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          
          {/* Info */}
          <div>
            <div className="mb-6 leading-tight">
              <span className="block text-2xl font-extrabold text-white">
                LALIS BEAUTY SALON
              </span>
              <span className="block text-[#d8b894] text-lg font-semibold">
                Manicura y pedicura en Getafe
              </span>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-white/90">
              Salón de belleza en Getafe especializado en manicura, pedicura y
              cuidado estético. Trabajamos para resaltar tu belleza con atención
              cercana, profesional y personalizada.
            </p>

            <div className="mt-8 flex items-center gap-5">
              <a href="#" aria-label="Facebook" className="text-2xl text-[#d8b894] transition hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="text-2xl text-[#d8b894] transition hover:text-white">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div className="text-left md:text-right">
            <h3 className="text-3xl font-bold text-[#d8b894]">Contacto</h3>

            <div className="mt-6 space-y-4 text-lg leading-relaxed">
              <p>
                C. San José de Calasanz, 29<br />
                28902 Getafe, Madrid
              </p>

              <p>
                <a
                  href="tel:647338753"
                  className="whitespace-nowrap font-bold text-white transition hover:text-[#d8b894]"
                >
                  647 338 753
                </a>
              </p>

              <p>
                <a
                  href="mailto:info@lalisbeautysalon.com"
                  className="text-[#d8b894] transition hover:text-white"
                >
                  info@lalisbeautysalon.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-lg text-white/90">
            ¿Quieres pedir cita o más información?
          </p>

          <Link
            to="/#contacto"
            className="rounded-xl bg-[#8a6242] px-8 py-3 text-lg font-bold text-white transition hover:bg-[#6f4e37]"
          >
            Solicitar cita
          </Link>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 border-t border-white/15 pt-8 text-center">
          <p className="text-base text-white/80">
            © 2026 Lalis Beauty Salon. Todos los derechos reservados.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-[#d8b894]">
            <Link to="/legal" className="transition hover:text-white">
              Aviso legal · Privacidad · Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer