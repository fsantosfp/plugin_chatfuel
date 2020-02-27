const dialogflow = require('dialogflow')
const uuid = require('uuid')
const path = require('path')
const Storage = require('../json/Storage')

class DialogflowSessionClient{
    constructor(){
        this.credentials = {
            keyFilename: path.join(__dirname, '../credentials/credentials.json')
        }

        this.client = new dialogflow.SessionsClient(this.credentials)
        this.session = uuid.v4()
    }

    async detect(projectId, input){
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
        const storage = new Storage(projectId)
        const json = storage.getFile()

        return {
            intentDetected : result[0].queryResult.intent.displayName,
            redirect_to_blocks: json.intents[result[0].queryResult.intent.displayName]
        }
    }
}

module.exports = DialogflowSessionClient