const reviews = [
  {
    text: 'Anna es una excelente odontóloga, llevo años acudiendo a su consulta siempre que lo necesito y tanto sus servicios, como el trato recibido por ella y el personal de la clínica han sido excelentes. Totalmente recomendable.',
    name: 'Juan S.',
    time: 'Hace 1 año',
  },
  {
    text: 'Llevo yendo a esta clínica 20 años, creo que con eso es suficiente para decir que trabajan muy bien y solucionan tus problemas bucodentales sin dolor.',
    name: 'Esther P.',
    time: 'Hace 2 años',
  },
  {
    text: 'Excelente tanto en el trato como en el servicio, estoy encantada con ellos, son unos magnificos profesionales.',
    name: 'Ivan A.',
    time: 'Hace 1 mes',
  },
]

const Testimonials = () => {
  return (
    <section className="bg-[#eef0f1] py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
            Lo que dicen nuestros pacientes
          </h2>

          <div className="mt-5 text-2xl tracking-[0.2em] text-[#E4B525]">
            ★★★★★
          </div>

          <p className="mt-4 text-lg text-neutral-600">
            Valoración 4.6 en Google Reviews
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="flex min-h-[340px] flex-col rounded-xl bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:min-h-[360px] sm:p-7 transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
            >
              <div className="mb-5 text-lg tracking-[0.18em] text-[#E4B525] sm:text-xl">
                ★★★★★
              </div>

              <p className="flex-1 text-sm leading-7 text-neutral-700 sm:text-[15px] sm:leading-8">
                {review.text}
              </p>

              <div className="mt-6 sm:mt-8">
                <p className="text-lg font-bold text-black sm:text-xl">
                  {review.name}
                </p>
                <p className="mt-1 text-sm text-neutral-500">{review.time}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials