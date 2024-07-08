/* if(condicion logica){

}
else{

}
*/

//crear un programa que solicite la edad para ver si es mayor o no

const edad = parseInt(prompt("ingrese edad"));
//parseint para trasformar un numero entre comillas a formato number
//parsefloat lo mismo pero con decimales
//nan is not a number
console.log(edad);
if (edad >= 18) {
  document.write("edad ingresada " + edad + ", sos mayor de edad");
} else {
  document.write("edad ingresada " + edad + ", sos menor de edad");
}
