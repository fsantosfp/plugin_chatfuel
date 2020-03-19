const Mapping = require('../mapping/Mapping')
const Credentials = require('../credentials/Credential')

exports.save = (req, res)=>{
    
    console.log(req.body)

    const data = req.body;
    const project = req.body.project
    const token = req.session.token

    const mapping = new Mapping(project)
    const credential = new Credentials(token)

    credential.create(project)
    const endpoint = mapping.save(data)

    res.json({url: endpoint})
}