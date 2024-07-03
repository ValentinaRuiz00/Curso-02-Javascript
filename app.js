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
let estado = true;

//la variable estado dentro del if fuciona como una variable independiente, pero unicamente en el if/scope
if(estado){
    console.log("Entró al if")
    let estado=false;
    console.log(estado);
}

console.log(estado);
//const es una variable constante, no puede ser reemplazada




    
