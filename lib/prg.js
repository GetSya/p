const fs = require('fs')



/**
 * Add Commands/Response message to database
 * @param {String} msg
 * @param {Sstring} response
 * @param {String} userId
 * @param {Object} data
 * @returns true
 */
const addPrg = (judul, deskripsi, image, _data) => {
    const obj = {
        judul: judul,
        deskripsi: deskripsi,
        image: image,
    }
    _data.push(obj)
    fs.writeFileSync('./database/prg.json', JSON.stringify(_data))

    return true
}


/**
 * Delete commands from database
 * @param {String} command
 * @param {Object} _data
 */
const deletePrg = (command, _data) => {
    Object.keys(_data).forEach((i) => {
        if (_data[i].judul === command) {
            _data.splice(i, 1)
            fs.writeFileSync('./database/prg.json', JSON.stringify(_data))
        }
    })
    return true
}


/**
 * Check command is available or not
 * @param {String} command
 * @param {Object} _data
 * @returns {Boolean}
 */

const checkPrg = (commands, _data) => {
    let status = false
    Object.keys(_data).forEach((i) => {
        if (_data[i].judul === commands) {
            status = true
        }
    })

    return status
}



module.exports = {
    addPrg,
    deletePrg,
    checkPrg
}