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
let todos = [];
let btnAdd = document.getElementById('numNames');

//Constantes
const recReserva = 7;
const anfitrion = {nombreRes, apellidoRes, mailContacto};
const botonRes = document.getElementById('buttonReserva');

document.getElementById('buttonReserva').addEventListener('click', mostrarnombres);
btnAdd.addEventListener("change", addElement, false);

//Funciones
function mostrarnombres() {
	todos = [];
    const valorcaja = document.getElementById('list').getElementsByTagName('input');
    for (let i = 0; i < valorcaja.length; i++) {
        todos.push(valorcaja[i].value);
    }
    console.log(todos)
}
function addElement() {
    const lista_usuarios = document.getElementById('list').getElementsByTagName('input');
    while(lista_usuarios.length > 0){
        lista_usuarios[0].remove();
    }
    const num_personas = document.getElementById('numNames').value
    for (let i = 0; i < num_personas; i++) {
        let olList = document.getElementById('list');
        let newListItem = document.createElement('input');
        newListItem.placeholder = 'nombre';
        olList.appendChild(newListItem);
    }
}
function Reservar(nombreRes, apellidoRes, numAsistentes, diaReserva){
    alert(`Tu reserva está a nombre de ${nombreRes} ${apellidoRes}. los asistentes son ${numAsistentes} y la reserva es para el día ${diaReserva}`);
    let confirmacion = document.createElement("div");
    const divConfirmacion = document.getElementById('confirmacion');
    confirmacion.innerHTML = "<span>Muchas gracias por su reserva! En los próximos minutos podrá recibir un mail a su cuenta donde aparecerán todos los datos de la reserva.</span> <span>En caso de no recibirlo, escribanos a cualquiera de nuestras redes sociales para solucionar el problema.</span> <h3>Bon appetit!</h3>"
    divConfirmacion.appendChild(confirmacion);
}

//Eventos
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
        localStorage.setItem('anfitrion', JSON.stringify(anfitrion));
    }
})

fetch('https://api.bluelytics.com.ar/v2/latest', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
.then(response => response.json())
.then(response => {
    createDollarDesc(response); 
});

function createDollarDesc(response){
    let cotiText = document.createElement('p');
    cotiText.innerText = "Este restaurant habilita los pagos con tarjetas internacionales. El cambio al día de hoy es" + " $" + response.blue.value_buy
    const cotizacion = document.getElementById('confirmacion')
    cotizacion.appendChild(cotiText).style.color = 'darkgrey'
    cotizacion.appendChild(cotiText).style.fontSize = "12px"

    console.log(response.blue.value_buy)
}
