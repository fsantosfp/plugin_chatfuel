const dialogflow = require('dialogflow')
const uuid = require('uuid')
const path = require('path')
const Mapping = require('../../mapping/Mapping')
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
        const mapping = new Mapping(projectId)
        const json = mapping.getFile()
        const block = json.intents[result[0].queryResult.intent.displayName]

        return {
            intentDetected : result[0].queryResult.intent.displayName,
            redirect_to_blocks: [block]
        }
    }
}

module.exports = SessionClient