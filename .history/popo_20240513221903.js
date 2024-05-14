function calcular() {
  var a = parseInt(document.getElementById('parcial1').value) || 0;
  var b = parseInt(document.getElementById('parcial2').value) || 0;
  var c = parseInt(document.getElementById('parcial3').value) || 0;
  var d = (a + b + c);
  var s = d / 3;
  document.getElementById('resultado').value = s;
  alert('Promedio: ' + s);
  calcularPuntoExtra();
}

function calcularPuntoExtra() {
  let pe = document.getElementById('puntoextra');
  if (pe.checked) {
    let res = document.getElementById('resultado').value;
    res = parseFloat(res);
    res += 1;
    document.getElementById('resultado').value = res;
  }
}