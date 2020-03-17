const Mapping = require('../mapping/Mapping')

exports.save = (req, res)=>{
    const data = req.body;
    const project = req.body.project
    const mapping = new Mapping(project)
    const endpoint = mapping.save(data);

    res.json({url: endpoint})
}