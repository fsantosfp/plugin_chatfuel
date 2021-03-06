const GoogleAuth = require('../auth/GoogleAuth')

exports.getAuthorization = (req,res)=>{

    const google = new GoogleAuth
    const URL = google.generateURL()
    res.redirect(URL)
}


exports.getAccessToken = async (req, res)=>{
    const google = new GoogleAuth
    const token = await google.getAccessToken(req.query.code)

    req.session.token = token
    const path = req.session.referer == undefined ? './home' : req.session.referer
    res.redirect(path)
}