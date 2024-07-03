// //Interpolación
// nombreUsuario = "Valentina";
// let estado = false;

// //toUpperCase Para volver el string en mayuscula
// console.log(`Bienvenido: ${nombreUsuario.toUpperCase()}`);

// console.log(
// `${estado ? "en linea" : "ofline"}
// `
// );

//var,let,const
// let estado = true;

// //la variable estado dentro del if fuciona como una variable independiente, pero unicamente en el if/scope
// if(estado){
//     console.log("Entró al if")
//     let estado=false;
//     console.log(estado);
// }

// console.log(estado);
// //const es una variable constante, no puede ser reemplazada


// //array con push,pop,shift,unshift 
//push =  añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
//unshift = agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
//pop = elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
//shift = elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array.
// const frutas = ["Sandía","Pera"];

// frutas.push("Manzana");
// frutas.unshift("Banano");
// frutas.pop();
// frutas.shift();

// console.log(frutas);


//Practica de carrito de compras
function carrito() {
    let frutas = [];
    let continuar = true;

    while (continuar) {
        let fruta = prompt("🍓 ¿Qué fruta desea comprar? 🛒");
        if (fruta) {
            frutas.push(fruta);
        }
        continuar = confirm("🍓¿Desea agregar otra fruta?🛒");
    }

    return frutas;
}

let miCarrito = carrito();
console.log("Frutas en el carrito:", miCarrito);

  




    
