const juros = require('./negocios/juros')
const t = juros.calculoJuros(1000, 0.01, 12)
console.log('juros', t)