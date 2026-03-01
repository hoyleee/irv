class MainHeader extends HTMLElement {
    connectedCallback() {
        // 1. Obtener la URL actual (ej: "nosotros" o "index.html")
        const path = window.location.pathname.split("/").pop();

        // Si estamos en la raíz o index.html, asegurar que apunte a index.html
        const currentPage = path === "" ? "index.html" : path;

        this.innerHTML = `
        <div class="container-fluid bg-dark">
            <div class="row py-2 px-lg-5">
                <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                    <div class="d-inline-flex align-items-center text-white">
                        <small><i class="fa fa-phone-alt mr-1 d-none d-sm-inline"></i>+51 957 098 186 | +51 927 640 467</small>
                        <small class="px-1 px-sm-3">|</small>
                        <small><i class="fa fa-envelope mr-1 d-none d-sm-inline"></i>contacto@ivr.pe</small>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid p-0">
            <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
                <a href="index.html" class="navbar-brand ml-lg-3">
                    <img height="70px" src="img/logo.png" alt="">
                </a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                    <div class="navbar-nav m-auto py-0">
                        <a href="index.html" class="nav-item nav-link">Inicio</a>
                        <a href="nosotros" class="nav-item nav-link">Nosotros</a>
                        
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" id="servicesDropdown" data-toggle="dropdown">Servicios</a>
                            <div class="dropdown-menu rounded-0 m-0">
                                <a href="monitoreo-ocupacional.html" class="dropdown-item">Monitoreo ocupacional</a>
                                <a href="monitoreo-ambiental.html" class="dropdown-item">Monitoreo ambiental</a>
                                <a href="seguridad-y-salud-en-el-trabajo.html" class="dropdown-item">Seguridad y saluda en el trabajo</a>
                                <a href="sistema-integrado-de-gestion.html" class="dropdown-item">Sistema integrado de gestión</a>
                                <a href="capacitaciones-y-cursos.html" class="dropdown-item">Capacitaciones y cursos</a>
                                <a href="residuos-solidos.html" class="dropdown-item">Residuos sólidos</a>
                                <a href="homologaciones.html" class="dropdown-item">Homologaciones</a>
                            </div>
                        </div>
                        
                        <a href="contacto.html" class="nav-item nav-link">Contacto</a>
                    </div>
                    <a href="contacto.html" class="btn btn-primary py-2 px-4 d-none d-lg-block">Contactanos</a>
                </div>
            </nav>
        </div>
        `;

        // 2. Lógica para agregar la clase "active"
        this.setActiveLink(currentPage);
    }

    setActiveLink(currentPage) {
        // Definir cuáles páginas pertenecen al menú de servicios
        const servicesPages = [
            "monitoreo-ocupacional.html",
            "monitoreo-ambiental.html",
            "seguridad-y-salud-en-el-trabajo.html",
            "sistema-integrado-de-gestion.html",
            "capacitaciones-y-cursos.html",
            "residuos-solidos.html",
            "homologaciones.html"
        ];

        // Buscar todos los enlaces directos
        const navLinks = this.querySelectorAll('.nav-link, .dropdown-item');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');

            // Si el href coincide exactamente, marcar como activo
            if (href === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Lógica especial para resaltar el dropdown de "Servicios"
        if (servicesPages.includes(currentPage)) {
            const dropdownToggle = this.querySelector('#servicesDropdown');
            if (dropdownToggle) {
                dropdownToggle.classList.add('active');
            }
        }
    }
}
customElements.define('main-header', MainHeader);