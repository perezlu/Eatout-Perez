//Variables
let nombre;
let apellido;
let usuario;
let diaReserva;
let numAsistentes;
let asistentes = [];
let mailContacto;
//Constantes
const recReserva = 7;
//Funciones
function defAsist(){
    for (var i = 1; i <= numAsistentes;){
        nombre = prompt("Ingresá el nombre de el asistente número" + " " + i);
        apellido = prompt("Ahora introducí su apellido");
        usuario = nombre + " " + apellido;

        asistentes.push(usuario);
        i++
    }
}
function descAsist(){
    if (numAsistentes >= 4) {
        alert("Felicidades! Tenés un 10% de descuento por ser" + " " + numAsistentes + " " + "asistentes");
    } else if (numAsistentes >= 8){
        alert("Gracias por elegirnos para festejar! Como agradecimiento, estaremos invitándolos un postre de los seleccionados de la carta")
    }
}



//Cantidad de personas que asistirán
numAsistentes = parseInt(prompt("¿cuántas personas asistirán?"));
//Nombre y apellido de c/u
defAsist()
//informa a quiénes nombró como asistentes
alert("Los asistentes son" + " " + asistentes);
//Informa de promociones vigentes si se cumplen las condiciones
descAsist()
//Día de la reserva
diaReserva = parseFloat(prompt("ingresá en formato dd/mm/aa el día que deseas reservar"));
//Mail de contacto
mailContacto = prompt("Te solicitamos un mail de contacto para enviarte la confirmación de tu reserva");