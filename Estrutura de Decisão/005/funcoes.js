function calcular() {

    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value

    let soma = parseFloat(n1) + parseFloat(n2)
    let total = soma / 2

    if (parseFloat(total) > 9.9){
        document.getElementById("resultado").innerHTML = "Aprovado com Distinção"
    }
    else if (parseFloat(total) < 7){
        document.getElementById("resultado").innerHTML = "Reprovado"
    }
    else{
        document.getElementById("resultado").innerHTML = "Aprovado"
    }
    
}
