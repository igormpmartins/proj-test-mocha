const juros = require('./juros')
const { expect } = require('chai')

describe('Suite Juros', () => {

    it('Montante Juros Compostos', () => {

        let value = juros.calculoJuros(1000, 0.01, 1)
        expect(value).to.equal(1010)

        value = juros.calculoJuros(1000, 0.0035, 12)
        expect(value).to.equal(1042.82)

    })

})