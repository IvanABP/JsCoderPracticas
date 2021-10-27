/*Solicitar al usuario uno o más precios.
Luego, efectuar un descuento en porcentajes (20%, 30%, etcétera) sobre los valores ingresados, y realizar una salida.

 */

let precioProducto = parseFloat(prompt("Digite el valor del producto"));
let descuento20 = precioProducto - (precioProducto*20)/100;
console.log(descuento20);
alert("El descuento con el %20 es "+ descuento20);

let descuento30= precioProducto - (precioProducto*30)/100;
console.log(descuento30);
alert("El descuento con el %30 es "+ descuento30);
