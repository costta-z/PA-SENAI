function calcularMedia() {

    // Obtendo os números dos inputs no HTML
    const numeroInput = document.getElementById("numeroInput");
    const numeroInput2 = document.getElementById("numeroInput2");

    let numero = parseFloat(numeroInput.value);
    let numero2 = parseFloat(numeroInput2.value);

    // Elemento onde o resultado será exibido
    const resultadoDiv = document.getElementById("resultadoMedia");
    resultadoDiv.innerHTML = "";

    // Verificar se são números válidos
    if (isNaN(numero) || numeroInput.value.trim() === "") {
        resultadoDiv.innerHTML = "<p>Por favor, digite um número válido para o primeiro campo.</p>";
        return;
    }

    if (isNaN(numero2) || numeroInput2.value.trim() === "") {
        resultadoDiv.innerHTML = "<p>Por favor, digite um número válido para o segundo campo.</p>";
        return;
    }

    // Cálculos
    let media = (numero + numero2) / 2;
    let soma = numero + numero2;
    let produto = numero * numero2;
    let maior = Math.max(numero, numero2);
    let menor = Math.min(numero, numero2);

    // Mostrar resultados (uma linha para cada)
    resultadoDiv.innerHTML = `
        <p>Média: ${media.toFixed(2)}</p>
        <p>Soma: ${soma.toFixed(2)}</p>
        <p>Produto: ${produto.toFixed(2)}</p>
        <p>Maior número: ${maior}</p>
        <p>Menor número: ${menor}</p>
    `;
}

// Evento do botão
const botaoCalcular = document.getElementById("btnCalcular");
botaoCalcular.addEventListener("click", calcularMedia);