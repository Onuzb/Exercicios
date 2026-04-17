function imc(){
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value) / 100;
    var imc = peso / (altura * altura);
    var resultado = document.getElementById("resultado");
    resultado.value = imc.toFixed(2);

    var classif = document.getElementById("classif");
    if(imc < 16){
        classif.value = "Baixo peso, muito grave";
    } else if(imc >= 16 && imc < 17){
        classif.value = "Baixo peso, grave";
    } else if(imc >= 17 && imc < 18.5){
        classif.value = "Baixo do peso";
    } else if(imc >= 18.5 && imc < 25){
        classif.value = "Peso normal";
    } else if(imc >= 25 && imc < 30){
        classif.value = "Sobrepeso";
    } else if(imc >= 30 && imc < 35){
        classif.value = "Obesidade grau I";
    } else if(imc >= 35 && imc < 40){
        classif.value = "Obesidade grau II";
    } else {
        classif.value = "Obesidade grau III";
    }

    var nome = document.getElementById("nome").value;
    var resultFinal = document.getElementById("resultFinal");
    resultFinal.value = nome + " possui índice de massa corporal igual a: " + imc.toFixed(2) + " e possui uma classificação de: " + classif.value;
} 