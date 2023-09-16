class Persona{
    constructor(apellido, nombre, genero){
        this.apellido = apellido;
        this.nombre = nombre;
        this.genero = genero;
        this.nombre_completo = nombre + " " + apellido;
    }

    obtDetalles(){
        console.log("Nombre: "+this.nombre_completo);
        console.log("Genero: "+this.genero);

    }
}


class Profesor extends Persona{
    constructor(apellido, nombre, genero, asignatura, comision) {
        super(apellido,nombre,genero);
        this.asignatura = asignatura;
        this.comision = comision;
        this.nombre_completo = nombre + " " + apellido;
    }

    asignar(){
        console.log("El profesor "+this.nombre_completo+" pertenece a la comisión "+this.comision);
    }

}


let formulario = document.getElementById("form-container");
formulario.addEventListener("submit", e => {
    e.preventDefault();
    let nombre = document.getElementById("Nombre").value;
    let apellido = document.getElementById("Apellido").value;
    let genero = document.getElementById("Genero").value;
    let asignatura = document.getElementById("Asignatura").value;
    let comision = document.getElementById("Comision").value;

    let profesores = [];
    profesores.push(new Profesor(apellido, nombre, genero, asignatura, comision));
    console.log(profesores);

    let boton = document.createElement("button");
    boton.innerHTML = "Eliminar";

    
    let fila = document.createElement("tr");

    
    let celdaNombre = document.createElement("td");
    celdaNombre.textContent = nombre;
    let celdaApellido = document.createElement("td");
    celdaApellido.textContent = apellido;
    let celdaGenero = document.createElement("td");
    celdaGenero.textContent = genero;
    let celdaAsignatura = document.createElement("td");
    celdaAsignatura.textContent = asignatura;
    let celdaComision = document.createElement("td");
    celdaComision.textContent = comision;

    
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaApellido);
    fila.appendChild(celdaGenero);
    fila.appendChild(celdaAsignatura);
    fila.appendChild(celdaComision);
    fila.appendChild(boton);

    document.getElementById("tibody").appendChild(fila);

    
    boton.onclick = function (){
        let filaAEliminar = boton.parentNode;
        filaAEliminar.parentNode.removeChild(filaAEliminar);

    }
})