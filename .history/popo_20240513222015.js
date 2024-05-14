function calcular() {
  // Obtener los valores de los parciales
  var a = parseInt(document.getElementById('parcial1').value) || 0;
  var b = parseInt(document.getElementById('parcial2').value) || 0;
  var c = parseInt(document.getElementById('parcial3').value) || 0;
  
  // Calcular la suma y el promedio
  var d = a + b + c;
  var s = d / 3;

  // Verificar si se debe agregar el punto extra
  let pe = document.getElementById('puntoextra');
  if (pe.checked) {
    s += 1;
  }

  // Mostrar el resultado en el input de resultado
  document.getElementById('resultado').value = s;
}