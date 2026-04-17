function conta() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operacao = document.getElementById("operacao").value;
    let resultado;

    switch(operacao) {
        case "soma":
            resultado = num1 + num2;
            break;
        case "menos":
            resultado = num1 - num2;
            break;
        case "mutiplicacao":
            resultado = num1 * num2;
            break;
        case "divisao":
            resultado = num1 / num2;
            break;
    }

    document.getElementById("resultado").value = resultado;

}