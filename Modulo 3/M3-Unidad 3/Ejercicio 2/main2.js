/* ejercicio 2
Crear el código que reciba como parámetro un array de números y devuelva el mayor. */

var x = 1;
var c = [];
var mayor;
while (x != "") {
    var a = prompt("Ingrese numero - Deje en blanco para obtener el mayor");
    x = parseInt(a);
    c.push(x);

};
/*
for (let i = 0; i < c.length; i++) {
    if (c[i] > mayor) {
        mayor = c[i]
    }
}
*/
document.write(c)