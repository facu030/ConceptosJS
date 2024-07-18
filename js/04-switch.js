// 1 lunes
// 2 martes
// 3 lunes
// 4 martes

let dia = parseInt(prompt("ingrese algun dia con numero"));

switch (dia) {
  //cuando es con parse se pone el mismo tipo de dato
  case 0:
    document.write("hoy es domingo");
    break;
  case 1:
    document.write("hoy es lunes");
    break;
  case 2:
    document.write("hoy es martes");
    break;
  case 3:
    document.write("hoy es martes");
    break;
  //siempre al ultimo el default en caso de q no ingrese estos valores
  default:
    document.write("no valido");
}
