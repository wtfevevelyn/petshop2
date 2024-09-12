// Definir usuario y contraseña para pruebas
const TEST_USERNAME = 'testuser';
const TEST_PASSWORD = 'testpassword';

// Función para manejar el login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validar credenciales localmente
    if (username === TEST_USERNAME && password === TEST_PASSWORD) {
        // Ocultar la sección de login y mostrar el contenido
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        // Mostrar mensaje de error
        document.getElementById('error-message').textContent = 'Usuario o contraseña incorrectos';
        document.getElementById('error-message').style.display = 'block';
    }
});

// Manejar la consulta de mascotas
document.getElementById('consulta-mascota-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const mascotaId = document.getElementById('consulta-mascota-id').value;

    // Simular la consulta de mascota
    const mascotas = {
        1: { nombre: 'Labrador', edad: '2 años', estado: 'Disponible', descripcion: 'Amigable y juguetón' },
        2: { nombre: 'Golden Retriever', edad: '3 años', estado: 'Disponible', descripcion: 'Leal y cariñoso' },
        3: { nombre: 'Beagle', edad: '1 año', estado: 'Disponible', descripcion: 'Activo y curioso' },
    };

    const mascota = mascotas[mascotaId];

    if (mascota) {
        document.getElementById('detalle-nombre').textContent = `Nombre: ${mascota.nombre}`;
        document.getElementById('detalle-edad').textContent = `Edad: ${mascota.edad}`;
        document.getElementById('detalle-estado').textContent = `Estado: ${mascota.estado}`;
        document.getElementById('detalle-descripcion').textContent = `Descripción: ${mascota.descripcion}`;
        document.getElementById('detalle-mascota-info').style.display = 'block';
    } else {
        document.getElementById('detalle-mascota-info').style.display = 'none';
        alert('Mascota no encontrada');
    }
});

// Manejar la creación de órdenes
document.getElementById('orden-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const mascotaId = document.getElementById('compra-mascota-id').value;
    const cantidad = document.getElementById('cantidad').value;

    // Simular la creación de una orden
    alert(`Orden creada:\nID de Mascota: ${mascotaId}\nCantidad: ${cantidad}`);
});

// Manejar el logout
document.getElementById('logout-btn').addEventListener('click', function() {
    document.getElementById('content').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
});
