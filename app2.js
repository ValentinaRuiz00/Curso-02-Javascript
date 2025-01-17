//Funciones
//Funciones declarativas
// declaro la función
function numAleatorioRango(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// invoco la función
console.log(numAleatorioRango(1, 11))


//Funcion expresada
const miNumero = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(miNumero(1, 11))


//Arrow function-funciones de flecha
const miNumeroFlecha = max => Math.floor(Math.random() * (max - 1)) + 1;
        
console.log(miNumeroFlecha(11))

//Arrow y Foreach
let frutas = ["manzana", "sandía", "pera"]
frutas.forEach((fruta, index, array) => {
    console.log(index)
    console.log(fruta)
    console.log(array)
})

//Objetos

// const gato = {
//     //Propiedades
//     nombre: "Federico",
//     duerme: true,
//     edad: 1,
//     enemigos:["agua","perros"]
// };

// console.log(gato["nombre"]);
// console.log(gato.duerme);

// //CRUD
// //Añadir
// gato.color = "Beige";
// //Editar
// gato.edad = 1.5;
// //Eliminar
// delete gato.duerme;
// //Leer
// console.log(gato);

//hasOwnProperty
// console.log(gato.hasOwnProperty("nombre"))
// console.log(gato.hasOwnProperty("salud"))

//Objetos anidados
// const gato = {
//     nombre: 'Valiente',
//     duerme: true,
//     edad: 10,
//     enemigos: ["agua", "perros"],
//     otros: {
//         amigos: ["Cobarde", "Tímido", "Pegajoso"],
//         favoritos: {
//             comida: {
//                 fria: "salmón",
//                 caliente: "pollo"
//             }
//         }
//     }
// }

// console.log(gato.otros.favoritos.comida.caliente)

//Metodos-funciones-this
// const gato = {
//     nombre: 'Valiente',
//     duerme: true,
//     edad: 10,
//     enemigos: ["agua", "perros"],
//     comer: function(){
//         console.log('gato comiendo')
//     },
//     comerDos(alimento){
//         return `${this.nombre} está comiendo ${alimento}`;
//     },
//     mostrarEnemigos() {
//         return this.enemigos.forEach((item) => console.log(item));
//     },
// };

// gato.comer()
// gato.comerDos("Pescado");

//Recorrer con for in
// const gato = {
//     nombre: "Valiente",
//     duerme: true,
//     edad: 10,
//     enemigos: ["agua", "perros"],
// };

// for (const propiedad in gato) {
//     console.log(gato[propiedad]);
// }

// //Object Values 
// console.log(Object.values(gato));
// //Object Values con Foreach
// Object.values(gato).forEach((item) => console.log(item));

//Destructuring de Obejtos
// const gato = {
//     nombre: "Valiente",
//     duerme: true,
//     edad: 10,
//     enemigos: ["agua", "perros"],
//     otros: {
//         amigos: ["Cobarde", "Tímido", "Pegajoso"],
//         favoritos: {
//             comida: {
//                 fria: "salmón",
//                 caliente: "pollo",
//             },
//         },
//     },
// };

// const { nombre, duerme, edad, enemigos } = gato;
// console.log(nombre);
// console.log(duerme);
// console.log(edad);
// console.log(enemigos);


//Destructuring de Objetos por Defecto
// const gato = {
//     // nombre: "Valiente",
//     duerme: true,
//     edad: 10,
//     enemigos: ["agua", "perros"],
//     otros: {
//         amigos: ["Cobarde", "Tímido", "Pegajoso"],
//         favoritos: {
//             comida: {
//                 fria: "salmón",
//                 caliente: "pollo",
//             },
//         },
//     },
// };

// const { nombre: nombreGato = "Sin nombre" } = gato;
// console.log(nombreGato);


//Destructuring de Objetos Anidados
// const gato = {
//     nombre: "Valiente",
//     duerme: true,
//     edad: 10,
//     enemigos: ["agua", "perros"],
//     otros: {
//         amigos: ["Cobarde", "Tímido", "Pegajoso"],
//         favoritos: {
//             comida: {
//                 fria: "salmón",
//                 caliente: "pollo",
//             },
//         },
//     },
// };

// const {
//     otros: { amigos },
// } = gato;
// console.log(amigos);

//Getter y Setter
const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer(comida) {
        return `${this.nombre} está comiendo ${comida}`;
    },
    get nombreMayuscula() {
        return this.nombre.toUpperCase();
    },
    set nuevoEnemigo(nuevo) {
        this.enemigos.push(nuevo);
    },
};

// GET
console.log(gato.nombreMayuscula);

// SET
gato.nuevoEnemigo = "batman";
console.log(gato.enemigos);



