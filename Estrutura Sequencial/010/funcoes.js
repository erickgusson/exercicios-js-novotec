function converter() {

    let n1 = document.getElementById("n1").value

    let celParaFah = ((n1 * 9/5) + 32) / 100

    let total = parseFloat(n1) * parseFloat(celParaFah)

    let totalAredondado = Math.round(total)

    document.getElementById("resultado").innerHTML = totalAredondado + "°F"

}