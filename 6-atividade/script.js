document.getElementById('btnResultado').addEventListener('click', function(event) {
    event.preventDefault();

    const matricula = document.getElementById('numeroInput').value;
    const anoNascimento = Number(document.getElementById('numeroInput2').value);
    const tempoTrabalhado = Number(document.getElementById('numeroInput3').value);

    const divResultado = document.getElementById('resultadoBeneficio');

    if (!matricula || !anoNascimento || !tempoTrabalhado) {
        alert("Por favor, preencha todos os campos antes de calcular.");
        return;
    }

    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;

    let mensagemHTML = `
        <p><strong>Código do Emprego:</strong> ${matricula}</p>
        <p><strong>Idade:</strong> ${idade} anos</p>
        <p><strong>Tempo de Trabalho:</strong> ${tempoTrabalhado} anos</p>
    `;

    if (idade >= 65 || tempoTrabalhado >= 30) {
        mensagemHTML += `<h3>Requerer aposentadoria</h3>`;
        divResultado.className = 'resultado-sucesso';
    } else {
        mensagemHTML += `<h3>Não requerer aposentadoria</h3>`;
        divResultado.className = 'resultado-negado';
    }

    divResultado.innerHTML = mensagemHTML;
});