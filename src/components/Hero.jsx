const Hero = () => {
  const whatsappNumber = '34678518914'
  const whatsappMessage = encodeURIComponent(
    'Hola, quiero pedir cita en Clínica Dental Dra. Anna Tavarone.'
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-dentista-usera.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-green-900/45"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-green-700/20 via-green-800/35 to-green-950/75"></div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pb-16 pt-28 text-center">
        <div className="mb-6 flex flex-col items-center">
          <span className="text-2xl font-light tracking-widest text-white/80">
            CLÍNICA DENTAL EN USERA
          </span>

          <span className="text-3xl font-extrabold tracking-wide text-white md:text-4xl">
            Dra. Anna Tavarone
          </span>
        </div>

        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-white sm:text-6xl md:text-7xl">
          Dentista en Usera con 30 años de experiencia
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-9 text-white/90 sm:text-xl">
          Clínica Dental Dra. Anna Tavarone. Cuidamos tu salud bucodental con
          tratamientos personalizados, atención cercana y un equipo profesional
          acreditado por más de 30 años en Usera.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <span className="rounded-full bg-white/95 px-6 py-3 text-base font-bold text-green-700 shadow-lg">
            Radiografía y presupuesto gratis
          </span>

          <span className="rounded-full bg-white/95 px-6 py-3 text-base font-bold text-green-700 shadow-lg">
            30 años en Usera nos acreditan
          </span>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-green-500 px-8 py-4 text-lg font-extrabold text-white shadow-xl transition hover:bg-green-600"
            aria-label="Pedir cita por WhatsApp"
          >
            <img
              src="/whatsapp.png"
              alt=""
              className="h-7 w-7"
              aria-hidden="true"
            />
            Pedir cita por WhatsApp
          </a>

          <a
            href="tel:914763069"
            className="rounded-xl bg-white/95 px-8 py-4 text-lg font-extrabold text-green-700 shadow-xl transition hover:bg-white hover:underline"
            aria-label="Llamar a Clínica Dental Dra. Anna Tavarone"
          >
            Llamar al 914 76 30 69
          </a>
        </div>

        <a
          href="#servicios"
          className="mt-6 inline-flex items-center rounded-xl border border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-green-700"
        >
          Ver tratamientos dentales
        </a>

        <a
          href="#servicios"
          className="mt-20 inline-flex flex-col items-center text-base font-medium text-white"
        >
          Descubre más
          <span className="mt-2 text-2xl">⌄</span>
        </a>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-2xl transition hover:scale-110 hover:bg-green-600"
        aria-label="Escribir por WhatsApp a Clínica Dental Dra. Anna Tavarone"
      >
        <img
          src="/whatsapp.png"
          alt="WhatsApp"
          className="h-10 w-10"
        />
      </a>
    </section>
  )
}

export default Hero