
function calculate() {
    var valuea1 = document.getElementById('valuea1')
    var valuea2 = document.getElementById('valuea2')
    var valueb1 = document.getElementById('valueb1')
    var valueb2 = document.getElementById('valueb2')
    var valuec1 = document.getElementById('valuec1')
    var valuec2 = document.getElementById('valuec2')
    var valuea1float = Number.parseInt(valuea1.value)
    var valuea2float = Number.parseInt(valuea2.value)
    var valueb1float = Number.parseInt(valueb1.value)
    var valueb2float = Number.parseInt(valueb2.value)
    var valuec1float = Number.parseInt(valuec1.value)
    var valuec2float = Number.parseInt(valuec2.value)

    var a = valuea1float / valuea2float
    var b = valueb1float / valueb2float
    var c = valuec1float / valuec2float

    var resultx1numerator = (- b + Math.sqrt(b**2 - 4 * a * c))
    var resultx1denominator = 2 * a

    var resultx2numerator = (- b - Math.sqrt(b**2 - 4 * a * c))
    var resultx2denominator = 2 * a

    var resultx1 = (- b + Math.sqrt(b**2 - 4 * a * c)) / (2 * a)

    var resultx2 = (- b - Math.sqrt(b**2 - 4 * a * c)) / (2 * a)


    if (resultx1 === resultx2) {
        results.innerText = `Sua equação possue apenas uma raiz real e seu valor é em fração ${resultx1numerator}/${resultx1denominator} e também pode ser apresentado dessa forma: ${resultx1}`
    } else {
        results.innerText = `O resultado de x1 é ${resultx1numerator}/${resultx1denominator} ou ${resultx1} e de x2 é ${resultx2numerator}/${resultx2denominator} ou ${resultx2}`
    }

    console.log()

}
