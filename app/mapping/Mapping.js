const Storage = require('../storage/Storage')

class Mapping {

    constructor(projectId){
        this.directory = 'mapping/json/'
        this.fileName = `mapping-${projectId}.json`
    }
    save(data){
        const content = JSON.stringify(data.intents)
        Storage.save(this.directory, this.fileName, content)
        return this.url;
    }

    read(){
       return Storage.read(this.directory, this.fileName)
    }

    find(intent){
        const mapping = this.read()
        return mapping[intent] !== undefined ? mapping[intent] : ""
    }

}

module.exports = Mapping