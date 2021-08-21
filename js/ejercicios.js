//Ej 1 alerta sobre 'un mensaje' ↓

// alert('un mensaje')
 
/*Ej 2 Programa Hello World ↓
si es texto va entre comillas*/

let saludo = 'Hello ';
let saludo2 = 'World';

document.write(saludo + saludo2);
 
//Ej 3 programa suma
 
document.write('<br>Resultado: ');

let x = 3;
let y = 5;
 
document.write(x+y);
 
/* Ej 4 solicita nombre de usuario
 
prompt ('Hola nombreUsuario');
 
promt es una ventana emergente con un input el cual ingresa como texto
 */
 
/* Ej 5 prog 3 lineas num, num y resultado
parseInt sirve para transformar un numero de cadena de texto a un numero entero */
 
let n1 = parseInt(prompt ('Ingrese el primer numero'));
let n2 = parseInt(prompt ('Ingrese el segundo numero'));
document.write('<br>El resultado de la suma es: '+ (n1+n2));
// Otra forma de hacerlo era ↓ por ejem
/* let n3 = (n1 + n2); */
/* document.write('<br>El resultado de la suma es: '+ n3); */
