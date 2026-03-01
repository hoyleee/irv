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
