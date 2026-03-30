import './style.css'

function InfoAluno() {
    const nome = "João Silva"
    const idade = 23
    const curso = "Desenvolvimento de Sistemas"
    
    return (
        <div className="info-aluno">
            <h2>Informação do aluno: </h2>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Curso: {curso}</p>
        </div>
    )
}

export default InfoAluno