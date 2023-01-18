//Variables
let nombre;
let nombreRes;
let apellido;
let apellidoRes;
let usuario;
let diaReserva;
let numAsistentes;
let asistentes = [];
let mailContacto;
//Constantes
const recReserva = 7;
const anfitrion = {nombreRes, apellidoRes, mailContacto};
const botonRes = document.getElementById('buttonReserva');
//Funciones
function Reservar(nombreRes, apellidoRes, numAsistentes, diaReserva){
    alert(`Tu reserva está a nombre de ${nombreRes} ${apellidoRes}. los asistentes son ${numAsistentes} y la reserva es para el día ${diaReserva}`);
    let confirmacion = document.createElement("div");
    const divConfirmacion = document.getElementById('confirmacion');
    confirmacion.innerHTML = "<span>Muchas gracias por su reserva! En los próximos minutos podrá recibir un mail a su cuenta donde aparecerán todos los datos de la reserva.</span> <span>En caso de no recibirlo, escribanos a cualquiera de nuestras redes sociales para solucionar el problema.</span> <h3>Bon appetit!</h3>"
    divConfirmacion.appendChild(confirmacion);
}

//eventos
botonRes.addEventListener('click',() =>{
    nombreRes = document.getElementById('form4Example2').value
    apellidoRes = document.getElementById('form4Example25').value
    mailContacto = document.getElementById('form4Example26').value
    numAsistentes = document.getElementById('numNames').value
    diaReserva = document.getElementById('form4Example4').value;
    if (nombreRes == null || apellidoRes == null || mailContacto == null || diaReserva == null || nombreRes == "" || apellidoRes == "" || mailContacto == "" || diaReserva == "") {
        let p = document.createElement("p");
        p.innerText= "Faltan casillas requeridas"
        const camposReq = document.getElementById('error')
        camposReq.appendChild(p).style.color = 'red'
    }else{
        Reservar(nombreRes, apellidoRes, numAsistentes, diaReserva);
        anfitrion.nombreRes = nombreRes
        anfitrion.apellidoRes = apellidoRes
        anfitrion.mailContacto = mailContacto
        console.log(anfitrion);
    }
})



