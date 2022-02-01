/* ejercicio 2
Crear el código que reciba como parámetro un array de números y devuelva el mayor. */
var a = prompt("ingrese la cantidad de numeros")
var b = 0
var c = 0
var mayor = 0
var d = []
for (let i = 0; i < a; i++) {
    b = prompt("Ingrese numero")
    c = parseInt(b)
    d.push(c)
}
mayor = d[0]
for (let j = 0; j < d.length; j++) {
    if (d[j] > mayor) {
        mayor = d[j]
    }
}

document.write(mayor)