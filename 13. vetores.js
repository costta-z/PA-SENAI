// Vetores

const listaDeNomes = ["Marta", "Jose", "Maria"]

console.log("Exibindo todos os elementos: ")
console.log(listaDeNomes)

console.log("\nExibindo apenas o primeiro elemento: ")
console.log(listaDeNomes[0])

console.log("\nAdicionando um elemento: ")
listaDeNomes.push("Marília")
console.log(listaDeNomes)

// Sua vez, adicione mais um nome na lista.

console.log("\nAdicionando um elemento: ")
listaDeNomes.push("João")
console.log(listaDeNomes)

console.log("\nRemovendo um elemento: ")
// No índice 2, remover 1 apenas elemento.
listaDeNomes.splice(2, 1)
console.log(listaDeNomes)

// Sua vez, remova apenas o segundo nome da lista.
listaDeNomes.splice(1, 1)
console.log(listaDeNomes)

console.log("\nRemovendo apenas o último nome da lista: ")
listaDeNomes.pop()
console.log(listaDeNomes)

console.log("\nRemovendo apenas o primeiro nome da lista: ")
listaDeNomes.shift()
console.log(listaDeNomes)

