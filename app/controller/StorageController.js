const Mapping = require('../mapping/Mapping')
const Credentials = require('../credentials/Credential')
const {API:{endpoint}} = require('../config/config')

exports.save = (req, res)=>{

    const data = req.body;
    const project = req.body.project
    const token = req.session.token

    const mapping = new Mapping(project)
    const credential = new Credentials(token)

    credential.create(project)
    mapping.save(data)


    res.json({url: endpoint.replace('projectId', project)})
}