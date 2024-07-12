//Carrito de compras v2

// const carrito = document.querySelector("#carrito");
// const template = document.querySelector("#template");
// const fragment = document.createDocumentFragment();
// const btnesBotones = document.querySelectorAll(".card .btn");

// const carritoObjeto = []

// const agregarAlCarrito = (e) => {
//     console.log(e.target.dataset.fruta);

//     const producto = {
//         titulo: e.target.dataset.fruta,
//         id: e.target.dataset.fruta,
//         cantidad: 1
//     }

//     const indice = carritoObjeto.findIndex(
//         (item) => item.id ===producto.id 
//     )

//     console.log(indice);

//     if(indice === -1){
//         carritoObjeto.push(producto)
//     }else{
//         carritoObjeto[indice].cantidad ++;
//     }
//     console.log(carritoObjeto);

//     pintarCarrito(carritoObjeto);

// }

// const pintarCarrito = (array) => {
//     //recorrer
//     carrito.textContent = ("");
    
//     array.forEach(item => {
//         const clone = template.content.firstElementChild.cloneNode(true);
//         clone.querySelector('.lead').textContent = item.titulo;
//         clone.querySelector('.badge').textContent = item.cantidad;

//         fragment.appendChild(clone);
//     })

//     carrito.appendChild(fragment);
// };

// btnesBotones.forEach((btn)=> btn.addEventListener("click", agregarAlCarrito))

/////////////////////////////////////////////////////////////////////////////////////////////////////

//Burbujeo y captura
// const padre = document.querySelector(".border-primary");
// const hijo = document.querySelector(".border-secondary");
// const nieto = document.querySelector(".border-danger");

// padre.addEventListener('click',()=>{
//     console.log("Me diste click")
// });
// hijo.addEventListener('click',()=>{
//     console.log("Me diste click")
// });
// nieto.addEventListener('click',()=>{
//     console.log("Me diste click")
// });

// const cajas = document.querySelectorAll(".border");

// cajas.forEach((caja)=>{
//     caja.addEventListener('click',(e)=>{
//         e.stopPropagation();
//         console.log("Me diste click");
//     });
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//PreventDefault
// const formulario = document.querySelector('form');

// formulario.addEventListener('submit',(e)=>{
//     console.log('Me diste click');
//     e.preventDefault();
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Delegacion de Eventos

const container = document.querySelector('.container');

container.addEventListener('click',(e)=>{
    // console.log(e.target.id);

    if(e.target.id === "padre"){
        console.log("Diste click al padre")
    }

    // console.log(e.target.matches(".border-secondary"));

    if(e.target.matches(".border-secondary")){
        console.log("Diste click al hijo")
    }


    if(e.target.dataset.div === "divNieto"){
        console.log("Diste click al nieto")
    }
});