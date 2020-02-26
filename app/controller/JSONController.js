const Storage = require('../json/Storage')

exports.save = (req, res)=>{
    const data = req.body;
    const project = req.body.project
    const file = new Storage(project)
    const endpoint = file.save(data);

    res.json({url: endpoint})
}