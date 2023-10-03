export class Triangulo {
    constructor(lados, ladoA, ladoB, ladoC, altura) {
    this.lados = lados;
    this.ladoA = ladoA;
    this.ladoB = ladoB;
    this.ladoC = ladoC;
    this.altura = altura;
    }
    getPerimeter() {
        return this.ladoA + this.ladoB + this.ladoC;
    }
    
    getArea() {
        return (this.ladoB * this.altura) / 2;
    }
    
}