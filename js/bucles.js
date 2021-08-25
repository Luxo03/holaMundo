// Para evitar tener que repetir el código se utiliza los bucles
/*
document.write('Elemento 1<br>');
document.write('Elemento 2<br>');
document.write('Elemento 3<br>');
document.write('Elemento 4<br>');
document.write('Elemento 5<br>');
document.write('Elemento 6<br>');
*/ 

// bucles : while
 
/* 
while(condicion logica) {
    El codigo a ejecutar, si es verdadera ejecuta el cod dentro,
    si es falsa pasa a la siguiente linea de codigo. Si de entrada
    no se cumple esa condicion, directamente el bucle no se ejecuta.
    Para que termine hay que cambiar la condicion logica
    para que se detenga el bucle.
}
*/
let contador = 21; //Al ser falsa, no se ejecuta directamente el bucle
console.log(contador) //Para que me muestre el valor de contador hasta el momnento en la consola
while(contador <= 20) {
    document.write('Elemento '+ contador + '<br>');
    contador = contador + 2;
    //contador++ para sumar de 1 en 1
}

// bucles : do-while hacer... mientras se cumple la condicion logica.

let cont = 25;
console.log(cont)
do{
    // codigo que quiero ejecutar varias veces
    document.write('Contador '+ cont + '<br>')
    // cambio la condicion logica, no necesariamente al final
    //cont-- //para decrementar de 1 en 1
    //cont++ para sumar de 1 en 1
    cont = cont - 5; // para restar de 5 en 5
}while(cont>=20) // puede estar el codigo pegado dentro de los parentesis, no afecta en nada eso a Javascript
    // la diferencia con el anterior es que siempre se ejecuta al menos 1 vez, porque el DO esta arriba.

// bucles/estructura : for
 
/* 
for(crear la variable; condicion logica; incrementar o decrementar la variable) {
    ... codigo a ejecutar muchas veces
    si la condicion logica no se cumple desde el principio no se ejecuta el for  
}
*/

//for(let i = 1 ; i <= 20 ; i++) para sumar de 1 en 1
for(let i = 1 ; i <= 20 ; i = i+2) {
    document.write('Estructura for vuelta '+i+'<br>')
}

