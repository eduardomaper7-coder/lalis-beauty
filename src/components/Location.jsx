const Location = () => {
  return (
    <section className="bg-[#fdf8f3] py-24">
      <div className="mx-auto max-w-7xl px-4 text-center">
        
        {/* Título */}
        <h2 className="text-3xl font-extrabold text-[#7a5638] sm:text-4xl">
          Ven a visitarnos
        </h2>

        {/* Dirección */}
        <p className="mt-6 text-lg font-medium text-neutral-700">
          C. San José de Calasanz, 29, 28902 Getafe, Madrid
        </p>

        {/* Mapa */}
        <div className="mt-10 overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(122,86,56,0.10)]">
          <iframe
            src="https://www.google.com/maps?q=C.%20San%20Jos%C3%A9%20de%20Calasanz%2C%2029%2C%2028902%20Getafe%2C%20Madrid&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Lalis Beauty Salon"
          ></iframe>
        </div>

      </div>
    </section>
  )
}

export default Location