// Vetor de objetos com dados de nome e idade.
// Um objeto carrega dados com uma classe.
const listaDenumeros = [1, 2, 3, 4, 5]

const listaDeNomes = ["Marta", "Luiz", "Pedro"]

const listaDeUsuarios = [
    {nome: "Ana", idade: 25},
    {nome: "Maria", idade: 35},
    {nome: "Joana", idade: 45},
    {nome: "José", idade: 15}
]

// Percorrendo e exibindo os elementos do vetor.
// ForEach é uma função com laço de repetição.
// Use as {} caso precise de mais de uma linha.
// Neste caso não precisa , mas vamos usar.
console.log("Exibindo todos os usuários do vetor.")
listaDeUsuarios.forEach( u => {
    console.log(`${u.nome} tem ${u.idade} anos.`)
    
})

// como os antigos
console.log("\nExibindo todos os usuários do vetor como os antigos.")
for(let i = 0; i< listaDeUsuarios.length; i++) {
    console.log(`${listaDeUsuarios[i].nome} tem ${listaDeUsuarios[i].idade} anos.`)
} 

console.log("\nFiltrando maiores de 18 anos.")
const maioridade = listaDeUsuarios.filter(usuario => usuario.idade >= 18)
maioridade.forEach( usuario =>
// Use as {} caso precise de mais de uma linha.
// Neste caso não precisa , por isso não vamos usar.
console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
)

console.log("\nFiltrando menores de 18 anos.")
const menoridade = listaDeUsuarios.filter(usuario => usuario.idade < 18)
menoridade.forEach( usuario =>
// Use as {} caso precise de mais de uma linha.
// Neste caso não precisa , por isso não vamos usar.
console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
)


console.log("\n Na lista de números, filtre e mostre apenas números pares:");
const pares = listaDenumeros.filter(n => n % 2 == 0)
console.log(pares)

console.log("\nNa lista de nomes, mostre todos os nomes com forEach:")
listaDeNomes.forEach( u => 
    console.log(`${listaDeNomes}`)
    
)