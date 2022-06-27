function converter() {

    let metrosParaCm = 100

    let n1 = document.getElementById("n1").value

    let total = parseFloat(n1) * parseFloat(metrosParaCm)

    document.getElementById("resultado").innerHTML = total + "cm"

}