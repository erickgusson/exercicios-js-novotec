function media() {

    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let n3 = document.getElementById("n3").value
    let n4 = document.getElementById("n4").value

    let soma = parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4)

    let total = parseFloat(soma) / 4

    document.getElementById("resultado").innerHTML = total

}