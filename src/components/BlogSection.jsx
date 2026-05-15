const posts = [
  {
    date: '1 mayo, 2026',
    title: 'Cómo cuidar tus uñas para que luzcan perfectas',
    excerpt:
      'Descubre algunos consejos para mantener tus uñas sanas, fuertes y con un acabado bonito durante más tiempo.',
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80',
    href: '#',
  },
  {
    date: '24 abril, 2026',
    title: 'Manicura semipermanente: ventajas y duración',
    excerpt:
      'La manicura semipermanente es una de las opciones más elegidas por su brillo, resistencia y acabado elegante.',
    image:
      'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1200&q=80',
    href: '#',
  },
  {
    date: '18 abril, 2026',
    title: 'Pedicura estética: por qué cuidar tus pies',
    excerpt:
      'Una buena pedicura no solo mejora la estética de tus pies, también ayuda a mantener la piel cuidada y saludable.',
    image:
      'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1200&q=80',
    href: '#',
  },
]

const BlogSection = () => {
  return (
    <section className="bg-[#f4eadf] py-20">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Título */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-[#7a5638] sm:text-4xl">
            Blog
          </h2>

          <p className="mt-4 text-lg text-neutral-600">
            Consejos y tendencias para el cuidado de tus uñas y tu belleza
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_rgba(122,86,56,0.08)] transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(122,86,56,0.14)]"
            >
              
              {/* Imagen */}
              <div className="h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <p className="text-sm text-neutral-500">📅 {post.date}</p>

                <h3 className="mt-4 text-2xl font-extrabold leading-tight text-[#7a5638]">
                  {post.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-neutral-700">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex justify-end">
                  <a
                    href={post.href}
                    className="inline-flex items-center gap-2 text-lg font-medium text-[#c49a6c] transition hover:text-[#7a5638]"
                  >
                    Leer más <span className="text-2xl">›</span>
                  </a>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default BlogSection