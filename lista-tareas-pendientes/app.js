// Selección de elementos del DOM con tipos específicos
var input = document.getElementById('ingresar-tarea');
var boton = document.querySelector('button');
var listaDeTarea = document.getElementById('lista-de-tareas');
function agregarTarea() {
    if (input.value) {
        // Crear tarea
        var tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');
        // Texto ingresado por el usuario
        var texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);
        // Crear y agregar contenedor de iconos
        var iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);
        // Iconos
        var completar = document.createElement('i');
        completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
        completar.addEventListener('click', completarTarea);
        var eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
        eliminar.addEventListener('click', eliminarTarea);
        iconos.append(completar, eliminar);
        // Agregar tarea a la lista
        listaDeTarea.appendChild(tareaNueva);
        // Limpiar el input después de agregar la tarea
        input.value = '';
    }
    else {
        alert('Por favor ingresa una tarea');
    }
}
function completarTarea(e) {
    var _a;
    var tarea = (_a = e.target.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode;
    tarea.classList.toggle('completada');
}
function eliminarTarea(e) {
    var _a;
    var tarea = (_a = e.target.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode;
    tarea.remove();
}
boton.addEventListener('click', agregarTarea);
input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        agregarTarea();
    }
});
