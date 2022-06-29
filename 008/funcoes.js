function converter() {

    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value

    let soma = parseFloat(n1) * parseFloat(n2)

    let bruto = parseFloat(soma)

    let irTaxa = 0.11
    let inssTaxa =  0.08
    let sindicatoTaxa = 0.05

    let ir = parseFloat(bruto) * parseFloat(irTaxa)
    let inss = parseFloat(bruto) * parseFloat(inssTaxa)
    let sindicato = parseFloat(bruto) * parseFloat(sindicatoTaxa)
    
    let total = parseFloat(bruto) - parseFloat(ir) - parseFloat(inss) - parseFloat(sindicato)
    

    document.getElementById("bruto").innerHTML = bruto
    document.getElementById("IR").innerHTML = ir
    document.getElementById("INSS").innerHTML = inss
    document.getElementById("Sindicato").innerHTML = sindicato
    
    document.getElementById("Liquido").innerHTML = total
    

}