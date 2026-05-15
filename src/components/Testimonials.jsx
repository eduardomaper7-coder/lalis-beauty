const reviews = [
  {
    text: 'Me encantó el resultado de mis uñas. El trato fue súper amable y el salón es precioso. Sin duda volveré.',
    name: 'Laura M.',
    time: 'Hace 2 semanas',
  },
  {
    text: 'Muy profesionales y cuidadosas. La manicura me duró muchísimo y quedé encantada con el diseño.',
    name: 'Sara P.',
    time: 'Hace 1 mes',
  },
  {
    text: 'El mejor salón de manicura y pedicura en Getafe. Ambiente agradable, puntualidad y atención excelente.',
    name: 'Andrea G.',
    time: 'Hace 3 semanas',
  },
]

const Testimonials = () => {
  return (
    <section className="bg-[#f4eadf] py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-[#7a5638] sm:text-4xl">
            Lo que dicen nuestras clientas
          </h2>

          <div className="mt-5 text-2xl tracking-[0.2em] text-[#E4B525]">
            ★★★★★
          </div>

          <p className="mt-4 text-lg text-neutral-600">
            Valoración 4,9 ⭐ en Google con 38 reseñas
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="flex min-h-[340px] flex-col rounded-xl bg-white p-6 shadow-[0_8px_24px_rgba(122,86,56,0.08)] sm:min-h-[360px] sm:p-7 transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(122,86,56,0.14)]"
            >
              <div className="mb-5 text-lg tracking-[0.18em] text-[#E4B525] sm:text-xl">
                ★★★★★
              </div>

              <p className="flex-1 text-sm leading-7 text-neutral-700 sm:text-[15px] sm:leading-8">
                {review.text}
              </p>

              <div className="mt-6 sm:mt-8">
                <p className="text-lg font-bold text-[#7a5638] sm:text-xl">
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