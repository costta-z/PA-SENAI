// Exercício.

// Crie um vetor com nome dos seus familiares.
// Com seis nome.

// use os comandos vistos em vetores após ciar a lista

const listafamiliares =["Pai", "Mãe", "Irmão 1", "Irmão 2", "Irmão 3", "Avó"]

console.log("Exibindo todos os elementos: ")
console.log(listafamiliares)

console.log("\nAdicionando um familiar: ")
listafamiliares.push("Avô")
console.log(listafamiliares)

console.log("\nRemovendo um familiar: ")
listafamiliares.splice(4, 1)
console.log(listafamiliares)