const Dialogflow = require('../service/DialogflowAPI')
const Mapping = require('../../../app/mapping/Mapping')
const {API:{endpoint}} = require('../../../app/config/config')

exports.intentsList = async (req, res)=>{

    const projectId = req.params.id
    const token = req.session.token

    const dialogflow = new Dialogflow(token)
    const projects = await dialogflow.agentList()
    const intents = await dialogflow.intentsList(projectId)

    const mapping = new Mapping(projectId);
    const blocks = mapping.read()
    
    const params = {
        projects: projects,
        intents: intents,
        projectId: projectId,
        chatfuel: blocks == null ? {} : blocks,
        endpoint: blocks == null ? '' : endpoint.replace('projectId', projectId)
    }

    res.render('pages/intents', {params: params})
}