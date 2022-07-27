function converter() {

    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value

    let total = parseFloat(n1) * parseFloat(n2)

    document.getElementById("Liquido").innerHTML = "R$ " + total

}