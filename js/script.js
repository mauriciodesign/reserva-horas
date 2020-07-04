
document.getElementById('buttonReserv').addEventListener('click', validar);

alert = document.getElementById("alert")

function alertTime(text) {
    alert.style.display = 'block';
    alert.innerHTML = text;
    setTimeout(() => {
        alert.style.display = 'none'; 
    }, 3000);
} 

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


    if (!rut.match(validarRut)) {
        let textAlert = "Tiene que agregar un rut valido";
        alertTime(textAlert)
        return false;
    }
    
    if (!nombre.match(validarText) || !apellido.match(validarText)) {
        let textAlert = "Tiene que agregar un nombre";
        alertTime(textAlert)
        return false;
    }

    if (!edad.match(validarNumber) || edad > 100) {
        let textAlert = "Tiene que agregar una edad valida";
        alertTime(textAlert)
        return false;
    }

    if (!email.match(validarEmail)) {
        let textAlert = "Tiene que agregar un mail valido";
        alertTime(textAlert)
        return false;
    }

    if (especialidad === 'Seleccione una Especialidad') {
        let textAlert = "Seleccione una Especialidad";
        alertTime(textAlert)
        return false;
    }

    if (!fecha.match(validarFecha)) {
        let textAlert = "Tiene que agregar una fecha valida";
        alertTime(textAlert)
        return false;
    }
    
    if (hora === 'Seleccione una hora') {
        let textAlert = "Seleccione una hora";
        alertTime(textAlert)
        return false;
    }    
    
    
    let respuesta = `<p class="mensaje">Estimado(a) ${nombre} y ${apellido}, su hora para ${especialidad} ha sido reservada para el día ${fecha} a las ${hora}. Además, se le envió un mensaje a su correo ${email} con el detalle de su cita. </br></br> Gracias por preferirnos.</p>`
    
    document.getElementById('formulario').innerHTML = respuesta;
}

