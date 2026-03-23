const inputMacas = document.getElementById('numeroInput');
const btnPagar = document.getElementById('btnPagar');
const divResultado = document.getElementById('resultadoCompra');

btnPagar.addEventListener('click', function() {
    const quantidade = parseInt(inputMacas.value);

    if (isNaN(quantidade) || quantidade <= 0) {
        divResultado.style.color = "#e63946"; 
        divResultado.textContent = "Por favor, digite uma quantidade válida.";
        return; 
    }

    let precoUnidade;

    if (quantidade < 12) {
        precoUnidade = 1.30;
    } else {
        precoUnidade = 1.00;
    }

    const valorTotal = quantidade * precoUnidade;

    const valorFormatado = valorTotal.toLocaleString('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' 
    });

    divResultado.style.color = "#2a9d8f"; 
    divResultado.innerHTML = `Total da compra: <strong>${valorFormatado}</strong>`;
});