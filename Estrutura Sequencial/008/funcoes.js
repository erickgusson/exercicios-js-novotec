function converter() {

    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value

    let soma = parseFloat(n1) * parseFloat(n2)

    let bruto = parseFloat(soma)

    let total = parseFloat(bruto)

    document.getElementById("bruto").innerHTML = "R$ " + total

}