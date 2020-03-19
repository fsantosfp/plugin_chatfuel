const dialogflow = require('dialogflow')
const uuid = require('uuid')
const path = require('path')
const Credential = require('../../credentials/Credential')

class SessionClient{
    constructor(){
        this.session = uuid.v4()
        this.credential = new Credential
    }

    async detect(projectId, input){

        this.credentials = { keyFilename: path.join(__dirname, '../../' + this.credential.getPath(projectId))}

        this.client = new dialogflow.SessionsClient(this.credentials)
        const sessionPath = this.client.sessionPath(projectId, this.session)
        
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: input,
                    languageCode: 'pt-BR'
                }
            }
        }
        const result = await this.client.detectIntent(request)
        return result[0].queryResult.intent.displayName
    }
}

module.exports = SessionClient