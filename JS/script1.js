let objeto = {
    nombre: "Kenneth",
    leGustaJojos: true,
    edad: 20,
    libros: [{
        nombre: "The Raven Boys",
        autorapellido: "Stiefvater",
        autornombre: "Maggie",
        anio_de_publi: "2013",
        editorial: "Schoolastic Corporation",
    },
    {
        nombre: "Steelheart",
        autorapellido: "Sanderson",
        autornombre: "Brandon",
        anio_de_publi: "2015",
        editorial: "Random House",
    },
    {
        nombre: "El señor de las moscas",
        autorapellido: "Golding",
        autornombre: "Willian",
        anio_de_publi: "1954",
        editorial: "Faber Faber",
    }
    ],
    pasatiempos: ["Dibujar", "Jugar Videojuegos", "Leer"] ,
    contacto: {
    redesSociales: "@K.ennethh",
    movil: "5578790507",
    correo: "alcanamay@gmail.com"
    },

    imprimirDatos: function() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad:${this.edad}`);
    console.log(`Le gusta Jojos?: ${this.leGustaJojos}`);
    console.log(`Pasatiempos: ${this.pasatiempos}`);
    console.log(`Contacto:`);
    console.log(`Sociales: ${this.contacto.redesSociales}`);
    console.log(`celular: ${this.contacto.movil}`);
    console.log(`Correo: ${this.contacto.correo}`);
    console.log(`Libros Favoritos: ${this.libros}`);
    },

    imprimirLibros: function() {
        console.log("Libro 1 :")
        console.log(`Nombre: ${this.libros[0].nombre}`);
        console.log(`Apellido Autor: ${this.libros[0].autorapellido}`);
        console.log(`Nombre Autor: ${this.libros[0].autornombre}`);
        console.log(`Año de Publicaión: ${this.libros[0].anio_de_publi}`);
        console.log(`Editorial: ${this.libros[0].editorial}`);

        console.log("Libro 2 :")
        console.log(`Nombre: ${this.libros[1].nombre}`);
        console.log(`Apellido Autor: ${this.libros[1].autorapellido}`);
        console.log(`Nombre Autor: ${this.libros[1].autornombre}`);
        console.log(`Año de Publicaión: ${this.libros[1].anio_de_publi}`);
        console.log(`Editorial: ${this.libros[1].editorial}`);

        console.log("Libro 3 :")
        console.log(`Nombre: ${this.libros[2].nombre}`);
        console.log(`Apellido Autor: ${this.libros[2].autorapellido}`);
        console.log(`Nombre Autor: ${this.libros[2].autornombre}`);
        console.log(`Año de Publicaión: ${this.libros[2].anio_de_publi}`);
        console.log(`Editorial: ${this.libros[2].editorial}`);
        
    }

}  
objeto.imprimirDatos();
objeto.imprimirLibros();