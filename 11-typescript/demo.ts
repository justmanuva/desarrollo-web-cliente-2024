//Strings
let mensaje:string = "Hola Mundo";
console.log(mensaje);

let numero:number = 140;
console.log(numero);

//Boolean
let esViernes:boolean = false;
console.log(esViernes);

//Números
let real:number = 1.43;
let binario:number = 0b101;
console.log(typeof binario);

let suma:number = real + binario + numero;
console.log(suma);

let comparacion:boolean;
comparacion = real>2;
console.log(comparacion);

//Número octal
let octal:number = 0o45;
console.log(octal);

//Unión de cadenas
let cadena1:string = "Hola";
let cadena2:string = "Hola";
let cadena3:string = `El numero es ${suma}`;
let unioncadenas:string = cadena1 + cadena2;
console.log(typeof cadena1);
console.log(typeof cadena2);
console.log(unioncadenas);

// Formas de declarar arrays
let arreglo1:number[] = [1,2,3,4];
let arreglo2:Array<number> = [5,6,7,8];
console.log(arreglo1);
console.log(arreglo2);
console.log(typeof arreglo1);
console.log(typeof arreglo2);

//Operaciones con Arrays
let arregloCadena:string[] = ["TS","JS","RHP"];
arregloCadena.push("23");

// Array fijo (Solo tiene 2 cajones)
let tupla:[string,number] = ["Carmina", 30];
console.log(tupla[0]);

//Array clave valor (Si pongo el Rojo = 3, empieza en 3 y va sumando)
enum semaforo{"Rojo" = 3, "Naranja", "Verde"}
console.log(semaforo.Naranja);

//Any: Para meter el valor que queramos (mejor poner tipo unknown y luego verificar)
let nose:any;
nose="Hola";
nose=30;
nose = null;

//Objetos / Tipos
//Se crea el tipo "Persona"
interface Persona {
    nombre:string;
    apellido:string;
    edad:number;
    estado:boolean;
}

//Creamos una variable del tipo "Persona"
let personaCarmina:Persona = {
    nombre: "Carmina",
    apellido: "Cervera",
    edad: 52,
    estado: true
}

console.log(personaCarmina);