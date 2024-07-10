// console.log(document);
// console.log(document.getElementById("titulo-web"));
// console.log(document.getElementById("titulo-web").textContent);
// console.log(document.querySelector("#titulo-web"))
// console.log(document.querySelectorAll(".text-danger"))
// console.log(document.querySelectorAll(".container .text-danger"))

// const h1 = document.getElementById("titulo-web");

// h1.textContent = "Nuevo texto desde js";
// h1.style.backgroundColor = "violet";

//Practica DOM
const inputColor = document.querySelector('#inputColor');
const btnVisualizar = document.querySelector('#btnVisualizar');
const parrafoExa = document.querySelector('#parrafoExa');
const cardColor = document.querySelector('#cardColor');

//addEventListener
console.log(inputColor.value);
btnVisualizar.addEventListener("click",()=>{
    console.log('Me diste click')
    console.log(inputColor.value);
    parrafoExa.textContent = inputColor.value;
    cardColor.style.backgroundColor = inputColor.value;
})