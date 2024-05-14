function actualizarResultado() {
  let pe = document.getElementById('puntoextra');
  if (pe.checked === true) {
      let res = document.getElementById('resultado').value;
      res = parseFloat(res);
      res += 1;
      document.getElementById('resultado').value = res;
  }
}