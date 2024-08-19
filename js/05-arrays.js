// declaramos el array con const array[]

const peliculas = [];

//arrays con datos (series)

const series = ["friends", "vikingos", 4, true, "peaky blinders"];

console.log(series);
document.write("cantidad de series : " + series.length + "<br>");
document.write("primer elemento del array : " + series[0] + "<br>");

//ultimo elemento del array
document.write("la ultima posicion es: " + series[series.length - 1] + "<br>");

//mostrar elementos de mi array con un bucle for
//usando etiquetas html
document.write(`<h2>Mi cantidad de series: ${series.length} </h2>`);

document.write(`<ul>`);
for (let i = 0; i < series.length; i++) {
  document.write(`<li> ${series[i]} </li>`);
}
document.write(`</ul>`);

//como agregar elementos al array (push) pero se agrega al final
//si quiero agregar al principio uso unshift() uno o muchos y cualquie tipo de dato
series.unshift("dark")

document.write(`<h2>Mi cantidad de series: ${series.length} </h2>`);

document.write(`<ul>`);
for (let i = 0; i < series.length; i++) {
  document.write(`<li> ${series[i]} </li>`);
}
document.write(`</ul>`);

//elemento al final
series.push("naruto");

document.write(`<h2>Mi cantidad de series: ${series.length} </h2>`);

document.write(`<ul>`);
for (let i = 0; i < series.length; i++) {
  document.write(`<li> ${series[i]} </li>`);
}
document.write(`</ul>`);

//si quiero agregar o borrar al medio del array, le debo indicar la posicion

//para agrega uso splice la primera posicion a agregar la segunda en q posicion borrar
series.splice(3,0,"avatar");

document.write(`<h2>Mi cantidad de series: ${series.length} </h2>`);

document.write(`<ul>`);
for (let i = 0; i < series.length; i++) {
  document.write(`<li> ${series[i]} </li>`);
}
document.write(`</ul>`);

//metodos para borrar elementos de array, para borrar el primero uso (shift)
series.shift();

document.write(`<h2>Mi cantidad de series: ${series.length} </h2>`);

document.write(`<ul>`);
for (let i = 0; i < series.length; i++) {
  document.write(`<li> ${series[i]} </li>`);
}
document.write(`</ul>`);

//para borrar el ultimo elemento de array uso el metodo (pop)
series.pop();

document.write(`<h2>Mi cantidad de series: ${series.length} </h2>`);

document.write(`<ul>`);
for (let i = 0; i < series.length; i++) {
  document.write(`<li> ${series[i]} </li>`);
}
document.write(`</ul>`);

//para borrar un elemento del medio uso splice pero cambio sus parametros
series.splice(3,1);
// el 3 india desde que posicion quiero borrar y el otro la cantidad
document.write(`<h2>Mi cantidad de series: ${series.length} </h2>`);

document.write(`<ul>`);
for (let i = 0; i < series.length; i++) {
  document.write(`<li> ${series[i]} </li>`);
}
document.write(`</ul>`);

// si quiero borrar todos los de abajo uso splice(5); a partir del quinto elemnto borro todo

//modificar un elemento del array
series[3] = "pokemon";
document.write(`<h2>Mi cantidad de series: ${series.length} </h2>`);

document.write(`<ul>`);
for (let i = 0; i < series.length; i++) {
  document.write(`<li> ${series[i]} </li>`);
}
document.write(`</ul>`);