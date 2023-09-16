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



class Alumno extends Persona{
    constructor(apellido, nombre, genero, curso, grupo){
        super(apellido,nombre,genero);
        this.curso = curso;
        this.grupo = grupo;
        this.nombre_completo = nombre + " " + apellido;
    }

    registrar(){
        console.log("El alumno "+this.nombre_completo+" pertenece al grupo "+this.grupo);
    }

}



let formulario = document.getElementById("form-container");
formulario.addEventListener("submit", e => {
    e.preventDefault();
    let nombre = document.getElementById("Nombre").value;
    let apellido = document.getElementById("Apellido").value;
    let genero = document.getElementById("Genero").value;
    let curso = document.getElementById("Curso").value;
    let grupo = document.getElementById("Grupo").value;

    let alumnos = [];
    alumnos.push(new Alumno(apellido, nombre, genero, curso, grupo));
    console.log(alumnos);

    
    let fila = document.createElement("tr");

    
    let celdaNombre = document.createElement("td");
    celdaNombre.textContent = nombre;
    let celdaApellido = document.createElement("td");
    celdaApellido.textContent = apellido;
    let celdaGenero = document.createElement("td");
    celdaGenero.textContent = genero;
    let celdaCurso = document.createElement("td");
    celdaCurso.textContent = curso;
    let celdaGrupo = document.createElement("td");
    celdaGrupo.textContent = grupo;

    
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaApellido);
    fila.appendChild(celdaGenero);
    fila.appendChild(celdaCurso);
    fila.appendChild(celdaGrupo);


    document.getElementById("tibody").appendChild(fila);


})