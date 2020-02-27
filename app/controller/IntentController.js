const DialogflowSessionClient = require('../service/DialogflowSessionClient')

exports.detectIntent = async (req, res)=>{
    const {input} = req.body
    const projectId = req.params.projectId

    const dialogflowClient = new DialogflowSessionClient
    const json = await dialogflowClient.detect(projectId, input);

    res.json(json)
}