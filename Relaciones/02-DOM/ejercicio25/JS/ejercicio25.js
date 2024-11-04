console.log("Estoy");

let btnAgregarAntes = document.getElementById("btnAgregarAntes");
btnAgregarAntes.addEventListener("click", agregarAntes);

function agregarAntes() {
  let primerElem = document.getElementById("primerElemento");
  
  let nuevoElem = document.createElement("li");
  nuevoElem.classList.add("tarea");
  nuevoElem.textContent = "Nueva tarea delante del 1er elemento";
  // Para agregar el elemento antes del primero que tengamos
  primerElem.before(nuevoElem);
}