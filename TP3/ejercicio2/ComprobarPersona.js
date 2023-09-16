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

function comprobarPersona(){
    let ejemplo = new Persona("Hussein", "Agustin", "Masculino");
    ejemplo.obtDetalles();
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

function comprobarAlumno(){
    let ejemplo2 = new Alumno("Hussein", "Agustin", "Masculino", "4to","Grupo 3");
    ejemplo2.registrar();
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

function comprobarProfesor(){
    let ejemplo3 = new Profesor("Hussein", "Agustin", "Masculino", "Informática","Comisión 1");
    ejemplo3.asignar();
}


