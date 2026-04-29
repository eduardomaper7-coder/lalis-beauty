const Location = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 text-center">
        
        {/* Título */}
        <h2 className="text-3xl font-extrabold text-green-700 sm:text-4xl">
          Ven a visitarnos
        </h2>

        {/* Dirección */}
        <p className="mt-6 text-lg font-medium text-neutral-700">
          C. de Nicolás Sánchez, 4, 1º Izquierda, Usera, 28026 Madrid
        </p>

        {/* Mapa */}
        <div className="mt-10 overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(22,101,52,0.1)]">
          <iframe
            src="https://www.google.com/maps?q=C.%20de%20Nicol%C3%A1s%20S%C3%A1nchez%2C%204%2C%201%C2%BA%20Izquierda%2C%20Usera%2C%2028026%20Madrid&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Clínica Odontológica Dra. Anna Tavarone"
          ></iframe>
        </div>

      </div>
    </section>
  )
}

export default Location