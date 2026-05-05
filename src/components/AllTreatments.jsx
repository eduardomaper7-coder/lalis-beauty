const treatments = [
  {
    name: 'Implantes + corona',
    price: '1.500 €',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Endodoncia',
    price: '220 €',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Fundas porcelana',
    price: '240 €',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Fundas zirconio',
    price: '420 €',
    image: '/fundas-zirconio-usera.jpg',
  },
  {
    name: 'Frenectomia (cirugía de frenillo)',
    price: '400 €',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Tratamiento encías',
    price: '400 €',
    image: '/tratamiento-encias-usera.jpg',
    note: 'Raspajes',
  },
  {
    name: 'Blanqueamiento',
    price: '350 €',
    image: '/blanqueamiento-dental-usera.jpg',
  },
  {
    name: 'Prótesis total',
    price: '950 €',
    image: '/protesis-total-usera.jpg',
  },
  {
    name: 'Limpieza',
    price: '70 €',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Empastes',
    price: '70 €',
    image: '/empastes-usera.jfif',
  },
  {
    name: 'Cirugía',
    price: '180 €',
    image: '/cirugia-dental-usera.jpg',
    note: 'Injerto incluido',
  },
  {
    name: 'Exodoncia',
    price: '70 €',
    image: '/exodoncia-usera.webp',
  },
]

const AllTreatments = () => {
  return (
    <main className="bg-[#f6fbf7] pt-32 pb-20">
      <section className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-green-700 px-5 py-2 text-sm font-bold text-white">
            Radiografía y presupuesto gratis
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-green-700 sm:text-5xl">
            Tratamientos dentales y precios orientativos
          </h1>

          <p className="mt-5 text-lg leading-8 text-neutral-700">
            Consulta nuestros tratamientos más habituales. Para recibir una
            valoración personalizada, consulte con la doctora o contacte con
            nuestra clínica.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_rgba(22,101,52,0.10)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(22,101,52,0.16)]"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={treatment.image}
                  alt={`${treatment.name} en Usera - Clínica Dental Dra. Anna Tavarone`}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-extrabold text-green-700">
                      {treatment.name}
                    </h2>

                    {treatment.note && (
                      <p className="mt-1 text-sm font-semibold text-neutral-500">
                        {treatment.note}
                      </p>
                    )}
                  </div>

                  <p className="shrink-0 rounded-xl bg-green-100 px-4 py-2 text-xl font-extrabold text-green-700">
                    {treatment.price}
                  </p>
                </div>

                <a
                  href="/#contacto"
                  className="mt-6 inline-flex font-bold text-green-700 transition hover:text-green-900"
                >
                  Más información →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-5xl rounded-3xl bg-white px-8 py-10 text-center shadow-[0_10px_30px_rgba(22,101,52,0.10)]">
          <h2 className="text-3xl font-extrabold text-green-700">
            ¿Necesitas otro tratamiento?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-neutral-700">
            Si necesita un tratamiento adicional que no aparece en esta página,
            no dude en consultar con nuestro equipo. Le atenderemos personalmente
            en nuestra clínica o llamando al{' '}
            <a
              href="tel:914763069"
              className="inline-block whitespace-nowrap font-extrabold text-green-700 hover:underline"
            >
              914 76 30 69
            </a>
            .
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/#contacto"
              className="rounded-xl bg-green-700 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-green-800"
            >
              Más información
            </a>

            <a
              href="tel:914763069"
              className="rounded-xl border-2 border-green-700 px-8 py-4 text-lg font-bold text-green-700 transition hover:bg-green-700 hover:text-white"
            >
              Llamar ahora
            </a>
          </div>

          <p className="mt-8 text-sm text-neutral-500">
            *Los precios y servicios pueden sufrir cambios. Los importes son
            orientativos y pueden variar según valoración profesional.
          </p>
        </div>
      </section>
    </main>
  )
}

export default AllTreatments