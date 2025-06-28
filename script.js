document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const listaSolicitudes = document.getElementById('lista-solicitudes');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const cliente = document.getElementById('cliente').value.trim();
    const tipoSeleccionado = document.getElementById('tipo').value;
    const descripcion = document.getElementById('descripcion').value.trim();
    const fecha = document.getElementById('fecha').value;
    const numeroTarjeta = document.getElementById('tarjeta').value.trim();
    const titular = document.getElementById('titular').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    if (!cliente || !tipoSeleccionado || !descripcion || !fecha || !numeroTarjeta || !titular || !cvv) {
      alert('Por favor, completa todos los campos del formulario.');
      return;
    }

    let precio = 0;
    let nombreServicio = '';

    switch (tipoSeleccionado.toLowerCase()) {
      case 'aceite':
        precio = 500;
        nombreServicio = 'Cambio de aceite';
        break;
      case 'frenos':
        precio = 700;
        nombreServicio = 'Revisión de frenos';
        break;
      case 'electrico':
        precio = 600;
        nombreServicio = 'Diagnóstico eléctrico';
        break;
      default:
        alert('Tipo de reparación no válido.');
        return;
    }

    alert(`Pago simulado exitoso por $${precio} MXN. ¡Gracias por tu solicitud, ${cliente}!`);

    // Crear tarjeta visual sin sobrescribir variables
    const tarjetaSolicitud = document.createElement('div');
    tarjetaSolicitud.className = 'card mb-3 shadow-sm';
    tarjetaSolicitud.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${nombreServicio}</h5>
        <p class="card-text"><strong>Cliente:</strong> ${cliente}</p>
        <p class="card-text"><strong>Descripción:</strong> ${descripcion}</p>
        <p class="card-text"><strong>Fecha:</strong> ${new Date(fecha).toLocaleString()}</p>
        <p class="card-text text-success"><strong>Pago:</strong> $${precio} MXN</p>
      </div>
    `;
    listaSolicitudes.appendChild(tarjetaSolicitud);

    form.reset();
  });
});



