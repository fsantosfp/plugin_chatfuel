module.exports = (req, res, next) =>{


    if(req.session.token == undefined){
        req.session.referer = req.url;
        res.redirect('/')
    }

    req.session.referer = '/home';
    
    next()
}
