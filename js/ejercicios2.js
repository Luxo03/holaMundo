// Ej 7- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

/* let a = parseInt(prompt('Ingresa un primer numero aquí'));
let b = parseInt(prompt('Ingresa un segundo numero aquí'));
let c = parseInt(prompt('Ingresa un tercer numero aquí'));
 
document.write('Numero 1 = '+a);
document.write('<br>Numero 2 = '+b);
document.write('<br>Numero 3 = '+c);
 
if (a > b && a > c) {
    document.write('<br>El Numero 1 es el mayor de los 3')
} else {
    if (b > a && b > c) {
    document.write('<br>El Numero 2 es el mayor de los 3')} 
    else {
    if (c > a && c > b)
    document.write('<br>El Numero 3 es el mayor de los 3')}
}
 
*/

// Ej 8 - Escribe un programa que pida un número y diga si es divisible por 2

/* let n1 = parseInt(prompt("Ingresa un numero aquí"));
document.write("El numero es: " + n1);

if (n1 % 2 == 0) {
  document.write("<br>Éste número es divisible en 2");
} else {
  document.write("<br>Éste número NO es divisible en 2");
}

*/

/* Ej 10 - Escribe un programa que pida un número y nos diga si es divisible por 2,
3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro) */

/*
let number = parseInt(prompt("Ingresa un numero aquí"));
document.write("El numero es: " + number);

if (number % 2 == 0 || number % 3 == 0 || number % 5 == 0 || number % 7 == 0) {
  document.write("<br>Éste numero es divisible en 2, 3, 5 o 7");
} else {
    document.write('<br>Éste número NO es divisible en 2, 3, 5 o 7')
}
*/
 
/* Ej 11 - Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible
(hay que decir todos por los que es divisible) */

let n = parseInt(prompt("Ingresa un numero aquí"));
document.write("El numero es: " + n);

 if (n % 2 == 0 && n % 3 == 0 && n % 5 == 0 && n % 7 == 0) {
  document.write("<br>Éste numero es divisible en 2, 3, 5 y 7");
} else if (n % 2 == 0 && n % 3 == 0 && n % 5 == 0) {
  document.write('<br>Éste número es divisible en 2, 3 y 5')
} else if (n % 2 == 0 && n % 5 == 0 && n & 7 == 0) {
  document.write('<br>Éste número es divisible en 2, 5 y 7')
} else if (n % 2 == 0 && n % 3 == 0 && n & 7 == 0) {
  document.write('<br>Éste número es divisible en 2, 3 y 7')
} else if (n % 3 == 0 && n % 5 == 0 && n % 7 == 0) {
  document.write('<br>Éste número es divisible en 3, 5 y 7')
} else if (n % 2 == 0 && n % 3 == 0) {
  document.write('<br>Éste número es divisible en 2 y 3')
} else if (n % 2 == 0 && n % 5 == 0) {
  document.write('<br>Éste número es divisible en 2 y 5')
} else if (n % 2 == 0 && n % 7 == 0) {
  document.write('<br>Éste número es divisible en 2 y 7')
} else if (n % 3 == 0 && n % 5 == 0) {
  document.write('<br>Éste número es divisible en 3 y 5')
} else if (n % 3 == 0 && n % 7 == 0) {
  document.write('<br>Éste número es divisible en 3 y 7')
} else if (n % 5 == 0 && n % 7 == 0) {
  document.write('<br>Éste número es divisible en 5 y 7')
} else if (n % 2 == 0) {
  document.write('<br>Éste número es divisible en 2')
} else if (n % 3 == 0) {
  document.write('<br>Éste número es divisible en 3')
} else if (n % 5 == 0) {
  document.write('<br>Éste número es divisible en 5')
} else if (n % 7 == 0) {
  document.write('<br>Éste número es divisible en 7')
} else {
  document.write('<br>Éste número NO es divisible en 2, 3, 5 o 7')
}



/* switch(number){
  case (number % 2 == 0):
  document.write('<br>Éste número es divisible en 2');
  break;
  case (number % 2 == 0 && number % 3 == 0):
  document.write('<br>Éste número es divisible en 2 y 3');
  break;
  case (number % 2 == 0):
  case (number % 3 == 0):
  case (number % 5 == 0):
  document.write('<br>Éste número es divisible en 2, 3 y 5');
  break;
  case (number % 2 == 0):
  case (number % 3 == 0):
  case (number % 5 == 0):
  case (number % 7 == 0):
  document.write('<br>Éste número es divisible en 2, 3, 5 y 7');
  break;
  case (number % 3 == 0):
  document.write('<br>Éste número es divisible en 3');
  break;
  case (number % 3 == 0):
  case (number % 5 == 0):
  document.write('<br>Éste número es divisible en 3 y 5');
  break;
  case (number % 3 == 0):
  case (number % 5 == 0):
  case (number % 7 == 0):
  document.write('<br>Éste número es divisible en 3, 5 y 7');
  break;
  case (number % 5 == 0):
  document.write('<br>Éste número es divisible en 5');
  break;
  case (number % 5 == 0):
  case (number % 7 == 0):
  document.write('<br>Éste número es divisible en 5 y 7');
  break;
  case (number % 7 == 0):
  document.write('<br>Éste número es divisible en 7');
  break;
  case (number % 2 == 0):
  case (number % 7 == 0):
  document.write('<br>Éste número es divisible en 2 y 7');
  break;
  case (number % 2 == 0):
  case (number % 5 == 0):
  document.write('<br>Éste número es divisible en 2 y 5');
  break;
  case (number % 2 == 0):
  case (number % 3 == 0):
  case (number % 7 == 0):
  document.write('<br>Éste número es divisible en 2, 3 y 7');
  break;
  default:
    alert('El numero ingresado NO es divisible en 2 y 3')
} */