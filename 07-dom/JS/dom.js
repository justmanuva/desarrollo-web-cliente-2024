function inicioDOM() {
  console.log("DOM cargado")

  document.body.style.backgroundColor = "red";

  // document.getElementById
  let titulo = document.getElementById("title");
  //innerHTML y textContent para que te salga el contenido del nodo
  console.log(titulo.innerHTML);
  console.log(titulo.textContent);

  console.log(titulo.textContent.length); 
}