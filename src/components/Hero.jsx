const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-dentista-usera.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay verde suave */}
      <div className="absolute inset-0 bg-green-900/45"></div>

      {/* Degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-700/20 via-green-800/35 to-green-950/75"></div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pb-16 pt-28 text-center">
        
        <div className="mb-6 flex flex-col items-center">
          <span className="text-2xl font-light tracking-widest text-white/80">
            CLÍNICA ODONTOLÓGICA
          </span>

          <span className="text-3xl font-extrabold tracking-wide text-white md:text-4xl">
            Dra. Anna Tavarone
          </span>
        </div>

        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-white sm:text-6xl md:text-7xl">
          Clínica dental en Usera
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-9 text-white/90 sm:text-xl">
          Cuidamos tu salud bucodental con tratamientos personalizados,
          atención cercana y un enfoque profesional para ayudarte a mantener
          una sonrisa sana y bonita.
        </p>

        <div className="mt-10">
          <div className="rounded-2xl bg-white/95 px-8 py-6 shadow-xl backdrop-blur">
            <p className="text-base font-medium text-green-700">
              Pide cita llamando al
            </p>

            <a
              href="tel:914763069"
              className="mt-2 block text-2xl font-extrabold text-green-700 hover:underline"
            >
              914 76 30 69
            </a>
          </div>
        </div>

        <a
          href="#servicios"
          className="mt-6 inline-flex items-center rounded-xl border border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-green-700"
        >
          Nuestros servicios
        </a>

        <a
          href="#servicios"
          className="mt-20 inline-flex flex-col items-center text-base font-medium text-white"
        >
          Descubre más
          <span className="mt-2 text-2xl">⌄</span>
        </a>
      </div>
    </section>
  )
}

export default Hero