const Navbar = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        
        {/* Logo texto */}
        <a href="#inicio" className="flex shrink-0 items-center">
          <span className="text-lg font-extrabold text-green-700 md:text-xl">
            Clínica Odontológica
            <span className="block text-sm font-semibold text-green-600">
              Dra. Anna Tavarone
            </span>
          </span>
        </a>

        {/* Menú */}
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#inicio" className="text-base font-semibold text-black hover:text-green-600">
            Inicio
          </a>
          <a href="#servicios" className="text-base font-semibold text-black hover:text-green-600">
            Servicios
          </a>
          <a href="#tarifas" className="text-base font-semibold text-black hover:text-green-600">
            Tarifas
          </a>
          <a href="#contacto" className="text-base font-semibold text-black hover:text-green-600">
            Contacto
          </a>
        </nav>

        {/* Botón llamar */}
        <a
          href="tel:914763069"
          className="inline-flex items-center rounded-lg bg-green-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-green-700"
        >
          Llama al 914 76 30 69
        </a>

      </div>
    </header>
  )
}

export default Navbar