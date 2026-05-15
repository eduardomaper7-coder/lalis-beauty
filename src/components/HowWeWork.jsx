import {
  FaHandSparkles,
  FaSpa,
  FaPaintBrush,
  FaHeart,
} from 'react-icons/fa'

const features = [
  {
    icon: <FaHandSparkles />,
    title: 'Manicura profesional',
    text: 'Cuidamos tus uñas y manos con acabados elegantes, modernos y duraderos.',
  },
  {
    icon: <FaSpa />,
    title: 'Pedicura y bienestar',
    text: 'Tratamientos pensados para embellecer tus pies y aportar sensación de relajación y cuidado.',
  },
  {
    icon: <FaPaintBrush />,
    title: 'Diseños personalizados',
    text: 'Creamos estilos únicos y personalizados para resaltar tu belleza en cada detalle.',
  },
  {
    icon: <FaHeart />,
    title: 'Atención cercana',
    text: 'Te ofrecemos un trato amable y profesional para que disfrutes de una experiencia cómoda y agradable.',
  },
]

const HowWeWork = () => {
  return (
    <section className="bg-[#f4eadf] py-24">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Título */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-[#7a5638] sm:text-4xl">
            ¿Cómo trabajamos?
          </h2>

          <p className="mt-4 text-neutral-600">
            En Lalis Beauty Salon cuidamos cada detalle para ofrecerte una experiencia de belleza única
          </p>
        </div>

        {/* Caja principal */}
        <div className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(122,86,56,0.08)] md:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            
            {features.map((item, index) => (
              <div key={index} className="flex gap-5">
                
                {/* Icono */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#8a6242] text-xl text-white">
                  {item.icon}
                </div>

                {/* Texto */}
                <div>
                  <h3 className="text-lg font-extrabold text-[#7a5638]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-700">
                    {item.text}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default HowWeWork