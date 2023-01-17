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
    alert(`tu reserva está a nombre de ${nombreRes} ${apellidoRes}. los asistentes son ${numAsistentes} y la reserva es para el día ${diaReserva}`);
}
nombreRes = document.getElementById('form4example2')[0].value
apellidoRes = document.getElementById('form4Example25').value
numAsistentes = document.getElementById('numNames').value
diaReserva = document.getElementById('form4Example4').value;
//
botonRes.addEventListener('click',() =>{

    Reservar();
})

