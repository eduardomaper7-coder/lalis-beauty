const plans = [
  {
    title: 'Tratamientos dentales',
    price: 'A consultar',
    subtitle: 'Presupuesto personalizado según tu caso',
    badge: '',
  },
  {
    title: 'Odontología estética',
    price: 'A consultar',
    subtitle: 'Valoración individual y plan adaptado',
    badge: '',
  },
  {
    title: 'Revisiones y salud bucodental',
    price: 'A consultar',
    subtitle: 'Te informamos antes de empezar cualquier tratamiento',
    badge: '',
  },
]

const conditions = [
  'Cada tratamiento requiere una valoración previa personalizada.',
  'El presupuesto puede variar según las necesidades de cada paciente.',
  'Antes de comenzar, te explicaremos el tratamiento y las opciones disponibles.',
  'La anulación de una cita deberá ser notificada con antelación.',
  'Para más información, contacta con la clínica.',
]

const Pricing = () => {
  return (
    <section id="tarifas" className="scroll-mt-28 bg-[#f6fbf7] py-24 pb-12">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Título */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-green-700 sm:text-4xl">
            Nuestras tarifas
          </h2>

          <p className="mt-4 text-lg text-neutral-600">
            Ofrecemos presupuestos personalizados según tus necesidades
          </p>
        </div>

        {/* Planes */}
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <article
              key={index}
              className="rounded-xl bg-white px-8 py-10 text-center shadow-[0_10px_30px_rgba(22,101,52,0.08)] transition hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(22,101,52,0.12)]"
            >
              <h3 className="text-2xl font-extrabold text-green-700">
                {plan.title}
              </h3>

              <p className="mt-5 text-4xl font-extrabold tracking-tight text-green-700">
                {plan.price}
              </p>

              <p className="mt-4 text-lg text-neutral-600">
                {plan.subtitle}
              </p>

              {plan.badge && (
                <div className="mt-5">
                  <span className="inline-flex rounded-full bg-green-700 px-4 py-1.5 text-sm font-bold text-white">
                    {plan.badge}
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Condiciones */}
        <div className="mx-auto mt-12 max-w-4xl rounded-xl bg-white px-8 py-10 shadow-[0_10px_30px_rgba(22,101,52,0.08)]">
          <h3 className="text-center text-2xl font-extrabold text-green-700">
            Condiciones Generales
          </h3>

          <div className="mt-8 space-y-5">
            {conditions.map((condition, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="mt-1 text-xl font-bold text-green-700">✓</span>
                <p className="text-lg leading-8 text-neutral-700">
                  {condition}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Pricing