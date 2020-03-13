const Dialogflow = require('../service/DialogflowAPI')
const Storage = require('../../../app/json/Storage')

exports.intentsList = async (req, res)=>{

    const projectId = req.params.id
    const token = req.session.token

    const api = new Dialogflow(token)

    const dialogflow = new Dialogflow(token)
    const projects = await dialogflow.agentList()

    const intents = await api.intentsList(projectId)
    const file = new Storage(projectId);
    const chatfuel = file.getFile(projectId)
    
    const params = {
        projects: projects,
        intents: intents,
        projectId: projectId,
        chatfuel: chatfuel.intents,
        endpoint: chatfuel.url
    }

    res.render('pages/intents', {params: params})
}