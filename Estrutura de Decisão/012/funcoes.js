function calcular() {

    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value

    let soma = parseFloat(n1) * parseFloat(n2)

    let bruto = parseFloat(soma)



    let irTaxa = 0.05
    let inssTaxa =  0.10
    let fgtsTaxa = 0.11

    let ir = parseFloat(bruto) * parseFloat(irTaxa)
    let inss = parseFloat(bruto) * parseFloat(inssTaxa)
    let fgts = parseFloat(bruto) * parseFloat(fgtsTaxa)
    
    let total = parseFloat(bruto) - parseFloat(ir) - parseFloat(inss)
    let descontos = parseFloat(ir) + parseFloat(inss)

    document.getElementById("bruto").innerHTML = "R$ " + bruto
    document.getElementById("IR").innerHTML = "R$ " + ir
    document.getElementById("irTaxa").innerHTML = irTaxa * 100
    document.getElementById("INSS").innerHTML = "R$ " + inss
    document.getElementById("FGTS").innerHTML = "R$ " + fgts

    document.getElementById("descontos").innerHTML = "R$ -" + descontos
    document.getElementById("Liquido").innerHTML = "R$ " + total
    
}