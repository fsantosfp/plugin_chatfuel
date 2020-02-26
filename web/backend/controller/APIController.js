const Dialogflow = require('../service/DialogflowAPI')
const GoogleCloud = require('../service/GoogleCloud')

exports.intentsList = async (req, res)=>{

    const projectId = req.params.id
    const token = req.session.token

    const googleCloud = new GoogleCloud
    const api = new Dialogflow(token)

    const projects = await googleCloud.getProjects(token)
    const intents = await api.intentsList(projectId)

    const params = {
        projects: projects,
        intents: intents,
        projectId: projectId
    }

    res.render('pages/intents', {params: params})
}