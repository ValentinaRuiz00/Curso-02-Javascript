//MAP
const user = [
    {name: "Valentina", ager:20},
    {name: "Yeimer", ager:27},
    {name: "Valeria", ager:17},
];

const names = user.map((user) => user.name);

console.log(names);

const numeros = [1,2,3,4,5,6,7,8];

const numerosPorDos = numeros.map((numeros) => numeros*2 );
console.log(numerosPorDos);

//FILTER
// const users = [
//     {uId:1, name:"Yeimer", ager:27},
//     {uId:2, name:"Valentina", ager:20},
//     {uId:3, name:"Valeria", ager:17},
// ];

// const Mayores = users.filter((edad) => edad.ager >= 20);
// console.log(Mayores);

// const filtrarUser = users.filter((uId) => uId.uId !==3);
// console.log(filtrarUser);

//FIND
// const users = [
//     {uId:1, name:"Yeimer", ager:27},
//     {uId:2, name:"Valentina", ager:20},
//     {uId:3, name:"Valeria", ager:17},
// ];

// const valentina = users.find((valentina) => valentina.uId === 2);
// console.log(valentina);

//FIND CON DESTRUCTURING 
// const {ager} = users.find((age) => age.uId === 2);
// console.log(ager);   

//SOME
// const users = [
//     {uId:1, name:"Yeimer", ager:27},
//     {uId:2, name:"Valentina", ager:20},
//     {uId:3, name:"Valeria", ager:17},
// ];

// const existe = users.some((user) => user.uId === 4);
// console.log(existe);

//FINDINDEX
const users = [
    {uId:1, name:"Yeimer", ager:27},
    {uId:2, name:"Valentina", ager:20},
    {uId:3, name:"Valeria", ager:17},
];

const indice = users.findIndex((user) => user.uId ===5);
console.log(indice);

//SLICE
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
//             0     [1      2]        3
const newArray = arr.slice(1, 3);

console.log(newArray);


//CONCAT
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);

//Spread Syntax
const array4 = array1.concat(array2);

console.log(array4);

//REDUCE
const numero = [1,2,3,4,5];

const sumarTodos = numero.reduce((acc, valorActual) => acc + valorActual); 
console.log(sumarTodos);

//Aplanar matrices anidadas 
const arrayNumeros = [
    [0, 1],
    [2, 3],
    [4, 5],
];

const soloNumeros = arrayNumeros.reduce(
    (acc, current) => acc.concat(current)
);

console.log(soloNumeros);





