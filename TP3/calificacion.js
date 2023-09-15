let select = document.getElementById("calificacion");
let textarea = document.getElementById("floatingTextarea");

select.addEventListener('change', function calificar() {
let opcionSeleccionada = select.value;

switch (opcionSeleccionada) {
    case "aprobado":
        document.getElementById('Ej1').innerHTML = "CSFT-Aprobado";
        textarea.disabled = true;
        break;
    case "rechazado":
        document.getElementById('Ej1').innerHTML = "CSFT-Rechazado";
        textarea.disabled = true;
        break;
    case "observado":
        document.getElementById('Ej1').innerHTML = "CSFT-Observado";
        textarea.disabled = false;
        break;
    default:
        document.getElementById('Ej1').innerHTML = "Pendiente";
        textarea.disabled = true;
        break;
    }
});
