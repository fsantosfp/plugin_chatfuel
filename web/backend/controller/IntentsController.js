const Dialogflow = require('../service/DialogflowAPI')
const Mapping = require('../../../app/mapping/Mapping')

exports.intentsList = async (req, res)=>{

    const projectId = req.params.id
    const token = req.session.token
    const endpoint = `http://ec2-13-57-183-130.us-west-1.compute.amazonaws.com/api/${projectId}/detectIntent`

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
        endpoint: blocks == null ? '' : endpoint
    }

    res.render('pages/intents', {params: params})
}