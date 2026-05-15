import { useEffect, useState } from 'react'

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=80',
    alt: 'Manicura profesional en Lalis Beauty Salon Getafe',
    badge: 'Salón de manicura y pedicura en Getafe',
  },
  {
    image:
      'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1000&q=80',
    alt: 'Pedicura estética en Lalis Beauty Salon Getafe',
    badge: 'Trabajamos para resaltar tu belleza',
  },
]

const WhyUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-[#f4eadf] py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <div className="relative">
          <span className="absolute -left-10 top-0 hidden rotate-180 text-xs font-bold uppercase tracking-[0.4em] text-[#8a6242] lg:block [writing-mode:vertical-rl]">
            Lalis Beauty Salon
          </span>

          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-[#8a6242] px-5 py-2 text-sm font-bold text-white">
              Nuestro valor
            </span>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-[#7a5638] sm:text-5xl">
              ¿Por qué elegir nuestro salón?
            </h2>

            <p className="mt-6 text-lg leading-9 text-neutral-700">
              En Lalis Beauty Salon cuidamos cada detalle para que tus manos y
              pies luzcan bonitos, cuidados y elegantes, con una atención
              cercana y profesional en Getafe.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-2xl font-extrabold text-[#7a5638]">
                  Manicura y pedicura profesional
                </h3>
                <p className="mt-2 text-lg text-neutral-600">
                  Realizamos servicios pensados para embellecer tus uñas, cuidar
                  tu piel y ofrecerte un acabado impecable.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-[#7a5638]">
                  Atención personalizada
                </h3>
                <p className="mt-2 text-lg text-neutral-600">
                  Te asesoramos según tu estilo, tus gustos y el resultado que
                  quieres conseguir.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-[#7a5638]">
                  Ambiente cómodo y cercano
                </h3>
                <p className="mt-2 text-lg text-neutral-600">
                  Queremos que disfrutes de tu momento de belleza en un espacio
                  agradable, tranquilo y cuidado.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-[#7a5638]">
                  Belleza en cada detalle
                </h3>
                <p className="mt-2 text-lg text-neutral-600">
                  Trabajamos para resaltar tu belleza con acabados elegantes,
                  modernos y adaptados a ti.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(122,86,56,0.18)]">
            <div className="relative h-[500px] w-full">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.image}
                  alt={slide.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                    currentSlide === index
                      ? 'scale-100 opacity-100'
                      : 'scale-105 opacity-0'
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-[#6f4e37]/20"></div>

              <div className="absolute left-6 top-6 z-10 max-w-sm rounded-2xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur-sm">
                <p className="text-base font-bold leading-7 text-[#7a5638]">
                  {slides[currentSlide].badge}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-[28px] bg-[#8a6242]"></div>

          <div className="mt-6 flex items-center justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full transition ${
                  currentSlide === index ? 'bg-[#8a6242]' : 'bg-black/20'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs