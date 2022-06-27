function converter() {

    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value

    let soma = parseFloat(n1) * parseFloat(n2)

    let bruto = parseFloat(soma)
    let ir = parseFloat(bruto) * 0.11
    let inss = parseFloat(bruto) * 0.08
    let sindicato = parseFloat(bruto) * 0.05
    let total = parseFloat(bruto) - parseFloat(ir) - parseFloat(inss) - parseFloat(sindicato)
    

    document.getElementById("bruto").innerHTML = bruto
    document.getElementById("IR").innerHTML = ir
    document.getElementById("INSS").innerHTML = inss
    document.getElementById("Sindicato").innerHTML = sindicato
    
    document.getElementById("Liquido").innerHTML = total
    

}