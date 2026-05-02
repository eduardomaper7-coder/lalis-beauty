import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          
          {/* Info */}
          <div>
            <div className="mb-6 leading-tight">
              <span className="block text-2xl font-extrabold text-white">
                CLÍNICA DENTAL
              </span>
              <span className="block text-green-600 text-lg font-semibold">
                Dra. Anna Tavarone · Usera
              </span>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-white/90">
              Clínica dental en Usera con más de 30 años de experiencia. 
              Especialistas en tratamientos personalizados para cuidar tu salud 
              bucodental y mejorar tu sonrisa.
            </p>

            <div className="mt-8 flex items-center gap-5">
              <a href="#" aria-label="Facebook" className="text-2xl text-green-600 transition hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="text-2xl text-green-600 transition hover:text-white">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-2xl text-green-600 transition hover:text-white">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div className="text-left md:text-right">
            <h3 className="text-3xl font-bold text-green-600">Contacto</h3>

            <div className="mt-6 space-y-4 text-lg leading-relaxed">
              <p>
                C. de Nicolás Sánchez, 4, 1º Izquierda<br />
                Usera, 28026 Madrid
              </p>

              <p>
                <a
                  href="tel:914763069"
                  className="whitespace-nowrap font-bold text-white transition hover:text-green-600"
                >
                  914 76 30 69
                </a>
              </p>

              <p>
                <a
                  href="mailto:info@clinicadentalannarone.com"
                  className="text-green-600 transition hover:text-white"
                >
                  info@clinicadentalannarone.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* CTA extra (muy bueno para conversión) */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-lg text-white/90">
            ¿Necesitas pedir cita o más información?
          </p>

          <a
            href="/#contacto"
            className="rounded-xl bg-green-600 px-8 py-3 text-lg font-bold text-white transition hover:bg-green-700"
          >
            Solicitar cita
          </a>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 border-t border-white/15 pt-8 text-center">
          <p className="text-base text-white/80">
            © 2026 Clínica Dental Dra. Anna Tavarone · Usera. Todos los derechos reservados.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-green-600">
            <a href="#" className="transition hover:text-white">
              Política de cookies
            </a>
            <a href="#" className="transition hover:text-white">
              Política de privacidad
            </a>
            <a href="#" className="transition hover:text-white">
              Aviso legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer