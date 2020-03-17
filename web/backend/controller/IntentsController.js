const Dialogflow = require('../service/DialogflowAPI')
const Mapping = require('../../../app/mapping/Mapping')

exports.intentsList = async (req, res)=>{

    const projectId = req.params.id
    const token = req.session.token

    const api = new Dialogflow(token)

    const dialogflow = new Dialogflow(token)
    const projects = await dialogflow.agentList()

    const intents = await api.intentsList(projectId)
    const mapping = new Mapping(projectId);
    const chatfuel = mapping.getFile(projectId)
    
    const params = {
        projects: projects,
        intents: intents,
        projectId: projectId,
        chatfuel: chatfuel.intents,
        endpoint: chatfuel.url
    }

    res.render('pages/intents', {params: params})
}