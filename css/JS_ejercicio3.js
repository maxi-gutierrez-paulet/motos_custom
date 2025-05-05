document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    // Validación del nombre
    const nombre = document.getElementById('nombre').value.trim();
    if (nombre.length < 3) {
        valid = false;
        document.getElementById('error-nombre').textContent = 'El nombre debe tener al menos 3 caracteres.';
    } else {
        document.getElementById('error-nombre').textContent = '';
    }

    // Validación del correo
    const correo = document.getElementById('correo').value.trim();
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexCorreo.test(correo)) {
        valid = false;
        document.getElementById('error-correo').textContent = 'Por favor, ingrese un correo válido.';
    } else {
        document.getElementById('error-correo').textContent = '';
    }

    // Validación del teléfono (opcional)
    const telefono = document.getElementById('telefono').value.trim();
    const regexTelefono = /^[0-9]*$/;
    if (telefono && !regexTelefono.test(telefono)) {
        valid = false;
        document.getElementById('error-telefono').textContent = 'El número de teléfono solo debe contener números.';
    } else {
        document.getElementById('error-telefono').textContent = '';
    }

    // Validación de la fecha de nacimiento
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    if (!fechaNacimiento) {
        valid = false;
        document.getElementById('error-fecha').textContent = 'Por favor, seleccione su fecha de nacimiento.';
    } else {
        document.getElementById('error-fecha').textContent = '';
    }

    // Validación del género
    const genero = document.querySelector('input[name="genero"]:checked');
    if (!genero) {
        valid = false;
        document.getElementById('error-genero').textContent = 'Por favor, seleccione su género.';
    } else {
        document.getElementById('error-genero').textContent = '';
    }

    // Validación del país
    const pais = document.getElementById('pais').value;
    if (!pais) {
        valid = false;
        document.getElementById('error-pais').textContent = 'Por favor, seleccione su país.';
    } else {
        document.getElementById('error-pais').textContent = '';
    }

    // Validación de términos
    const terminos = document.getElementById('terminos').checked;
    if (!terminos) {
        valid = false;
        document.getElementById('error-terminos').textContent = 'Debe aceptar los términos y condiciones.';
    } else {
        document.getElementById('error-terminos').textContent = '';
    }

    if (valid) {
        alert('Formulario enviado correctamente.');
        document.getElementById('formulario').reset();
    }
});
