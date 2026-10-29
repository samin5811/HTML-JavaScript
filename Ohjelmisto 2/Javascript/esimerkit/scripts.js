'use strict';
console.log('Hei!');

document.querySelector('#target').innerHTML='Teksti!';

let nimi = 'Matti';
console.log(nimi);

nimi = 'Kaisi';
console.log(nimi);

const nimii = 'Paapo';

const age = 25;

const maanantai = true;

let v1, v2, v3;
v1=100;
v2=200;
v3=300;

console.log(v1,v2,v3);

let value1 = null;

let value2 = undefined;

console.log(typeof value1);
console.log(typeof value2);

let numero = 5;
console.log(typeof numero);
let numeroString = numero.toString();
console.log(typeof numeroString);

const ageStr = '24';

const age2 = parseInt(ageStr);

console.log(typeof age2);

let namee = 'Petra';
let namee2 = 'Martti';
let namee3 = 'Kaissa';
console.log(`Nimet: ${namee}, ${namee2}, ${namee3}`);

const name1 = prompt('Type your name.');
console.log(`hei ${name1}`);

console.log(Math.sqrt(3));
console.log(Math.random());

const ika = 20;
if (ika < 18){
    console.log(`You're a minor criminal...`);
} else if (ika < 12){
    console.log(`You're too young`);
} else {
    console.log('You are an adult');
}

const cabinClass = prompt('Enter the cabin class (A/B/C).');
switch (cabinClass) {
  case "A":
    console.log('Top deck cabin with window.');
    break;
  case "B":
    console.log('Top deck cabin without window.');
    break;
  case "C":
    console.log('Windowless cabin under the car deck.');
    break;
  default:
    console.log('Invalid cabin class.');
}

for (let i=0; i < 10; i++){
    console.log(i);
}