// wrapper objects

// Construtores -> Criam novos objetos

let name = new String("Lemon");
let age = new Number(28);
let ninja = new Boolean(false);

console.log(name.length);
console.log(name, age, ninja);

// examples

console.log(age.valueOf()); // pega o valor de age; // 28
console.log(age.value); // undefined

// Conversores sem o - new -> Convertem o tipo

let band = String("Linkin Park");
let number_members = Number("6");
let active = Boolean(0);

console.log(number_members, band, number_members, active);

let taylorSwift = String("24");
console.log(taylorSwift);
console.log(active);

let albums = Boolean({});
console.log(albums);
console.log(!!{});
