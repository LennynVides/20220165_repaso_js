// Ejemplos de métodos de array

// Método push: Agrega elementos al final del array
let frutasAgregar = ["manzana", "plátano"];
frutasAgregar.push("naranja"); // ["manzana", "plátano", "naranja"]

// Método pop: Elimina el último elemento del array y devuelve ese elemento
let frutasEliminar = ["manzana", "plátano", "naranja"];
let ultimaFruta = frutasEliminar.pop(); // "naranja"

// Método shift: Elimina el primer elemento del array y devuelve ese elemento
let frutasEliminarPrimero = ["manzana", "plátano", "naranja"];
let primeraFruta = frutasEliminarPrimero.shift(); // "manzana"

// Método unshift: Agrega uno o más elementos al inicio del array
let frutasAgregarInicio = ["plátano", "naranja"];
frutasAgregarInicio.unshift("manzana"); // ["manzana", "plátano", "naranja"]

// Método splice: Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
let frutasModificar = ["manzana", "plátano", "naranja"];
frutasModificar.splice(1, 1, "uva"); // ["manzana", "uva", "naranja"]

// Método concat: Combina dos o más arrays
let frutas = ["manzana", "plátano"];
let verduras = ["zanahoria", "papa"];
let alimentos = frutas.concat(verduras); // ["manzana", "plátano", "zanahoria", "papa"]

// Ejemplos de reduce
console.log('Ejemplos de reduce');

// Ejemplo 1 de reduce: Sumar todos los números del array
const numeros = [10, 20, 30, 40];
const suma = numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
const resultadoReduce1 = 'La suma de los números es: ' + suma;

// Ejemplo 2 de reduce: Concatenar todas las palabras del array
const palabras = ['Hola', ' ', 'mundo', '!'];
const frase = palabras.reduce((acumulador, valorActual) => acumulador + valorActual, '');
const resultadoReduce2 = 'La frase es: ' + frase;

// Ejemplos de filtro
console.log('Ejemplos de filtro');

// Array de números
const numerosDel1Al10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Obtener solo los números impares del array
const numerosImpares = numerosDel1Al10.filter(numero => numero % 2 !== 0);

// Construir el mensaje del resultado de filtro
const resultadoFiltro = 'Los números impares son: ' + numerosImpares.join(', ');

// Mostrar resultados
console.log(resultadoReduce1);
console.log(resultadoReduce2);
console.log(resultadoFiltro);
