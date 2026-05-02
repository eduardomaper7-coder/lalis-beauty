import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Fundas de porcelana y siliconio',
    description:
      'Soluciones estéticas y funcionales para proteger dientes debilitados, mejorar la mordida y recuperar una sonrisa natural.',
    image: '/funda-porcelana-siliconio-usera.jpg',
  },
  {
    title: 'Tratamiento de encías',
    description:
      'Diagnóstico y tratamiento de problemas periodontales para cuidar tus encías, prevenir molestias y conservar tus dientes.',
    image: '/tratamiento-encias-usera.webp',
  },
  {
    title: 'Implantes dentales',
    description:
      'Recupera piezas dentales perdidas con soluciones seguras, estables y pensadas para mejorar la masticación y la estética.',
    image: '/implantes-dentales-usera.jpg',
  },
  {
    title: 'Endodoncia',
    description:
      'Tratamiento para salvar dientes dañados o infectados, aliviar el dolor y evitar la extracción cuando es posible.',
    image: '/endodoncia-usera.png',
  },
]

const Treatments = () => {
  return (
    <section id="servicios" className="scroll-mt-28 bg-[#f6fbf7] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-green-600">
            Tratamientos destacados
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-green-700 sm:text-4xl">
            Servicios dentales en Usera
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-neutral-600 sm:text-xl">
            En Clínica Dental Dra. Anna Tavarone destacamos algunos de nuestros
            tratamientos más solicitados, aunque contamos con muchos más
            servicios para cuidar tu salud bucodental.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(22,101,52,0.10)] transition hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(22,101,52,0.16)] sm:flex-row"
            >
              <div className="h-56 w-full sm:h-auto sm:w-[40%]">
                <img
                  src={service.image}
                  alt={`${service.title} en Usera - Clínica Dental Dra. Anna Tavarone`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex w-full flex-col justify-between p-6 sm:w-[60%]">
                <div>
                  <h3 className="text-xl font-extrabold text-green-700 sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-base leading-8 text-neutral-600 sm:text-lg">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6">
                  <Link
                    to="/tratamientos"
                    className="inline-flex items-center gap-2 text-base font-semibold text-green-700 transition hover:text-green-900"
                  >
                    Más información →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-lg font-medium text-neutral-700">
            ¿Buscas otro tratamiento dental?
          </p>

          <Link
            to="/tratamientos"
            className="mt-5 inline-flex items-center rounded-xl bg-green-700 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-green-800"
          >
            Ver todos los tratamientos
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Treatments