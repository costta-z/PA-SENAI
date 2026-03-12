const listaDeAlunos = [
    { nome: "Ana", nota: 5.0},
    { nome: "Bruno", nota: 10.0},
    { nome: "Carla", nota: 2.0},
    { nome: "Andrea", nota: 7.0},
    { nome: "Marta", nota: 6.0}
];

console.log("Encontre a aluna Marta e mostre o nome e a média dela.")
const alunoEncontrado = listaDeAlunos.find(u => u.nome === "Marta")
console.log(alunoEncontrado)
console.log(`Nome : ${alunoEncontrado.nome} \nMédia: ${alunoEncontrado.nota}`)

// console.log("\nMostre a média geral da turma.")
// const somaIdades = listaDeAlunos.reduce((total, usuario) => total + usuario.nota / listaDeAlunos, 0)
// console.log(somaIdades)

console.log("\nMostre o nome e a média dos alunos com nota abaixo de 7.0.")
const notasTodos = listaDeAlunos.filter(usuario => usuario.nota < 7.0)
notasTodos.forEach( usuario =>
console.log(`${usuario.nome} tirou: ${usuario.nota}.`)
)
console.log("\nMostre apenas o nome dos alunos com nota maior ou igual a 7.0..")
const notasTodos1 = listaDeAlunos.filter(usuario => usuario.nota >= 7.0)
notasTodos1.forEach( usuario =>
console.log(`${usuario.nome} tirou: ${usuario.nota}.`)
)
