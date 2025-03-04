/*Una tienda ofrece un 25% de descuento por cada compra. Un cliente desea
saber cuánto deberá pagar por su compra.*/
/*
let descuento = 0.25;
let valorProducto = 55700;

let valorDescuento = valorProducto * descuento;
let valorFinal = valorProducto - valorDescuento;

console.log ("El valor del descuento es: " + valorDescuento  + " El valor final a pagar es: " + valorFinal);


/*Suponga que un individuo desea invertir su capital en un banco y desea saber
cuánto dinero ganara después de un mes si el banco paga a razón de 2%
mensual.*/
/*
let dinero = 350000
let porcentaje = 0.2;
let ganancia = dinero * porcentaje;

console.log (" El dinero que ganara luego de un mes sera: " + ganancia );


/*Un alumno desea saber cuál será su calificación final en la materia de
Algoritmos. Dicha calificación se compone de los siguientes porcentajes:
a. 55% del promedio de sus tres calificaciones parciales.
b. 30% de la calificación del examen final.
c. 15% de la calificación de un trabajo final.*/
/*
let promedio3Parciales = (0.55);
let promedioCalificaciones = (promedio3Parciales / 3);
let examenFinal = (0.30);
let trabajoFinal = (0.15);
let calificacionFinal = (promedio3Parciales + examenFinal + trabajoFinal);

console.log ("La calificacion final del alumno es: " + calificacionFinal);


/*El dueño de una tienda compra un artículo a un precio determinado. Obtener el
precio en que lo debe vender para obtener una ganancia del 30%.*/
/*
let precio = (23400);
let gananciaArticulo = (0.30);
let gananciaTolal = ( precio * gananciaArticulo);
let precioVenta = ( gananciaTolal + precio);

console.log ("El precio al que debe venderlo para ganar el 30% es de: " + precioVenta + " La ganancia del dueño de la tienda es de: " + gananciaTolal );

/*Un taxi cobra por una carrera 15 mil pesos por kilómetro recorrido y 2 mil por
minuto. Determine el monto a pagar por una carrera.*/
/*
let costoKilometro = (15000);
let costoMinuto = (2000);
let kilometros = (7)
let minutos = (142)
let totalKilometro = (costoKilometro * kilometros);
let totalMinutos = (costoMinuto * minutos);

console.log ("El valor total de la carrera por kilometros es: " + totalKilometro  + " El valor total de la carretera por Minutos es: " + totalMinutos);



/*Realizara un programa en el cual se van a leer tres números y determinar el
cuadrado de cada uno de ellos.*/
/*
let numero1 = (5 **2);
let numero2 = (9 **2);
let numero3 = (11 **2);

console.log(" El cuadrado del numero 1 es: " + numero1  + " El cuadrado del numero 2 es: " + numero2 + " El cuadrado del numero 3 es: " + numero3); 


/*En un hospital existen tres áreas: Ginecología, Pediatría, Traumatología. El
presupuesto anual del hospital se reparte conforme a la sig. tabla:
Área Porcentaje del presupuesto
Ginecología 40%
Traumatología 30%
Pediatría 30%
*/
/*
let presupuestoAnual = (67800000);
let ginecologia = (0.40 * 67800000 );
let traumatologia = (0.30 * 67800000);
let pediatria = (0.30 * 67800000);

console.log("El presupuesto anual para ginecologia es: " + ginecologia + " El presupuesto anual para traumatologia es: " + traumatologia + " El presupuesto anual para pediatria es: " + pediatria);


/*El dueño de una tienda compra un artículo a un precio determinado. Obtener el
precio en que lo debe vender para obtener una ganancia del 30%.*/
/*
let precio2 = (123500);
let gananciaArticulo2 = (0.30);
let gananciaTolal2 = ( precio2 * gananciaArticulo2);
let precioVenta2 = ( gananciaTolal2 + precio2);

console.log("El precio al que debe venderlo para ganar el 30% es de: " + precioVenta2 + " La ganancia del dueño de la tienda es de: " + gananciaTolal2 );


/*Tres personas deciden invertir su dinero para fundar una empresa. Cada una de
ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte
con respecto a la cantidad total invertida.*/
/*
let inversion1 = (7500000);
let inversion2 = (6200000);
let inversion3 = (4700000);
let totalInversion = (inversion1 + inversion2 + inversion3);
let porcentje1 = (inversion1 / 18400000 * 100);
let porcentje2 = (inversion2 / 18400000 * 100);
let porcentje3 = (inversion3 / 18400000 *100);

console.log("El porcentaje de la persona 1 es: " + porcentje1.toFixed(2) + " El porcentaje de la persona 2 es: " + porcentje2.toFixed(2) + " El porcentaje de la persona 3 es: " + porcentje3.toFixed(2));


/*Realizar una calculadora con las operaciones básicas suma, división,
multiplicación y resta.*/
/*
let num1 = (842 );
let num2 = (4343 );
let num3 = (35254);
let num4 = (657878);
let suma = (num1 + num3)
let division = ( num4 / num1)
let multiplicacion = (num4 * num3)
let resta = (num3 - num2 )

console.log("El resultado de la suma es: " + suma + " El resultado de la division es " + division + " El resultado de la multiplicacion es: " + multiplicacion + " El resultado de la resta es: " + resta);
*/
//ESTRUCTURA DE CONTROLS 

