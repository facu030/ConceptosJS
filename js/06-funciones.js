//conceptos de funciones declarativas
//funciones sin parametros cuando no hay nada en los parentesis
function saludar(){
    document.write(`<p> hola mundo </p>`)
}
//saludar recibe parametros
function saludarPersona(nombre, apellido){
    //las variables que creo en la funcion solo existen en ella
    document.write(`<p> hola ${nombre}, ${apellido} </p>`)
}
//fuera de la funcion no existe la variable nombre y apellido
// ``

//funciones que retornan un valor pueden ser con o sin parametros
function suma(num1, num2){
    const resultado = num1 + num2;
    console.log(resultado);
    //cuando necesito sacar un dato de la funcion uso return, debe ser un valor, cuando la invoco devuelve algo
    return resultado
    //tmb puede ser return num1 + num2
}

//arrow function, no tiene la palabra funcion, puede o no tener parametros
const sumar = (num1, num2) => {
    return
}
//tiene una ventana si es de una linea ejm return o un return implicito

//llamar a la funcion
saludar();

//llamada a la funcion con datos
saludarPersona("facundo", "martinez");

//con prompt
let ingreseNombre = prompt("ingresa nombre");
let ingreseApellido = prompt("ingresa apellido");
//los datos pueden estar en variables o no y tambien pueden tener el mismo nombre o no ya que tienen ambitos diferentes
saludarPersona(ingreseNombre, ingreseApellido);
//pasa estas variables a los parametros de la funcion


//vamos a invocar y guardar el resultado en una variable, osea la invoco hace la operacion y guarda en un variable
//resultado no tiene nada que ver con el de la funcion
const resultado = suma(2, 2);
document.write(`resultado de la suma es ${resultado}`);
//tmb puede ser asi, me retorna directamente la suma
document.write(`resultado de la suma es ${suma(50, 20)}`);

//una funcion tambien puede recibir un array

