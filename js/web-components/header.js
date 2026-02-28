class MainHeader extends HTMLElement {
    connectedCallback() {
        // 1. Obtener la URL actual (ej: "about.html" o "index.html")
        const path = window.location.pathname.split("/").pop();

        // Si estamos en la raíz o index.html, asegurar que apunte a index.html
        const currentPage = path === "" ? "index.html" : path;

        this.innerHTML = `
        <div class="container-fluid bg-dark">
            <div class="row py-2 px-lg-5">
                <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                    <div class="d-inline-flex align-items-center text-white">
                        <small><i class="fa fa-phone-alt mr-2"></i>+51 957 098 186 | +51 927 640 467</small>
                        <small class="px-3">|</small>
                        <small><i class="fa fa-envelope mr-2"></i>contacto@ivr.pe</small>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid p-0">
            <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
                <a href="index.html" class="navbar-brand ml-lg-3">
                    <img height="70px" src="img/logo.jpg" alt="">
                </a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                    <div class="navbar-nav m-auto py-0">
                        <a href="index.html" class="nav-item nav-link">Inicio</a>
                        <a href="about.html" class="nav-item nav-link">Nosotros</a>
                        
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Servicios</a>
                            <div class="dropdown-menu rounded-0 m-0">
                                <a href="single.html" class="dropdown-item">Monitoreo ocupacional</a>
                                <a href="single.html" class="dropdown-item">Monitoreo ambiental</a>
                                <a href="single.html" class="dropdown-item">Seguridad y saluda en el trabajo</a>
                            </div>
                        </div>
                        
                        <a href="contact.html" class="nav-item nav-link">Contacto</a>
                    </div>
                    <a href="contact.html" class="btn btn-primary py-2 px-4 d-none d-lg-block">Contactanos</a>
                </div>
            </nav>
        </div>
        `;

        // 2. Lógica para agregar la clase "active"
        this.setActiveLink(currentPage);
    }

    setActiveLink(currentPage) {
        // Buscar todos los enlaces dentro del shadowRoot o el innerHTML del componente
        const navLinks = this.querySelectorAll('.nav-link, .dropdown-item');
        
        navLinks.forEach(link => {
            // Obtener el href del enlace
            const href = link.getAttribute('href');
            
            // Comparar si el href coincide con la página actual
            if (href === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}
customElements.define('main-header', MainHeader);