//EJEMPLO 1 - 

/*El usuario digite nombre y edad con la siguiente estructura de verificacion

1 a 18 años es joven
19 a 40 años es adulto 
41 a 60 años es maduro
61 en adelante es pencionado




let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));

if (edad<=18 ){
    alert("Hola: " + nombre + " eres joven");
}
 else if (edad <40) {
    alert("Hola: " + nombre + " eres adulto"); 
} else if (edad<=60) {
    alert("Hola: " + nombre + " eres maduro"); 
} else {
    alert("Hola: " + nombre + " eres pencionado");
}*/


/*CICLO WHILE

//DECLARAR VARIABLE NUMERICA QUE MUESTRE LA CUENTA REGRESIVA A LLEGAR A 0

// iniciamos la variable fuera del bucle
let cuentaAtras = prompt("Ingrese su numero")

// mientras la cuenta atrás sea mayor que 0
while (cuentaAtras > 0) {
  // mostramos el valor de la cuenta atrás en cada iteración
  document.write(cuentaAtras + '<br>')
  // restamos 1 a la cuenta atrás
  cuentaAtras = cuentaAtras - 1
}

document.write('¡Despegue! 🚀')
*/

//DO WHILE

/*Imprimir 5 edades de diferentes personas y determinar si son mayores de edad
 
let NumPersonas = 0;
do{
    let nombre =(prompt("Ingrese el nombre"));
    let edad = parseInt(prompt("Ingrese el numero"));
    if (edad >=18){
        alert(nombre +" es mayor de edad");
    } else {
        alert(nombre + " es menor de edad");    
    }

    NumPersonas++;

} while (NumPersonas < 5)*/

//For

/*Imprimir las tablas de multiplicar del numero que el usuario ingrese hasta el numero 10, mostrar en pantalla la siguiente sintaxis

let numero = parseInt(prompt("Ingrese un número:"));

document.write(`Tabla de multiplicar del ${numero}: <br>`);
for (let i = 1; i <= 10; i++) {
    document.write(`${numero} x ${i} = ${numero * i} <br>`);
}
*/




//1. Imprime por consola un mensaje si el usuario y la contraseña coinciden con unos establecidos

//2. Verifica si un numero es positivo, negativo o cree e imprime un mensaje

//3. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuantos años les faltan

//4. Usa el operador ternario para asignar valor "adulto" o "menor" a una variable



//SWITCH

