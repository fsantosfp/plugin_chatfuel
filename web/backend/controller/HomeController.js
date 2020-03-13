//const GoogleCloud = require('../service/GoogleCloud')
const Dialogflow = require('../service/DialogflowAPI')

exports.index = async (req, res) => {

    const token = req.session.token
    
    const dialogflow = new Dialogflow(token)
    const projects = await dialogflow.agentList()

    res.render('pages/index', {projects: projects})

}