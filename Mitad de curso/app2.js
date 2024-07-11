//MAP
const user = [
    {name: "Valentina", ager:20},
    {name: "Yeimer", ager:27},
    {name: "Valeria", ager:17},
];

const names = user.map((user) => user.name);

console.log(names);

const numeros = [1,2,3,4,5,6,7,8];

const numerosPorDos = numeros.map((numeros)=> numeros*2 );
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
const users = [
    {uId:1, name:"Yeimer", ager:27},
    {uId:2, name:"Valentina", ager:20},
    {uId:3, name:"Valeria", ager:17},
];

const valentina = users.find((valentina) => valentina.uId === 2);
console.log(valentina);




