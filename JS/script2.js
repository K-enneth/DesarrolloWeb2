class Poligono {
    constructor(lados) {
    this.lados=lados;
    }
    getPerimeter() {

    }
    getArea() {
    
}
}

class Triangle extends Poligono {
    constructor(lados,ladoa,ladob,ladoc,altura) {
    super(lados);
    this.ladoa=ladoa;
    this.ladob=ladob;
    this.ladoc=ladoc;
    this.altura=altura;
    }

    getArea() {
        return `El area es:  ${(this.ladoc * this.altura) / 2} `;
    }
    getPerimeter() {
        return `El perimetro es: ${this.ladoa + this.ladob + this.ladoc}`;
    }
}


let triangle1 = new Triangle(3,5,4,6,3)
console.log(triangle1)
console.log(triangle1.getArea())
console.log(triangle1.getPerimeter())

class Cuadrado extends Poligono {
    constructor(lados,lado) {
    super(lados);
    this.lado =lado;
    }

    getArea() {
    return `El area es: ${this.lado* this.lado}`;
    }
    getPerimeter() {
    return `El perimetro es: ${this.lado*4}`;
    }
}

let cuadrado1 = new Cuadrado(4,3)
console.log(cuadrado1)
console.log(cuadrado1.getArea())
console.log(cuadrado1.getPerimeter())

class Pentagono extends Poligono {
    constructor(lados,lado,apotema) {
    super(lados);
    this.lado = lado;
    this.apotema = apotema;
    }

    getArea() {
    return `El area es:  ${((this.lado*this.lados)*this.apotema)/2}`;
    }
    getParameter() {
    return `El perimetro es: ${this.lado*this.lados}`;
    }
}

let pentagono1 = new Pentagono(5,3,4)
console.log(pentagono1)
console.log(pentagono1.getArea())
console.log(pentagono1.getParameter())