function calcular() {
  var a, b, c, d, s;
  a = document.getElementById('parcial1').value;
  b = document.getElementById('parcial2').value;
  c = document.getElementById('parcial3').value;

  d = (parseInt(a) + parseInt(b) + parseInt(c));
  s = d/3

  document.getElementById('resultado').value = s;
  alert('Promedio' + s)
}

function calcular2() {
  let pe = document.getElementById('puntoextra');
  if (pe.checked === true) {
      let res = document.getElementById('resultado').value;
      res = parseFloat(res);
      res += 1;
      document.getElementById('resultado').value = res;
  }
}