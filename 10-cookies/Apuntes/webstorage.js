// Te ahorras pasos y variables haciendo esto
document.getElementById("crear").addEventListener("click", crear);
document.getElementById("modificar").addEventListener("click", modificar);
document.getElementById("consultar").addEventListener("click", consultar);
document.getElementById("eliminar").addEventListener("click", eliminar);

/* Session Storage => Crear variable de sesión
function crear() {
    sessionStorage.setItem("usuario1", "Mario");
    sessionStorage.setItem("usuario2", "Marta");
}

// Consultamos el nombre de la variable de sesión que hemos creado
function consultar() {
    let valor1 = sessionStorage.getItem("usuario1");
    let valor2 = sessionStorage.getItem("usuario2");
    document.getElementById("resultado").innerHTML = `La variable usuario tiene almacenado ${valor2} y la variable usuario2 tiene almacenado ${valor2}`;

}

// Modificar la sesión "usuario"
function modificar() {
    sessionStorage.setItem("usuario1", "Mario 123");
}

// Borrar la sesión "usuario"
function eliminar() {
    sessionStorage.removeItem("usuario1");
} */



//Local storage => Crear variable local
/* function crear() {
    localStorage.setItem("usuario1", "Mario");
    localStorage.setItem("usuario2", "Marta");
}

// Consultamos el nombre de la variable local que hemos creado
function consultar() {
    let valor1 = localStorage.getItem("usuario1");
    let valor2 = localStorage.getItem("usuario2");
    document.getElementById("resultado").innerHTML = `La variable usuario tiene almacenado ${valor1} y la variable usuario2 tiene almacenado ${valor2}`;

}

// Modificar la local "usuario"
function modificar() {
    localStorage.setItem("usuario1", "Mario 123");
}

// Borrar la cariable local "usuario"
function eliminar() {
    localStorage.removeItem("usuario1");
    localStorage.removeItem("usuario2");
} */

// Cookies
function crear() {
    document.cookie = "usuario=Mario; expires=Thu, 6 Feb 2025 12:00:00 UTC; path=/";
}

// Consultamos el nombre de la cookie que hemos creado
function consultar() {
    document.getElementById("resultado").innerHTML = `Cookie: ${document.cookie}`; 
}

// Modificar la cookie (Solo se puede modificar la expiración)
function modificar() {
    document.cookie="usuario=Mario; expires=Fri, 7 Feb 2025 12:00:00 UTC; path=/";
}

// Borrar la cookie (Se cambia el expires a un día anterior para que caduque)
function eliminar() {
    document.cookie="usuario=Mario; expires Sun, 2 Feb 2025 12:00:00 UTC; path=/";
}