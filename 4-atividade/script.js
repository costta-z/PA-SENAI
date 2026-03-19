// Selecionando os elementos do HTML
const inputIdade = document.getElementById('numeroInput');
const btnVoto = document.getElementById('btnVoto');
const divResultado = document.getElementById('resultadoVerificacao');

// Função principal que verifica a idade
function verificarIdade() {
    // Pega o valor digitado e converte para número inteiro
    const idadeText = inputIdade.value;
    
    // Limpa as classes de cores anteriores do resultado
    divResultado.className = '';

    // Verifica se o campo está vazio
    if (idadeText === '') {
        divResultado.textContent = 'Por favor, digite uma idade.';
        divResultado.classList.add('nao-pode-votar');
        return; // Para a execução da função aqui
    }

    const idade = parseInt(idadeText);

    // Regras de votação do Brasil
    if (idade < 0 || idade > 130) {
        divResultado.textContent = 'Idade inválida! Digite uma idade real.';
        divResultado.classList.add('nao-pode-votar');
    } else if (idade < 16) {
        divResultado.textContent = 'Você ainda não pode votar.';
        divResultado.classList.add('nao-pode-votar'); // Vermelho
    } else if (idade >= 16 && idade < 18) {
        divResultado.textContent = 'Seu voto é FACULTATIVO (opcional).';
        divResultado.classList.add('voto-facultativo'); // Amarelo
    } else if (idade >= 18 && idade < 70) {
        divResultado.textContent = 'Seu voto é OBRIGATÓRIO.';
        divResultado.classList.add('pode-votar'); // Verde
    } else if (idade >= 70) {
        divResultado.textContent = 'Seu voto é FACULTATIVO (opcional).';
        divResultado.classList.add('voto-facultativo'); // Amarelo
    }
}

// Escuta o evento de clique no botão "Verificar"
btnVoto.addEventListener('click', verificarIdade);

// BÔNUS: Permite que o usuário aperte a tecla "Enter" no teclado para verificar
inputIdade.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        verificarIdade();
    }
});