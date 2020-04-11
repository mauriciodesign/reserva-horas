
document.getElementById('buttonReserv').addEventListener('click', validar);


function validar(e) {
    e.preventDefault();
    
    let rut, nombre, apellido, edad, email, especialidad, fecha, hora;
    
    rut = document.getElementById('rut').value;
    nombre = document.getElementById('nombres').value;
    apellido = document.getElementById('apellidos').value;
    edad = document.getElementById('edad').value;
    email = document.getElementById('email').value;
    especialidad = document.getElementById('especialidad').value;
    fecha = document.getElementById('fecha').value;
    hora = document.getElementById('hora').value;

    
    let validarRut = /^(\d{2}\.\d{3}\.\d{3}-)([a-zA-Z]{1}$|\d{1}$)/;
    let validarText = /[a-zA-Z]/gim;
    let validarNumber = /^[0-9]+$/;
    let validarEmail = /\w+@\w+\.+[a-z]/;
    let validarFecha = /^(?:0?[1-9]|1[1-2])([\-/.])(3[01]|[12][0-9]|0?[1-9])\1\d{4}$/;
    let validarHora = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;


    if (!rut.match(validarRut)) {
        alert('Tiene que agregar un rut valido');
        return false;
    }
    
    if (!nombre.match(validarText) || !apellido.match(validarText)) {
        alert('Tiene que agregar un nombre');
        return false;
    }

    if (!edad.match(validarNumber) || edad > 100) {
        alert('Tiene que agregar una edad valida');
        return false;
    }

    if (!email.match(validarEmail)) {
        alert('Tiene que agregar un mail valido');
        return false;
    }

    if (especialidad === 'Seleccione una Especialidad') {
        alert('Seleccione una Especialidad');
        return false;
    }

    if (!fecha.match(validarFecha)) {
        alert('Tiene que agregar una fecha valida');
        return false;
    }
    
    if (!hora.match(validarHora)) {
        alert('Tiene que agregar una hora correcta');
        return false;
    }    
    
    
    let respuesta = `<p class="mensaje">Estimado(a) ${nombre} y ${apellido}, su hora para ${especialidad} ha sido reservada para el día ${fecha} a las ${hora}. Además, se le envió un mensaje a su correo ${email} con el detalle de su cita. </br></br> Gracias por preferirnos.</p>`
    
    document.getElementById('formulario').innerHTML = respuesta;
}

