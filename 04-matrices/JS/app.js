function RecogerNum(msj){
  let a = prompt(msj);
  while(isNaN(a)){
    a = prompt("Error: introduce un número (a): ")
  }
  return a;
}

function CreaYPintaMatriz(fila, columna){
  let matriz = new Array(columna);
  
  //Inicializamos matriz
  for(let i = 0; i < columna; i++){
    matriz[i] = new Array(fila);
  }

  //Rellenar valores
  for (let i = 0; i < fila; i++){
    for (let j = 0; j < columna; j++){
      matriz [i][j] = j;
    }
    console.log(matriz[i]);
  }
}

let fila = RecogerNum("Dime el tamaño de filas: ");
let columna = RecogerNum("Dime el tamaño de columnas:");

CreaYPintaMatriz(fila,columna);
