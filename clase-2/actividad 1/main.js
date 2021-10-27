/* Solicitar al usuario un (1) nombre.
Si el mismo es igual a otro nombre almacenado en una variable, realizar una salida por alerta con el mensaje “Fui yo”. 
Caso contrario, la salida será “Yo no fui”.
*/

let nombre = prompt("Digite el nombre: ");
let nombreV = "carlos";

if (nombre == nombreV){
    alert("Hola juan carlos");
    alert("Fui yo");
}
else{
    alert("Yo no fui");
}