//esto es un comentario

/* es un comentario
de
multi
*/

//declarar variables ( var- let - const)

let nombre = "facundo";
//envuelto en "" ya que es de tipo string (texto)

let edad = 20;
//cree una variable edad que almacena un tipo de dato number pueden ser enteros o decimales "20"
// no hace falta ; pero es mejor q pongamos al final

let encendido = true;
//variables booleanas true o false

//tipo arrays
let arrays = [1, 4, "jiji", true];

//mostrar el contenido de una variable en consola
console.log(edad);

//mostrar en pantalla
document.write("Edad:" + edad + "  " + "nombre:" + nombre + "<br>");

//modificar contenido de una variable
edad = 30 + 5;
document.write("Edad:" + edad);

//mostrar en ventanas emergentes
alert("bienvenidos");

//prompt ventana similar al alert pero podemos pedir algo al usuario, cuando doy a cancelar tengo q guardarlo en una variable, ventan es de tipo text
const edadUsuario = prompt("ingrese su edad:");
//guardo ese valor en una constante
console.log(edadUsuario);
