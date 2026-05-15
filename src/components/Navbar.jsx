const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-[#8a6242] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-3 py-1 text-center text-[11px] sm:text-sm">
          <a
            href="https://www.google.com/maps/search/?api=1&query=C.+San+José+de+Calasanz+29+28902+Getafe+Madrid"
            target="_blank"
            rel="noopener noreferrer"
            className="truncate hover:underline"
          >
            📍 C. San José de Calasanz, 29, 28902 Getafe, Madrid
          </a>
        </div>
      </div>

      <header className="fixed left-0 top-[24px] z-40 w-full border-b border-black/10 bg-white/95 backdrop-blur-md sm:top-[28px]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          
          {/* Logo */}
          <a href="#inicio" className="flex min-w-0 items-center">
            <div className="max-w-[280px] leading-tight">
              
              <span className="block text-xs font-extrabold text-[#7a5638] md:hidden">
                LALIS BEAUTY SALON
              </span>

              <span className="block text-[11px] font-semibold text-[#b89574] whitespace-nowrap md:hidden">
                Trabajamos para resaltar tu belleza
              </span>

              <span className="hidden text-sm font-extrabold text-[#7a5638] md:block md:text-xl">
                LALIS BEAUTY SALON
              </span>

              <span className="hidden text-sm font-semibold text-[#b89574] whitespace-nowrap md:block">
                Trabajamos para resaltar tu belleza
              </span>
            </div>
          </a>

          {/* Navegación */}
          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="/#inicio"
              className="text-base font-semibold text-black hover:text-[#8a6242]"
            >
              Inicio
            </a>

            <a
              href="/#servicios"
              className="text-base font-semibold text-black hover:text-[#8a6242]"
            >
              Servicios
            </a>

            <a
              href="/#tarifas"
              className="text-base font-semibold text-black hover:text-[#8a6242]"
            >
              Precios
            </a>

            <a
              href="/#contacto"
              className="text-base font-semibold text-black hover:text-[#8a6242]"
            >
              Contacto
            </a>
          </nav>

          {/* Botón teléfono */}
          <a
            href="tel:647338753"
            className="whitespace-nowrap rounded-lg bg-[#8a6242] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#6f4e37] md:px-5 md:py-2.5 md:text-sm"
          >
            📞 <span className="hidden md:inline">Llama al</span> 647 338 753
          </a>
        </div>
      </header>
    </>
  )
}

export default Navbar