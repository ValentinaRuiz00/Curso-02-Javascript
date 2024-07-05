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

const gato = {
    //Propiedades
    nombre: "Federico",
    duerme: true,
    edad: 1,
    enemigos:["agua","perros"]
};

console.log(gato["nombre"]);
console.log(gato.duerme);

//CRUD
//Añadir
gato.color = "Beige";
//Editar
gato.edad = 1.5;
//Eliminar
delete gato.duerme;
//Leer
console.log(gato);