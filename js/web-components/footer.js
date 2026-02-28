class MainFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      
    <!-- Footer Start -->
    <div class="container-fluid bg-dark text-white   py-5 px-sm-3 px-md-5">
        <div class="row  ">
            <div class="col-lg-7 col-md-6">
                <div class="row">
                    <div class="col-md-6 mb-5">
                        <h3 class="text-primary mb-4">Informes</h3>
                        <p><i class="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                        <p><i class="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                        <p><i class="fa fa-envelope mr-2"></i>info@example.com</p>
                        <div class="d-flex justify-content-start mt-4">
                            <a class="btn btn-outline-light btn-social mr-2" href="#"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social mr-2" href="#"><i
                                    class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social mr-2" href="#"><i
                                    class="fab fa-linkedin-in"></i></a>
                            <a class="btn btn-outline-light btn-social" href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="col-md-6 mb-5">
                        <h3 class="text-primary mb-4">Quick Links</h3>
                        <div class="d-flex flex-column justify-content-start">
                            <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Inicio</a>
                            <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Nosotros</a>
                            <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Servicios</a>
                            
                            <a class="text-white" href="#"><i class="fa fa-angle-right mr-2"></i>Contacto</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 col-md-6  ">
                <h3 class="text-primary mb-4">CONTACTO</h3>
                <p>No dejes el cumplimiento normativo al azar. En IVR Services Generales, te ayudamos a
                        proteger a tus trabajadores, cuidar el medio ambiente y garantizar la continuidad de tu negocio
                        con nuestro staff multidisciplinario de expertos.</p>
                <div class="w-100">
                   <form class=" ">
                            <div class="form-group">
                                <input type="text" class="form-control border-0 p-4" placeholder="Tu nombre"
                                    required="required" />
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control border-0 p-4" placeholder="Tu Email"
                                    required="required" />
                            </div>

                            <div class="form-group">
                                <select class="custom-select border-0 px-4" style="height: 47px;">
                                    <option selected>Servicio</option>
                                    <option>Monitoreo ocupacional</option>
                                    <option>Monitoreo ambiental</option>
                                    <option>Seguridad y saluda en el trabajo</option>
                                    <option>Sistema integrado de gestión</option>
                                    <option>Capacitaciones y cursos</option>
                                    <option>Residuos sólidos</option>
                                    <option>Homologaciones</option>
                                    <option>Otros</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <textarea placeholder="Cuentanos más" class="form-control border-0 p-4" name=""
                                    id=""></textarea>
                            </div>
                            <div>
                                <button class="btn  btn-primary btn-block border-0 py-3" type="submit">Hablar con un
                                    Consultor</button>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    </div>
   
    <!-- Footer End -->


    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary back-to-top"><i class="fa fa-angle-double-up"></i></a>
        `;
    }
}
customElements.define('main-footer', MainFooter);