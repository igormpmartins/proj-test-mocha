const fs = require('fs')

const readdir = path => {
    return new Promise((res, rej) => {
        fs.readdir(path, (err, files) => {
            if (err) {
                rej(err)
            } else {
                res(files)
            }
        })
    })
}

module.exports = {
    readdir
}