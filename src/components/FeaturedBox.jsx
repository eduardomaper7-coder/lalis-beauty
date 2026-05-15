const FeaturedBox = () => {
  return (
    <section className="bg-[#f4eadf] py-16 pb-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-[28px] bg-[#ead8c5] min-h-[auto] lg:min-h-[520px]">
          
          {/* Imagen */}
          <div className="h-[260px] w-full lg:h-[520px] lg:w-[62%]">
            <img
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80"
              alt="Manicura y pedicura en Lalis Beauty Salon Getafe"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Caja texto */}
          <div className="relative lg:absolute lg:right-12 lg:top-1/2 lg:w-[42%] lg:-translate-y-1/2">
            <div className="m-4 rounded-[24px] bg-white p-6 shadow-[0_20px_60px_rgba(122,86,56,0.14)] sm:p-8 md:p-10">
              
              <h2 className="text-2xl font-extrabold leading-tight text-[#7a5638] sm:text-4xl">
                Resalta tu belleza con una atención{' '}
                <span className="text-[#8a6242]">personalizada</span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-lg">
                En Lalis Beauty Salon cuidamos cada detalle para que tus manos y
                pies luzcan bonitos, elegantes y bien cuidados. Ofrecemos
                servicios de manicura, pedicura y belleza adaptados a tu estilo.
              </p>

              <div className="mt-6">
                <a
                  href="tel:647338753"
                  className="inline-flex rounded-xl bg-[#8a6242] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#6f4e37] sm:px-7 sm:py-4 sm:text-base"
                >
                  Pide cita llamando al 647 338 753
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedBox