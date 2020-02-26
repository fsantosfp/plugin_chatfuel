const GoogleCloud = require('../service/GoogleCloud')

exports.index = async (req, res) => {

    const token = req.session.token
    const googleCloud = new GoogleCloud
    const projects = await googleCloud.getProjects(token)

    res.render('pages/index', {projects: projects})

}