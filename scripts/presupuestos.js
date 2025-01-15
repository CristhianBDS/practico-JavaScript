// js presupuestos

const form = document.getElementById('presupuestoForm');
const producto = document.getElementById('producto');
const plazo = document.getElementById('plazo');
const extras = document.querySelectorAll('input[type="checkbox"]');
const presupuesto = document.getElementById('presupuesto');

function calcularPresupuesto() {
    let total = parseInt(producto.value) || 0;

    extras.forEach(extra => {
        if (extra.checked) {
            total += parseInt(extra.value);
        }
    });

    const descuento = plazo.value >= 12 ? total * 0.1 : 0; // 10% de descuento si el plazo >= 12
    total -= descuento;

    presupuesto.value = total.toFixed(2) + ' €';
}

producto.addEventListener('change', calcularPresupuesto);
plazo.addEventListener('input', calcularPresupuesto);
extras.forEach(extra => extra.addEventListener('change', calcularPresupuesto));

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Validación de datos
    const nombre = document.getElementById('nombre');
    const apellidos = document.getElementById('apellidos');
    const telefono = document.getElementById('telefono');
    const email = document.getElementById('email');

    const regexNombre = /^[A-Za-zÀ-ÿ\s]{1,15}$/;
    const regexApellidos = /^[A-Za-zÀ-ÿ\s]{1,40}$/;
    const regexTelefono = /^\d{9}$/;

    if (!regexNombre.test(nombre.value)) {
        alert('El nombre sólo puede contener letras y máximo 15 caracteres.');
        return;
    }

    if (!regexApellidos.test(apellidos.value)) {
        alert('Los apellidos sólo pueden contener letras y máximo 40 caracteres.');
        return;
    }

    if (!regexTelefono.test(telefono.value)) {
        alert('El teléfono debe contener sólo 9 números.');
        return;
    }

    alert('Formulario enviado con éxito');
});
