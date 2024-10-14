function pedirMesas(){
  let mesas = new Array(Number(prompt("Introduzca cuantas mesas quiere en su local: ")));
  
  for (let i = 0; i < mesas.length; i++) {
    mesas[i] = Math.floor(Math.random() * (4 - 0 + 1) + 0);
  }
  console.log(mesas);
  return mesas;
}

function pedirComensales() {
  comensales = prompt("¡Buenas!, Cuántos sois?");
  mesas = pedirMesas();

  while (comensales > 4) {
    comensales = prompt(`Lo siento, no admitimos grupos de ${comensales}, haga grupos de 4 personas como máximo e intente de nuevo`);
  
    for (let i = 0; i < mesas.length; i++) {
      if (mesas[i] == 0) mesas[i] += comensales;
      else if (mesas[i] < 4) mesas[i] += comensales; 
    }

  }
  Number(comensales); 

  return true;
}


function sentarCliente(mesas,comensales){
  
  while (pedirComensales()){
    
  }
}

function inicializarRestaurante() {
  pedirMesas();
  pedirComensales();
}