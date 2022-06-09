
let Total = 0;

function sumarprecio(precio){
  Total = Total + precio;
   document.getElementById("Total").innerText = "TOTAL: $" + Total

}
function Borrar() {
  Total=0
  document.getElementById("Total").innerHTML = "El total actual es: " + "$" + 0;
}

