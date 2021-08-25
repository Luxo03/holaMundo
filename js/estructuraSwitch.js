/* if(op==1){
    // Primera opc
}else if(op==2){
    // Segunda opc
}else if(op==3){
    // Tercera opc
} // cuando hay mas de 2 else if, es complicado de mantener, hay que evitarlo, o cuando tengo vs opc.
 Para resumir es cuando tenemos muchas condiciones al mismo tiempo.
*/
 
/*
switch(operacion){ 'Opc de menu' Elige solo 1 opc y luego salta al siguiente conj de codigo.
    case 1: puede ir al lado pero para que quede mas ordenado, se lo coloca abajo habitualmente
    Todo el codigo a ejecutar si la opc que eligió el usuario es la opc 1
    al final se pone break;
    case 2: 
    ... todo el codigo a ejec si elige el us la opc 2
    break; acá se termina la opc 2
    case 3:
    ...
    break;
    case 'otros': en caso de que el nombre del caso sea texto
    ...
    break; 
    default: habitualmente va al final, se usa en caso de que no use ninguna de las opc que se brindó
    ... codigo a ejecutar por defecto (la opcion que acaba de ingresar es invalida por ejem)
}
*/

let estacion = prompt('Ingrese su estacion del año preferida: 1- Verano, 2- Invierno, 3- Otoño, 4- Primavera');
// si hubiera utilizado el parseInt pondria directamente luego de case 1 como numero entero, pero como no lo pusimos, va entre comillas.
switch(estacion){
    case '1': 
    case 'verano':
    case 'Verano':
        document.write('La estacion preferida del usuario es Verano');
        break;
    case '2':
    case 'invierno':
    case 'Invierno':
        document.write('La estacion preferida del usuario es Invierno');
        break;
    case '3':
    case 'otoño':
    case 'Otoño':
        document.write('La estacion preferida del usuario es Otoño');
        break;
    case '4':
    case 'primavera':
    case 'Primavera':
        document.write('La estacion preferida del usuario es Primavera');
        break;
    default:
        alert('Acaba de ingresar una opción inválida')
}

