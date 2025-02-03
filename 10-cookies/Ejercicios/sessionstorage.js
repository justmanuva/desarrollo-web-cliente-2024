document.getElementById("incrementar").addEventListener("click", incrementar);
document.getElementById("decrementar").addEventListener("click", decrementar);

var contador = 0;
sessionStorage.setItem("ejemplo", contador)
function incrementar() {
    contador++;
    sessionStorage.setItem("ejemplo", contador)
}

function decrementar() {
    contador--;
    sessionStorage.setItem("ejemplo", contador)
}