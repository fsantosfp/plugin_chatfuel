const path = require('path')

const ServiceAccount = require('../service/GoogleCloud/ServiceAccount')
const ServiceAccountKey = require('../service/GoogleCloud/ServiceAccountKey')
const Storage = require('../storage/Storage')

class Credential {

    constructor(token){
        this.serviceAccount = new ServiceAccount(token)
        this.serviceAccountKey = new ServiceAccountKey(token)
        this.directory = 'credentials/json/'
    }

    getfileName(projectId){
        return `credential-${projectId}.json`
    }

    async create(projectId){
        if(!Storage.fileExist(this.directory,this.getfileName(projectId))){

            const account = await this.serviceAccount.get(projectId)
            const privateKey = await this.serviceAccountKey.create(projectId, account)
        
            Storage.save(this.directory, this.getfileName(projectId), privateKey)
        }
    }

    getPath(projectId){
        return  this.directory + this.getfileName(projectId)
    }

}

module.exports = Credential