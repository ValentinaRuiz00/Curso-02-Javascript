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
// console.log(inputColor.value);
// btnVisualizar.addEventListener("click",()=>{
//     console.log('Me diste click')
//     console.log(inputColor.value);
//     parrafoExa.textContent = inputColor.value;
//     cardColor.style.backgroundColor = inputColor.value;
// })


//Create Element
// const lista = document.querySelector("#lista");
// const li = document.createElement('li');
// li.textContent = "Elemento desde js";
// console.log(li);

//AppendChild (PUEDE GENERAR REFLOW)
// lista.appendChild(li);

// const arrayPaises =["Peru","Bolivia","Chile"]

// arrayPaises.forEach((pais)=>{
//     const li = document.createElement("li");
//     li.textContent = "Elemento desde js";
//     li.textContent = pais;
//     lista.appendChild(li);
// })  


//InnerHTML (PUEDE GENERAR REFLOW)
// arrayPaises.forEach((pais)=>{
//     lista.innerHTML += `<li>${pais}</li>`;
// }) 

//Fragment (NO GENERA REFLOW)
//const fragment = document.createDocumentFragment();

// arrayPaises.forEach((pais)=>{
//     const li = document.createElement("li");
//     li.textContent = pais;
//     fragment.appendChild(li);
// })  

// lista.appendChild(fragment);

//InsertBefore
// const fragment = document.createDocumentFragment();

// arrayPaises.forEach((pais)=>{
//     const newNode = document.createElement("li");
//     newNode.textContent = pais;
//     const referenceNode = fragment.firstChild;
//     fragment.insertBefore(newNode,referenceNode);
// })  

// lista.appendChild(fragment);


//Practica Create Element
// const lista = document.querySelector("#lista");
// const arrayElementos = ["Perú", "Bolivia", "Colombia"];
// const fragment = new DocumentFragment();

//arrayElementos.forEach((pais) => {
//     const li = document.createElement("li");
//     li.className = "list";

//     const bold = document.createElement("b");
//     bold.textContent = "País: ";

//     const span = document.createElement("span");
//     span.className = "text-primary";
//     span.textContent = pais;

//     li.appendChild(bold);
//     li.appendChild(span);
//     fragment.appendChild(li);
// });

// lista.appendChild(fragment);

//Practica de Create Element mas corto
// const arrayElementos = ["Perú", "Bolivia", "Colombia"];
// let template = "";

// arrayElementos.forEach((pais) => {
//     template += `
//     <li class="list">
//         <b>País: </b> <span class="text-primary">${pais}</span>
//     </li>
//     `;
// });

// lista.innerHTML = template;

//Template
const lista = document.querySelector("#lista");
const fragment = document.createDocumentFragment();

const arrayElementos = ["Perú", "Bolivia", "Colombia"];

const liTemplate = document.querySelector("#liTemplate");

const clickPais = (e) => e.target.append(" click");

arrayElementos.forEach(pais=>{
    const clone = liTemplate.content.cloneNode(true);
    clone.querySelector('span').textContent = pais
    clone.addEventListener("click", clickPais);
    fragment.appendChild(clone);
})
lista.appendChild(fragment);