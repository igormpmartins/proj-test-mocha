const calculoJuros = (p, i, t) => parseFloat((p * Math.pow(1+i, t)).toFixed(2))

module.exports = {
    calculoJuros
}