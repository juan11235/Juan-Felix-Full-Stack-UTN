// ejercicio 1

var valor = prompt("Ingrese la distancia:")
var distancia = parseInt(valor);
if (distancia < 0) {
    document.write("Distancia incorrecta")
} else if (distancia <= 1000) {
    document.write("pie")
} else if (distancia <= 10000) {
    document.write("bicicleta")
} else if (distancia <= 30000) {
    document.write("colectivo")
} else if (distancia <= 100000) {
    document.write("auto")
} else {
    document.write("avion")
}