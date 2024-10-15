function pedirNumero (){
  let numero = prompt("Introduce números: ('.' para salir)")
  let media = 0;
  let maximo = 10;
  let numeros = 0;
  let contador = 0;

  for (let i = 0; i < maximo; i++) {
    if (numero == ".") i = maximo;
    else {
      numeros += numero;
      contador++;
    }  
    
  }
  media = numeros/contador;
  //SIN TERMINAR
}