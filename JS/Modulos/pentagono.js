export class Pentagono {
    constructor(lados, lado, apotema) {
    this.lados = lados;
    this.lado = lado;
    this.apotema = apotema;
    }

    getPerimeter() {
        return this.lados * this.lado;
    }
    getArea() {
        return ((this.lado * this.lados) * this.apotema) / 2;
    }
}