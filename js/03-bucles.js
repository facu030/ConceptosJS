//bucles fragmento de codigo que quiero repetir una n cantidad de veces

let numero = 110;
// el bucle while se ejecuta cuando se cumple la condicion logica
while (numero <= 10) {
  document.write("el numero es: " + numero);
  numero++;
}
/*
do{
    linea de codigo que quiero repetir
}
while(condicion)
*/

let reglon = 5;
do {
  document.write("la cantidad es: " + reglon);
  renglon++;
} while (renglon <= 5);

/*
for(inicializar variable; condicion logica; incremento o decremento){
    lineas de codigo que quiero repetir
}
*/

for (let contador = 10; contador >= 1; contador--) {
  document.write("el numero es :" + $(contador));
}
