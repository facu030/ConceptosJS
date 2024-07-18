/*
Escribe un programa que pida una frase y escriba las vocales que aparecen
Ejemplo:
input: Hola mundo
Output: oauo
*/

let frase = prompt("ingrese la frase");
console.log(frase);
//length devuelve la longitud de la cadena
console.log(frase.length);
//substring permite mostrar una porcion de la frase, corta y muestra la cantidad que quieras
console.log(frase.substring(0));
//muestra la posicion desde el 0
//charat nos muestra la posicion que queremos analizar
console.log(frase.charAt(3));
