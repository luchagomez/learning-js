const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const listItem = famousSayings[0];
console.log(listItem);

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

//condiments[0]= 'Mayo';
//console.log(condiments);

//condiments =['Mayo'];
//console.log(condiments);

//utensils[3]= 'Spoon';
console.log(utensils);
utensils = ['Spoon']; //utensils is not mutable because it is declared using const

//const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

//const orangeJuice= groceryList.shift();
//console.log(groceryList);
//console.log(orangeJuice);

function addUtensil (arr){
    arr.push('Spoon');
}

addUtensil(utensils);

console.log(utensils);