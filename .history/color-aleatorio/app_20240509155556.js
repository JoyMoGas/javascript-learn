// Seleccionar los elementos del DOM

const boton = document.querySelector('button');
const color = document.getElementById('color');

function generarColorHexAleatorio() {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

    for (let i = 0; i < 6; i++) {
        let indiceAleatorio = Math.floor(Math.random() * 16);
        color += digitos[indiceAleatorio];
    }

    return colorHex
}