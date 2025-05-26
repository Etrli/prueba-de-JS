//### 1. Captura de datos

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
      //Se hace un .cheked el cual sirve para saber si es verdadero o falso
        ? "Tiene equipaje adicional"
      // ?==True 
        : "No tiene equipaje adicional"
      // :==False
    }
    return datos;
}


//### 2. Almacenamiento
//- Crear un arreglo `reservasAvion` para almacenar las reservas.
//- Implementar la función `agregarReservaAvion(reserva)` que inserte la nueva reserva.

let reservasAvion = [];
        //Se crea un ARRAY VACIO en el que posteriormente se agregaran todos los datos de la reserva

const agregarReservaAvion = (reserva) =>{
    reservasAvion.push(reserva);
}      //Se crea un .push el cual va a pushear todo a agregar reservas avion
       //reservasAvion.push -> reservasAvion -> agregarReservaAvion;



//### 3. Mostrar resultado
//- Implementar `mostrarReservaAvion(reserva)` para reflejar en pantalla los datos ingresados de la última reserva.

const mostrarReservaAvion=(reserva) =>{
    //Se crea una funcion para poder mostrar la reserva
    const resumenAvion = document.getElementById("resumenAvion");
    //Se crea una constante la cual acceda al HTML
    resumenAvion.innerHTML=`
    <p><strong>Nombre:</strong> ${reserva.nombre}</p>
    <p><strong>DNI:</strong> ${reserva.dni}</p>
    <p><strong>Telefono:</strong> ${reserva.telefono}</p>
    <p><strong>Origen:</strong> ${reserva.origen}</p>
    <p><strong>Destino:</strong> ${reserva.destino}</p>
    <p><strong>Fecha:</strong> ${reserva.fecha}</p>
    <p><strong>Hora:</strong> ${reserva.hora}</p>
    <p><strong>Clase:</strong> ${reserva.clase}</p>
    <p><strong>Equipaje:</strong> ${reserva.equipajeAdicional}</p>`;
}



//### 4. Interacción
//  - Asociar la lógica al evento `submit`:
//  - Evitar el envío por defecto.
//  - Capturar y validar los datos.
//  - Guardar en el arreglo y mostrar resumen.

//Cree una constante en la que añada el evento para el ID submit
const formulario = document.getElementById("formReservaAvion").addEventListener("submit", (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario

    // Capturar los datos del formulario
    const reserva = obtenerDatosAvion();

    agregarReservaAvion(reserva); // Agregar la reserva al arreglo
    mostrarReservaAvion(reserva); // Mostrar la reserva en pantalla 

});