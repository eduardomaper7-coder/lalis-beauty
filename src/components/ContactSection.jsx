import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'

const ContactSection = () => {
  return (
    <section id="contacto" className="scroll-mt-28 bg-[#f6fbf7] py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-green-700 sm:text-4xl">
            Contacto
          </h2>

          <p className="mt-4 text-lg leading-8 text-neutral-600">
            Estamos aquí para ayudarte. Contacta con Clínica Dental Dra. Anna Tavarone para reservar tu cita.
          </p>
        </div>

        <div className="space-y-5">
          
          {/* Dirección */}
          <div className="flex gap-5 rounded-xl bg-white px-6 py-6 shadow-[0_10px_30px_rgba(22,101,52,0.08)]">
            <div className="pt-1 text-xl text-green-700">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-700">Dirección</h3>
              <p className="mt-2 text-lg text-neutral-600">
                C. de Nicolás Sánchez, 4, 1º Izquierda, Usera, 28026 Madrid
              </p>
            </div>
          </div>

          {/* Teléfono */}
          <div className="flex gap-5 rounded-xl bg-white px-6 py-6 shadow-[0_10px_30px_rgba(22,101,52,0.08)]">
            <div className="pt-1 text-xl text-green-700">
              <FaPhoneAlt />
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-700">Teléfono</h3>
              <a
                href="tel:914763069"
                className="mt-2 block whitespace-nowrap text-lg text-neutral-600 transition hover:text-green-700"
              >
                914 76 30 69
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-5 rounded-xl bg-white px-6 py-6 shadow-[0_10px_30px_rgba(22,101,52,0.08)]">
            <div className="pt-1 text-xl text-green-700">
              <FaEnvelope />
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-700">Email</h3>
              <a
                href="mailto:info@clinicaodontologica.com"
                className="mt-2 block text-lg text-neutral-600 transition hover:text-green-700"
              >
                info@clinicaodontologica.com
              </a>
            </div>
          </div>

          {/* Horario (ARREGLADO PARA MÓVIL) */}
          <div className="flex gap-4 rounded-xl bg-white px-4 py-6 shadow-[0_10px_30px_rgba(22,101,52,0.08)] sm:gap-5 sm:px-6">
            <div className="pt-1 text-xl text-green-700">
              <FaClock />
            </div>

            <div className="w-full min-w-0">
              <h3 className="text-xl font-bold text-green-700">Horario</h3>

              <div className="mt-4 space-y-4 text-base text-neutral-700 sm:text-lg">
                {[
                  ['Lunes', '11:00–14:00 · 16:30–20:00'],
                  ['Martes', '11:00–14:00 · 16:30–20:00'],
                  ['Miércoles', '11:00–14:00 · 16:30–20:00'],
                  ['Jueves', '11:00–14:00 · 16:30–20:00'],
                  ['Viernes', '11:00–14:00 · 16:30–20:00'],
                  ['Sábado', 'Cerrado'],
                  ['Domingo', 'Cerrado'],
                ].map(([day, hours]) => (
                  <div
                    key={day}
                    className="flex flex-col border-b border-green-100 pb-3 last:border-b-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                  >
                    <span className="font-semibold text-green-700">{day}</span>
                    <span className="mt-1 leading-7 text-neutral-700 sm:mt-0 sm:text-right">
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection