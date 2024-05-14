function calcularPromedio() {
  var parcial1 = parseFloat(document.getElementById('parcial1').value);
  var parcial2 = parseFloat(document.getElementById('parcial2').value);
  var parcial3 = parseFloat(document.getElementById('parcial3').value);

  var puntoExtra = document.getElementById('puntoextra').checked;

  var promedio = (parseInt(parcial1) + parseInt(parcial2) + parseInt(parcial3)) / 3;

  if (puntoExtra === True) {
      promedio += 1;
  }

  // Mostrar el resultado en el input de resultado
  document.getElementById('resultado').value = promedio.toFixed(2);
}