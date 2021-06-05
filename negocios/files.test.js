const files = require('./files')
const {expect} = require('chai')
const fs = require('fs')
const sinon = require('sinon')

describe('Tests readdir', () => {

    afterEach(done=> {
        fs.readdir.restore()
        done()
    })

    it('Reads a dir', ()=> {

        sinon.stub(fs, 'readdir').callsFake( (path, cb) => {
            cb(null, ['file1.js', 'file2.js'])
        })

        const path = './'
        return files.readdir(path).then(list => {
            expect(list.length).to.equal(2)
            expect(fs.readdir.getCall(0).args[0]).to.equal(path)
        })

    })

    it('Reads a dir (fail)', ()=> {

        sinon.stub(fs, 'readdir').callsFake( (path, cb) => {
            cb('error', null)
        })

        const path = './'
        return files.readdir(path).catch(error => {
            expect(error).to.equal('error')
            expect(fs.readdir.getCall(0).args[0]).to.equal(path)
        })

    })


})