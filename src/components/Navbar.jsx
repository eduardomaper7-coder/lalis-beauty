const Navbar = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">

        {/* Logo */}
        <a href="#inicio" className="flex shrink-0 items-center">
          <div className="leading-tight">
            <span className="block text-sm font-extrabold text-green-700 md:text-xl">
              CLÍNICA DENTAL
            </span>

            <span className="hidden text-sm font-semibold text-green-600 md:block">
              Dra. Anna Tavarone · Usera
            </span>
          </div>
        </a>

        {/* MENÚ (solo escritorio) */}
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#inicio" className="text-base font-semibold text-black hover:text-green-600">
            Inicio
          </a>
          <a href="#servicios" className="text-base font-semibold text-black hover:text-green-600">
            Tratamientos
          </a>
          <a href="#tarifas" className="text-base font-semibold text-black hover:text-green-600">
            Precios
          </a>
          <a href="#contacto" className="text-base font-semibold text-black hover:text-green-600">
            Contacto
          </a>
        </nav>

        {/* Botón llamar */}
        <a
          href="tel:914763069"
          className="whitespace-nowrap rounded-lg bg-green-600 px-3 py-2 text-xs font-bold text-white transition hover:bg-green-700 md:px-5 md:py-2.5 md:text-sm"
        >
          📞 <span className="hidden md:inline">Llama al</span> 914 76 30 69
        </a>

      </div>
    </header>
  )
}

export default Navbar