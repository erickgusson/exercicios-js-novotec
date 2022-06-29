function comparar() {

    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value

    if(parseFloat(n1) > parseFloat(n2)){
        alert("n1 é maior")
        document.getElementById("resultado").innerHTML = "n1 é maior"
    }
    else {
        alert("n2 é maior")
        document.getElementById("resultado").innerHTML = "n2 é maior"
    }

}