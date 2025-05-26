//### 1. Se obtienen los DATOS que se escribirán en el formulario.
const obtenerDatosAvion = () => {
    //Constante flecha es igual a una Función ya que se llamará a la constante como si fuera una Función.
    let datos ={
    //Los datos se guardan en una variable para que despues se carguen en la constante.

      //DATOS DEL VUELO
        nombre: document.querySelector("#nombre").value,
      //Nombre -> Documento -> Seleccionar con la ID Nombre y sacar el valor con el .value
        dni: document.querySelector("#dni").value,
        telefono: document.querySelector("#telefono").value,
        origen: document.querySelector("#origen").value,
        destino: document.querySelector("#destino").value,
        fecha:document.querySelector("#fecha").value,
        hora: document.querySelector("#hora").value,
        clase: document.querySelector("#clase").value,
        equipajeAdicional: document.querySelector("#equipaje").checked
        //se hace un .cheked el cual sirve para saber si es verdadero o falso
        ? "Tiene equipaje adicional"
        // ?==True 
        : "No tiene equipaje adicional"
        // :==False
    }

//### 2. Almacenamiento.

let reservasAvion = [];
//Se crea un ARRAY VACIO en el que posteriormente se agregaran todos los datos de la reserva

const agregarReservaAvion = (reserva) =>{
//Se crea una funcion en la que se agregaran las reservas
reservasAvion.push(reserva);
}
//Se crea un .push el cual va a pushear todo a agregar reservas avion

//reservasAvion.push -> reservasAvion -> agregarReservaAvion;



//### 3. Mostrar resultado






















}