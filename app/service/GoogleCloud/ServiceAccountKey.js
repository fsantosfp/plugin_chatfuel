const GoogleCloudBase = require('./GoogleCloudBase')
const { base64decode } = require('nodejs-base64');
const axios = require('axios')

class ServiceAccountKey extends GoogleCloudBase {

    constructor(token){
        super(token)
    }

    async create(projectId, serviceAccountId){
        const data = await this.request(projectId, serviceAccountId)
        return this.convert(data)
    }

    async request(projectId, serviceAccountId){
        const url = `https://iam.googleapis.com/v1/projects/${projectId}/serviceAccounts/${serviceAccountId}/keys`
               
        try{
            const result = await axios.post(url, {"privateKeyType": "TYPE_GOOGLE_CREDENTIALS_FILE"} , this.header)
            return result.data
        }catch(error){
            throw error
        }
    }

    convert(data){
        return base64decode(data.privateKeyData)
    }

}

module.exports = ServiceAccountKey