var contador = 0

setInterval(function() {


    if (confirm("Você ainda está ai?")) {
        contador += 1
        const texto = document.querySelector("i")
        texto.innerText = contador
    }
    else {
        contador = 0
    }

}, 10000)