// EJERCICIO 1: REALIZAR UN PROGRAMA Q DETERMINE Q DIA DE LA SEMANA CORRESPONDE HOY, UTILIZANDO PRO
/*
const dia = "lunes"

switch (dia) {
  case "lunes":
    console.log("¡Hoy es lunes! 😢")
    break

    case "Martes":
    console.log("¡Hoy es Martes! 😢")
    break

    case "Miercoles":
    console.log("¡Hoy es Miercoles! 😢")
    break

    case "Jueves":
    console.log("¡Hoy es Jueves! 😢")
    break

    case "Viernes":
    console.log("¡Hoy es Viernes! 😢")
    break

    case "Sabado":
    console.log("¡Hoy es Sabado! 😢")
    break

    case "Domingo":
    console.log("¡Hoy es Domingo! 😢")
    break

  default:
    console.log("No es lunes, YAY! 🚀")
    break
}



// 


let edad = 25;

switch(true) {
  case (edad >= 18 && edad < 25):
    console.log("Eres mayor de edad y eres joven");
    break;
  case (edad >= 25 && edad < 40):
    console.log("Eres mayor de edad y estás en plena madurez");
    break;
  case (edad >= 40):
    console.log("Eres mayor de edad y estás en la mejor edad");
    break;
  default:
    console.log("Eres menor de edad");
}




/*
1. Programa que dada la edad de una persona indique si es mayor o menor de
edad. Se considera mayor de edad a partir de los 18 años.*/
/*
let nombres = prompt("Ingrese su nombre");
let edades=parseInt(prompt("Ingrese su edad"))

if (edades>=18){
    alert("Hola "+ nombres + " usted es mayor de edad"); 
} else if (edades<18){
    alert ("Hola "+ nombres + " usted es menor de edad");
}




// 3. Dado dos números A y B, determinar si A es mayor, menor o igual que B
let A = prompt("Ingrese un numero")
let B = prompt("Ingrese el segundo numero")

if (A > B){
    console.log ( A +" es mayor que "+ B)
} else if (A < B){
    console.log(A+ " es menor que "+B)
}else if (A === B) {
    console.log (A+ " es igual que "+B)
}

/*
Dado el peso de una persona:
a) Si el peso es menor o igual a 40 Kg. Muestre mensaje: Persona Baja de
Peso;
b) Si el peso es entre 41 y 70 Kg. Muestre el mensaje: Persona peso
promedio;
c) Si el peso es mayor a 71 Kg. Muestre el mensaje: “Persona con sobrepeso”


let nombre = prompt("Ingrese su nombre");
let peso = parseFloat (prompt("Ingrese su peso"));

if (peso<= 40){
    console.log(nombre + "  baja de peso")
} else if (peso <= 70){
    console.log(nombre + " estas en un peso promedio")
} else {
    console.log(nombre + " estas en sobrepeso")
}


/*En un almacén se hace un 20% de descuento a los clientes cuya compra supere los $1000, 
a los demás solo se les hace un 5% de descuento ¿ Cuál será la cantidad que pagara una 
persona por su compra?



let pago = prompt("INGRESE LA CANTIDAD DE PAGO");
let descuento = 0.20;
let descuento2 = 0.05;
let precioFinal = pago - (pago * descuento);
let precioFinal2 = pago - (pago * descuento2);


if (pago > 1000){
    console.log("Su descuento es de 20% y la ropa le queda en "+ (precioFinal) )
} else {
    console.log("Su descuento es de 5% y la ropa le queda en "+ precioFinal2 )
}

/*Programa que lea los nombres y edades de dos personas e imprima cuál de
ellas tiene más edad.



let nombres = prompt ("INGRESE SU NOMBRE")
let edad = parseInt (prompt ("INGRSE SU EDAD"))

let nombres2 = prompt ("INGRESE SU NOMBRE")
let edad2 = parseInt (prompt ("INGRSE SU EDAD"))

if (edad > edad2){
    console.log(nombres +" tiene mas edad que "+nombres2+ " con "+edad)
}else if(edad2 > edad){
    console.log(nombres2+ " Tienes mas edad que "+nombres+" con "+edad2)
}else{
    console.log("Tienen la misma edad")
}


/*11.Leer 2 números; si son iguales que los multiplique, si el primero es mayor
que el segundo que los reste y si no que los sume.


let num = parseInt (prompt ("INGRESE UN NUMERO"))
let num2 = parseInt (prompt ("INGRESE UN SEGUNDO NUMERO"))

if (num == num2){
    console.log( num * num2)
} else if(num>num2){
    console.log(num-num2)
}else{
    console.log(num+num2)
}



/*13.Escribe un programa que determine si un número ingresado por el usuario
es par o impar

let numero = parseInt (prompt ("INGRESE UN NUMERO"))


//Usamos el operador módulo (%). Este operador calcula el residuo de la división del número entre 2.
if (numero % 2 === 0){
    console.log("EL NUMERO "+numero+ " ES PAR")
}else  {
    console.log("EL NUMERO "+numero+ " ES IMPAR")
}


/*15.Crea un programa que solicite un número y verifique si es positivo, negativo
o igual a cero.


let num = parseInt (prompt ("INGRESE UN NUMERO"))

if (num >0){
    console.log ("EL NUMERO "+num+ " ES POSITIVO")
} else if (num<0){
    console.log("EL NUMERO "+num+ " ES NEGATIVO")
} else {
    console.log("EL NUMERO "+num+ " ES IGUAL A CERO")
}



/*17.Escribe un programa que permita al usuario seleccionar una figura
geométrica (triángulo y cuadrado) y luego calcule el área de esa figura
ingresando los datos necesarios para cada caso.


let figura = prompt("SLECCIONA UNA FIGURA GEOMETRICA (TRIANGULO O CUADRADO)")

if (figura === "triangulo"){
    let base = parseFloat(prompt("INGRESA LA BASE DEL TRIANGULO"))
    let altura = parseFloat(prompt("INGRESA LA ALTURA DEL TRIANGULO"))

    let areaTriangulo = (base * altura) / 2;

    console.log("EL AREA DEL TRIANGULO ES: " + areaTriangulo)

}else if (figura === "cuadrado"){
    let lado =parseFloat(prompt("INGRESA EL LADO DEL CUADRARO"))
    let areaCuadrado = lado * lado

    console.log("EL AREA DEL CUADRADO ES: " + areaCuadrado)
}else{
    console.log("FIGURA NO VALIDA")
}

/*19.Diseña un programa que solicite el nombre de un usuario y su contraseña. Si
el nombre es "admin" y la contraseña es "12345", muestra un mensaje de
acceso concedido; de lo contrario, muestra un mensaje de acceso denegado.

let  usuario = prompt("INTRODUCCE TU NOMBRE DE USUARIO")
let contraseña = prompt("INTRODUCE TU CONTRASEÑA")

if (usuario === "admin" && contraseña ==="12345"){
    alert( "ACCESO CONCEDIDO")
} else {
    alert("ACCESO DENEGADO")
}
*/