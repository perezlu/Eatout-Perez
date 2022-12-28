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
const anfitrion = {nombreRes, apellidoRes, mailContacto}
//Funciones
function defAsist(){
    for (let i = 1; i <= numAsistentes;){
        nombre = prompt("Ingresá el nombre de el asistente número" + " " + i);
        if (nombre == null || nombre == "") {break}
        apellido = prompt("Ahora introducí su apellido");
        if (apellido == null || apellido == "") {break}
        usuario = nombre + " " + apellido;

        asistentes.push(usuario);
        i++
    }
}
function defAnfitrion(){
    nombreRes = prompt("Ingresá el nombre del anfitrión");
    if (nombreRes == null || nombreRes == "") {return}
    apellidoRes = prompt("Ahora introducí su apellido");
    if (apellidoRes == null || apellidoRes == "") {return}
    anfitrion.nombreRes = nombreRes
    anfitrion.apellidoRes = apellidoRes
}
function descAsist(){
    if (numAsistentes >= 4) {
        alert("Felicidades! Tenés un 10% de descuento por ser" + " " + numAsistentes + " " + "asistentes");
    } else if (numAsistentes >= 8){
        alert("Gracias por elegirnos para festejar! Como agradecimiento, estaremos invitándolos un postre de los seleccionados de la carta")
    }
}

//Definir 
defAnfitrion()
//Cantidad de personas que asistirán
numAsistentes = parseInt(prompt("¿cuántas personas asistirán?"));
while (numAsistentes < 1) {
    numAsistentes = parseInt(prompt("¿cuántas personas asistirán?"));
}
//Nombre y apellido de c/u
defAsist()
//informa a quiénes nombró como asistentes
asistentes.sort()
if (numAsistentes >= 1){
alert("Los asistentes son" + " " + asistentes);
//Informa de promociones vigentes si se cumplen las condiciones
descAsist()
//Día de la reserva
diaReserva = parseFloat(prompt("ingresá en formato dd/mm/aa el día que deseas reservar"));
//Mail de contacto
anfitrion.mailContacto = prompt("Te solicitamos un mail de contacto para enviarte la confirmación de tu reserva");
}
console.log(anfitrion)