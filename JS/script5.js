import { Cuadrado } from "./Modulos/cuadrado.js";
import { Triangulo } from "./Modulos/triangulo.js";
import { Pentagono } from "./Modulos/pentagono.js";
import { Factorial } from "./Modulos/factorial.js";
import { Tiempo } from "./Modulos/reloj.js";

console.log (Factorial(5));

setInterval(function(){
    Tiempo();
}, 1000); 

let miCuadrado = new Cuadrado(4, 8);
console.log(`El perímetro de mi cuadrado es ${miCuadrado.getPerimeter()}`);
console.log(`El área de mi cuadrado es ${miCuadrado.getArea()}`);

let miTriangulo = new Triangulo(3, 5, 5, 3, 6);
console.log(`El perímetro de mi triángulo es ${miTriangulo.getPerimeter()}`);
console.log(`El área de mi triángulo es ${miTriangulo.getArea()}`);

let miPentagono = new Pentagono(5, 6, 9);
console.log(`El perímetro de mi pentágono es ${miPentagono.getPerimeter()}`);
console.log(`El área de mi pentágono es ${miPentagono.getArea()}`);