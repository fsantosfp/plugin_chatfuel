const path = require('path')
const fs = require('fs')

const setPath = (directory, filename) => {
    return path.join(__dirname, '../' + directory + filename)
}

exports.save = (directory, filename, content) => {

    const file = setPath(directory, filename)

    fs.writeFile(file, content, (err)=>{
        if(err) throw err
    })

    return true;
}

exports.fileExist = (directory, filename) => {
    const file = setPath(directory, filename)
    return fs.existsSync(file) ? true : false
}

exports.read = (directory, filename) => {
    if(this.fileExist(directory, filename)){
        const rawdata = fs.readFileSync(setPath(directory, filename))
        return JSON.parse(rawdata)
    }
}