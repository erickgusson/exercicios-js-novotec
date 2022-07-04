function converter() {

    let n1 = document.getElementById("n1").value

    let fahParaCel = 5 * ((n1-32) / 9) / 100

    let total = parseFloat(n1) * parseFloat(fahParaCel)

    let totalAredondado = Math.round(total)

    document.getElementById("resultado").innerHTML = totalAredondado + "ºC"

}