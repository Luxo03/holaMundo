document.write('Elemento 1<br>');
document.write('Elemento 2<br>');
document.write('Elemento 3<br>');
document.write('Elemento 4<br>');
document.write('Elemento 5<br>');
document.write('Elemento 6<br>');

// bucles : while
 
/* 
while(condicion logica) {
    El codigo a ejecutar, si es verdadera ejecuta el cod dentro,
    si es falsa pasa a la siguiente linea de codigo.
    Para que termine hay que cambiar la condicion logica
    para que se detenga el bucle.
}
*/
let contador = 1;
while(contador <= 20) {
    document.write('Elemento '+contador);
}