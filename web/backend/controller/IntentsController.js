const Dialogflow = require('../service/DialogflowAPI')
const GoogleCloud = require('../service/GoogleCloud')
const Storage = require('../../../app/json/Storage')

exports.intentsList = async (req, res)=>{

    const projectId = req.params.id
    const token = req.session.token

    console.log(req.session, token)

    const googleCloud = new GoogleCloud
    const api = new Dialogflow(token)

    const projects = await googleCloud.getProjects(token)
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