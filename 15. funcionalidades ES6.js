// Novos recursos ES6.

// Vetor de números.
const listaDenumeros = [1, 2, 3, 4, 5]

console.log("Exibindo números do vetor:")
console.log(listaDenumeros)

console.log("\nMultiplicando números do vetor:")
const dobrados = listaDenumeros.map(n => n * 2)
console.log(dobrados)

console.log("\n Filtrar números pares do vetor:");
const pares = listaDenumeros.filter(n => n % 2 == 0)
console.log(pares)

console.log("\nSomando todos os números do vetor: ")
const soma = listaDenumeros.reduce((soma, atual) => soma + atual, 0)
console.log(soma)
