let fruitspush = ["apple", "banana"];
fruitspush.push("orange"); // ["apple", "banana", "orange"]

let fruitspop = ["apple", "banana", "orange"];
let lastFruitpop = fruitspop.pop(); // "orange"

let fruitsshift = ["apple", "banana", "orange"];
let firstFruitshift = fruitsshift.shift(); // "apple"

let fruitsunshift = ["banana", "orange"];
fruitsunshift.unshift("apple"); // ["apple", "banana", "orange"]

let fruitssplice = ["apple", "banana", "orange"];
fruitssplice.splice(1, 1, "grape"); // ["apple", "grape", "orange"]

let fruitsconcat = ["apple", "banana"];
let vegetables = ["carrot", "potato"];
let food = fruitsconcat.concat(vegetables); // ["apple", "banana", "carrot", "potato"]

// Ejemplos de reduce
console.log('Ejemplos de reduce');

//EJEMPLO 1 de reduce
const numbers = [10, 20, 30, 40];
// Utilizamos reduce para sumar todos los números del array
const sum = numbers.reduce((accumulator, currentValue) => {
    // En cada iteración, sumamos el valor actual al acumulador
    return accumulator + currentValue;
}, 0); // 0 es el valor inicial del acumulador
const resultadoReduce1 = 'El resultado del primer ejemplo de reduce es: ' + sum;

// Mostrar resultado en HTML
document.getElementById('reduce1').textContent = 'Inicio:' + numbers;
document.getElementById('resultadoReduce1').textContent = resultadoReduce1;

//EJEMPLO 2 de reduce
const words = ['Hola', ' ', 'mundo', '!'];
// Utilizamos reduce para concatenar todos los strings del array
const phrase = words.reduce((accumulator, currentValue) => {
    // En cada iteración, concatenamos el valor actual al acumulador
    return accumulator + currentValue;
}, ''); // '' es el valor inicial del acumulador
const resultadoReduce2 = 'El resultado del segundo ejemplo de reduce es: ' + phrase;

// Mostrar resultado en HTML
document.getElementById('reduce2').textContent = 'Inicio:' + words;
document.getElementById('resultadoReduce2').textContent = resultadoReduce2;

// Ejemplo de filtro
console.log('Ejemplos de filtro');

// Array de números
const numbers1al10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Utilizamos filter para obtener solo los números pares del array
const evenNumbers = numbers1al10.filter(number => {
    // Comprobamos si el número es divisible por 2 (es par)
    return number % 2 === 0;
});

// Construir el mensaje del resultado de filtro
const resultadoFilter = 'El resultado del filtro es: ' + evenNumbers.join(', ');

// Mostrar resultado en HTML
document.getElementById('filter').textContent =  'Inicio:' + numbers1al10;
document.getElementById('resultadoFilter').textContent = resultadoFilter;

