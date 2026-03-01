class MainHeader extends HTMLElement {
    connectedCallback() {
        // 1. Obtener el path actual y normalizarlo (quitar barra final si existe)
        let currentPath = window.location.pathname;
        if (currentPath.endsWith('/') && currentPath.length > 1) {
            currentPath = currentPath.slice(0, -1);
        }

        this.innerHTML = `
        <div class="container-fluid bg-dark">
            <div class="row py-2 px-lg-5">
                <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                    <div class="d-inline-flex align-items-center text-white">
                        <small><i class="fa fa-phone-alt mr-1"></i>+51 957 098 186</small>
                        <small class="px-3">|</small>
                        <small><i class="fa fa-envelope mr-1"></i>contacto@ivr.pe</small>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid p-0">
            <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
                <a href="/" class="navbar-brand ml-lg-3">
                    <img height="70px" src="/img/logo.png" alt="Logo">
                </a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                    <div class="navbar-nav m-auto py-0">
                        <a href="/" class="nav-item nav-link">Inicio</a>
                        <a href="/nosotros" class="nav-item nav-link">Nosotros</a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" id="servicesDropdown" data-toggle="dropdown">Servicios</a>
                            <div class="dropdown-menu rounded-0 m-0">
                                <a href="/monitoreo-ocupacional" class="dropdown-item">Monitoreo ocupacional</a>
                                <a href="/monitoreo-ambiental" class="dropdown-item">Monitoreo ambiental</a>
                                <a href="/seguridad-y-salud-en-el-trabajo" class="dropdown-item">Seguridad y salud</a>
                                <a href="/sistema-integrado-de-gestion" class="dropdown-item">Sistema integrado</a>
                                <a href="/capacitaciones-y-cursos" class="dropdown-item">Capacitaciones</a>
                                <a href="/residuos-solidos" class="dropdown-item">Residuos sólidos</a>
                                <a href="/homologaciones" class="dropdown-item">Homologaciones</a>
                            </div>
                        </div>
                        <a href="/contacto" class="nav-item nav-link">Contacto</a>
                    </div>
                    <a href="/contacto" class="btn btn-primary py-2 px-4 d-none d-lg-block">Contáctanos</a>
                </div>
            </nav>
        </div>
        `;

        this.setActiveLink(currentPath);
    }

    setActiveLink(currentPath) {
        const navLinks = this.querySelectorAll('.nav-link, .dropdown-item');
        
        let isServiceActive = false;
        const servicePaths = [
            "/monitoreo-ocupacional", "/monitoreo-ambiental", 
            "/seguridad-y-salud-en-el-trabajo", "/sistema-integrado-de-gestion",
            "/capacitaciones-y-cursos", "/residuos-solidos", "/homologaciones"
        ];

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (!href || href === "#") return;

            // Comparación: Si el path actual coincide con el href
            if (currentPath === href || (currentPath === "/index" && href === "/")) {
                link.classList.add('active');
                // Si es un item del dropdown, marcar que un servicio está activo
                if (servicePaths.includes(href)) isServiceActive = true;
            } else {
                link.classList.remove('active');
            }
        });

        // Activar el padre "Servicios" si una subpágina está activa
        if (isServiceActive) {
            const dropdown = this.querySelector('#servicesDropdown');
            if (dropdown) dropdown.classList.add('active');
        }
    }
}
customElements.define('main-header', MainHeader);