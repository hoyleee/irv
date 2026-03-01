function enviarWhatsApp() {
    const nombre = document.getElementById('contact_name_input').value;
    const email = document.getElementById('contact_email_input').value;
    const servicio = document.getElementById('contact_service_input').value;
    const mensaje = document.getElementById('contact_detail_input').value;
    const telefono = "+51991749806"; // Tu número con código de país

    const mensajeTexto = `Hola, mi nombre es ${nombre}, estoy buscando informacíón por el servicio de *${servicio}*.
${mensaje ? mensaje + '.' : ''}
Podrian enviarme mas información a ${email}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensajeTexto)}`;

    window.open(url, '_blank');
}



class ContactForm extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      
    <form  onsubmit="enviarWhatsApp(event)">
                            <div class="form-group">
                                <input type="text" class="form-control border-0 p-4" placeholder="Tu nombre" id="contact_name_input"
                                    required="required" />
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control border-0 p-4" placeholder="Tu Email" id="contact_email_input"
                                    required="required" />
                            </div>

                            <div class="form-group">
                                <select class="custom-select border-0 px-4" style="height: 47px;" id="contact_service_input"  required="required">
                                    <option value="" selected>Servicio</option>
                                    <option value="Monitoreo ocupacional">Monitoreo ocupacional</option>
                                    <option value="Monitoreo ambiental">Monitoreo ambiental</option>
                                    <option value="Seguridad y saluda en el trabajo">Seguridad y saluda en el trabajo</option>
                                    <option value="Sistema integrado de gestión">Sistema integrado de gestión</option>
                                    <option value="Capacitaciones y cursos">Capacitaciones y cursos</option>
                                    <option value="Residuos sólidos">Residuos sólidos</option>
                                    <option value="Homologaciones">Homologaciones</option>
                                    <option value="Otros">Otros</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <textarea placeholder="Cuentanos más" class="form-control border-0 p-4" name="" id="contact_detail_input"
                                    id=""></textarea>
                            </div>
                            <div>
                                <button class="btn btn-dark btn-block border-0 py-3" type="submit">Hablar con un
                                    Consultor</button>
                            </div>
                        </form>
        `;
    }
}
if (!customElements.get('conctact-form')) {
    customElements.define('conctact-form', ContactForm);
}