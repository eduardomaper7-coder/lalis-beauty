const Legal = () => {
  return (
    <main className="mx-auto max-w-4xl px-4 py-32 text-neutral-700">
      
      <h1 className="text-3xl font-extrabold text-green-700">
        Aviso Legal · Política de Privacidad · Cookies
      </h1>

      {/* AVISO LEGAL */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-green-700">Aviso Legal</h2>

        <p className="mt-4">
          Titular: Clínica Dental Dra. Anna Tavarone
        </p>
        <p>
          Dirección: C. de Nicolás Sánchez, 4, 1º Izquierda, Usera, 28026 Madrid
        </p>
        <p>
          Teléfono: 914 76 30 69
        </p>

        <p className="mt-4">
          El presente sitio web tiene como finalidad ofrecer información sobre los servicios de la clínica.
        </p>
      </section>

      {/* PRIVACIDAD */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-green-700">Política de Privacidad</h2>

        <p className="mt-4">
          En Clínica Dental Dra. Anna Tavarone tratamos los datos personales conforme al Reglamento General de Protección de Datos (RGPD).
        </p>

        <h3 className="mt-6 font-bold">Responsable del tratamiento</h3>
        <p>Clínica Dental Dra. Anna Tavarone</p>

        <h3 className="mt-6 font-bold">Finalidad</h3>
        <p>
          Gestionar las solicitudes de contacto y citas realizadas por los usuarios.
        </p>

        <h3 className="mt-6 font-bold">Legitimación</h3>
        <p>
          Consentimiento del usuario al contactar con la clínica.
        </p>

        <h3 className="mt-6 font-bold">Derechos</h3>
        <p>
          Puede acceder, rectificar o eliminar sus datos enviando una solicitud a la clínica.
        </p>
      </section>

      {/* COOKIES */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-green-700">Política de Cookies</h2>

        <p className="mt-4">
          Este sitio web utiliza cookies para mejorar la experiencia de navegación.
        </p>

        <h3 className="mt-6 font-bold">¿Qué son las cookies?</h3>
        <p>
          Son pequeños archivos que se almacenan en su dispositivo al visitar una web.
        </p>

        <h3 className="mt-6 font-bold">Tipos de cookies utilizadas</h3>
        <ul className="mt-2 list-disc pl-6">
          <li>Cookies técnicas necesarias para el funcionamiento del sitio</li>
          <li>Cookies de análisis para mejorar la experiencia del usuario</li>
        </ul>

        <h3 className="mt-6 font-bold">Gestión de cookies</h3>
        <p>
          Puede configurar su navegador para bloquear o eliminar las cookies en cualquier momento.
        </p>
      </section>

      {/* NOTA FINAL */}
      <p className="mt-12 text-sm text-neutral-500">
        *La información legal puede ser actualizada sin previo aviso.
      </p>

    </main>
  )
}

export default Legal