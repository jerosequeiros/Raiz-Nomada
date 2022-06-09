
let Total = 0;

function sumarprecio(precio){
  Total = Total + precio;
   document.getElementById("Total").innerText = "TOTAL: $" + Total
   document.getElementById("importeTotal").innerText = " $" + Total

}
function Borrar() {
  Total=0
  document.getElementById("Total").innerHTML = "El total actual es: " + "$" + 0;
}

function mensajepago(){
  if(document.forms["form"].username.value == "" || document.forms["form"].cardNumber.value == "" || document.forms["form"].month.value == "" || document.forms["form"].year.value == "" || document.forms["form"].cvv.value == ""){
      alert("ERROR")
  }else{
      alert("Su pago fue realizado")
  }
}
