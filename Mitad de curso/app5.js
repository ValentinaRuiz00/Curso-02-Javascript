//EXPRESION REGULAR
//notacion literal
// const regExp = /valentina/i
// //notacion de objetos
// const regExpObjeto = new RegExp("valentina", "i")

// //Expresion regular para Email
// const regExpLiteral = new RegExp('^[^@]+@[^@]+\.[a-zA-Z]{2,}$');
// console.log(regExpLiteral.test("valentina@gmail.com"));


const formulario = document.querySelector("#formulario");
const userName = document.getElementById("userName")
const userEmail = document.getElementById("userEmail")

//validaciones con js
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

formulario.addEventListener('submit', e => {
    e.preventDefault();

    // console.log(userName.value);
    // console.log(userEmail.value);   

    if(!regUserEmail.test(userName.value)){
        console.log("Formato no válido");
        return;
    }

    if(!regUserEmail.test(userEmail.value)){
        console.log("Formato no válido");
        return;
    }

    console.log("Formulario enviado")
});

