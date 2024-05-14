function calcularPromedio() {
  // Obtener los valores de los tres parciales
  var parcial1 = parseFloat(document.getElementById('parcial1').value) || 0;
  var parcial2 = parseFloat(document.getElementById('parcial2').value) || 0;
  var parcial3 = parseFloat(document.getElementById('parcial3').value) || 0;

  // Verificar si el radio de punto extra está seleccionado
  var puntoExtra = document.getElementById('puntoextra').checked;

  // Calcular el promedio
  var promedio = (parcial1 + parcial2 + parcial3) / 3;

  // Sumar 1 al promedio si el radio de punto extra está seleccionado
  if (puntoExtra) {
      promedio += 1;
  }

  // Mostrar el resultado en el input de resultado
  document.getElementById('resultado').value = promedio.toFixed(2);
}