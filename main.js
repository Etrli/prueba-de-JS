//Colocar los datos de la reserva en un objeto.//
const obtenerDatosAvuion=() => {

};

let datosReserva ={
    nombre: document.querySelector("#nombre").value,
    apellido: document.querySelector("#apellido").value,        
    dni: document.querySelector("#dni").value,
    telefono: document.querySelector("#telefono").value,     
    origen: document.querySelector("#origen").value,
    destino: document.querySelector("#destino").value, 
    fecha: document.querySelector("#fecha").value,
    hora: document.querySelector("#hora").value,
    clase:document.querySelector("#clase").value,

    equipaje: document.querySelector("#equipaje").checked
       ? 'Incluye equipaje Adicional'
       :'No incluye equipaje Adicional',
};
return datosReserva;

//Almacenamiento.//
//Aca en el [] (ARRAY VACIO) Se va a escribir todos los datos de la reserva.//
let reservasAvion = [];

//Esto Agrega la reserva al array que esta arriba
const agregarReservasAvion = (reserva) =>{
    agregarReservasAvion.push(reserva);
}


//Mostrar los datos.
<p>nombre: ${reserva.nombre}</p>













formulario.addEventListener("submit"), (c) => {
c.preventDefault();
}



