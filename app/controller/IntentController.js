const DialogflowSessionClient = require('../service/dialogflow/SessionClient')
const ChatfuelResponse = require('../responses/ChatfuelResponse')
const Mapping = require('../mapping/Mapping')

exports.detectIntent = async (req, res)=>{
    const {input} = req.body
    const projectId = req.params.projectId

    //Detect a intent
    const dialogflowClient = new DialogflowSessionClient
    const intent = await dialogflowClient.detect(projectId, input);
    
    // procura valor:chave da intent no mapping
    const mapping = new Mapping(projectId)
    const result = mapping.find(intent)

    //formata retorno
    const response = new ChatfuelResponse
    const json = response.format(intent, result)

    res.json(json)
}