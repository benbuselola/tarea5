const notas =[6,8,9,2,5,10]; //Definimos un arreglo que contenga las notas de un alumno
function suma(notas){ //Definimos la funcion suma, la cual toma como entrada un arreglo de numeros y retorna la suma de los componentes dentro del arreglo
  var suma=0; //variable donde se va a alojar el valor de la suma de los valores del arreglo
  for (let i =0;i<notas.length;i++){ //Ciclo for para recorrer todos los valores del arreglo
    suma=suma+notas[i]; //Se realiza las suma de todos los valores
  }
  return(suma); //Se retorna la variable que contiene la suma de los componentes
}
function promedio(notas,numero){//Definimos la funcion promedio, la cual toma como entrada un arreglo de numeros y la suma de los numeros de dicho arreglo y retorna el promedio de los valores
  var prom=0; //Variable donde se va a guardar el promedio
  prom=numero/notas.length; //Calculo del promedio
  return prom; //Retornamos el valor del promedio
}
var sumaNotas=suma(notas); //Variable donde se aloja la suma de los componentes del arreglo
var prom= promedio(notas,sumaNotas); //Variable donde se guarda el promedio de los componentes del arreglo
console.log("El promedio de las notas es :",prom); //Se muestra por consola el resultado del promedio