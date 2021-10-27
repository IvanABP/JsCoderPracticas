/*Solicitar al usuario una (1) tecla.
Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. Caso contrario, la salida será “Error”. */

let tecla = prompt ("Presione una tecla y luego de enter");

if(tecla == "y" || tecla == "Y"){
    alert("correcto");
}
else{
    alert("error");
}