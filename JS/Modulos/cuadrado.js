export class Cuadrado {
    constructor(lados, lado) {
        this.lados=lados;
        this.lado = lado;
        }
        getArea() {
            return this.lado * this.lado;
            }
            getPerimeter() {
            return this.lado*this.lados;
            }
    }