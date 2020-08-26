// .foreach

console.log('------- .forEach ITERATOR BEGIN -------')
const groceries = ['brown sugar', 'salt', 'cranberries', 'walnuts'];

groceries.forEach(groceryItem => console.log(' - ' + groceryItem));

printGrocery = (element) => {
    console.log(' - ' + element);
}
groceries.forEach(printGrocery);

/*
groceries.forEach() --> llama al método forEach en el array groceries
.forEach() --> ejecuta el mismo código para cada elemento del array. 
En el ejemplo, for each es invocado utilizando la función printGrocery.
Esta función requiere un argumento 'element' (por como está definida) y lo imprime.
En este caso se define a printGrocery como "callback function" que es una función que se pasa como argumento en otra función, en este caso esa otra función es el forEach.

el método forEach siempre devuelve "undefined". 
 */

/*------------------------------------------------------------------*/

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below

fruits.forEach(fruitItem => console.log('I want to eat a ' + fruitItem));
console.log('------- .forEach ITERATOR END -------')

console.log('------- .map ITERATOR BEGIN -------')
//.map
const numbers = [1, 2, 3, 4, 5];

const bigNumbers0 = numbers.map(number => {
    return numbers * 10;
});
/*
.map --> funciona similar al for each, pero devuelve un array. 
Toma cada uno de los elementos en el array como argumentos en otra función, la cual ejecuta el código sobre el mismo y devuelve el resultado en otro array.
En el ejemplo, map toma los elementos de numbers y los pasa como argumentos para la función BigNumbers. 
BigNumbers multiplica cada elemento del array por 10 y los devuelve.
 */

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below

const secretMessage = animals.map(animal => {
    return animal.charAt(0);
})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below

const smallNumbers = bigNumbers.map(number => {
    return number/100;
})
console.log(smallNumbers);
console.log('------- .map ITERATOR END -------')