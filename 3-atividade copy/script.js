function calcularMedia() {

    // Obtendo os números dos inputs no HTML
    const numeroInput = document.getElementById("numeroInput");
    const numeroInput2 = document.getElementById("numeroInput2");
    const numeroInput3 = document.getElementById("numeroInput3");
    const resultadoDiv = document.getElementById("resultadoBoletim");

    let numero = parseFloat(numeroInput.value);
    let numero2 = parseFloat(numeroInput2.value);
    let numero3 = parseFloat(numeroInput3.value);

    if (
        isNaN(numero) || numero < 0 || numero > 10 ||
        isNaN(numero2) || numero2 < 0 || numero2 > 10 ||
        isNaN(numero3) || numero3 < 0 || numero3 > 10 
    ) {
        resultadoDiv.innerHTML = "<p style='color: #b91c1c; font-size: 14px;'>Por favor, preencha todos os campos com notas entre 0 e 10.</p>";
        return;
    }

    let media = (numero + numero2 + numero3) / 3;

    let status = "";
    let corStatus = "APROVADO";

    if (media >= 7) {
        status = "APROVADO";
        corStatus = "#15803d";
    } else if (media < 5) {
        status = "REPROVADO";
        corStatus = "#b91c1c";
    } else {
        status = "RECUPERAÇÃO";
        corStatus = "#e5f132";
    }

    resultadoDiv.innerHTML = `
    <div style="text-align: center;">
            <p>Média Final: <strong>${media.toFixed(1)}</strong></p>
            <p style="color: ${corStatus}; margin-top: 10px; font-size: 24px; text-transform: uppercase;">
                ${status}
            </p>
        </div>
    `;
}
    const botaoCalcular = document.getElementById("btnResultado");
    botaoCalcular.addEventListener("click", calcularMedia);