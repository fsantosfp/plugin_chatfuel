const axios = require('axios')
const GoogleApiBase = require('./GoogleCloudBase')

class ServiceAccount extends GoogleApiBase {

    constructor(token){
        super(token)
    }

    async get(projectId){
        const result = await this.request(projectId)
        const serviceAccount = this.filter(result)
        return serviceAccount.email
    }

    filter(list){
        const data = list.filter(account => account.displayName == "Dialogflow Integrations")
        return data[0]
    }

    async request(projectId){
        const url = `https://iam.googleapis.com/v1/projects/${projectId}/serviceAccounts`
        try{
            const result = await axios.get(url, this.header)
            return result.data.accounts
        }catch(error){
            throw error
        }
                
    }

}

module.exports = ServiceAccount