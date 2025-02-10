//Strings
var mensaje = "Hola Mundo";
console.log(mensaje);
var numero = 140;
console.log(numero);
//Boolean
var esViernes = false;
console.log(esViernes);
//Números
var real = 1.43;
var binario = 5;
console.log(typeof binario);
var suma = real + binario + numero;
console.log(suma);
var comparacion;
comparacion = real > 2;
console.log(comparacion);
//Número octal
var octal = 37;
console.log(octal);
//Unión de cadenas
var cadena1 = "Hola";
var cadena2 = "Hola";
var cadena3 = "El numero es ".concat(suma);
var unioncadenas = cadena1 + cadena2;
console.log(typeof cadena1);
console.log(typeof cadena2);
console.log(unioncadenas);
// Formas de declarar arrays
var arreglo1 = [1, 2, 3, 4];
var arreglo2 = [5, 6, 7, 8];
console.log(arreglo1);
console.log(arreglo2);
console.log(typeof arreglo1);
console.log(typeof arreglo2);
//Operaciones con Arrays
var arregloCadena = ["TS", "JS", "RHP"];
arregloCadena.push("23");
// Array fijo (Solo tiene 2 cajones)
var tupla = ["Carmina", 30];
console.log(tupla[0]);
//Array clave valor (Si pongo el Rojo = 3, empieza en 3 y va sumando)
var semaforo;
(function (semaforo) {
    semaforo[semaforo["Rojo"] = 3] = "Rojo";
    semaforo[semaforo["Naranja"] = 4] = "Naranja";
    semaforo[semaforo["Verde"] = 5] = "Verde";
})(semaforo || (semaforo = {}));
console.log(semaforo.Naranja);
//Any: Para meter el valor que queramos (mejor poner tipo unknown y luego verificar)
var nose;
nose = "Hola";
nose = 30;
nose = null;
//Creamos una variable del tipo "Persona"
var personaCarmina = {
    nombre: "Carmina",
    apellido: "Cervera",
    edad: 52,
    estado: true
};
console.log(personaCarmina);
