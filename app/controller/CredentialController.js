const ServiceAccount = require('../service/GoogleCloud/ServiceAccount')
const ServiceAccountKey = require('../service/GoogleCloud/ServiceAccountKey')
const storage = require('../storage/Storage')

exports.create = async (req, res)=>{

    const token = req.session.token
    const projectId = req.params.projectId
    let msg = 'já existe'
    
    if(!storage.fileExist('credentials/json/',`credential-${projectId}.json`)){
        const serviceAccount = new ServiceAccount(token)
        const serviceAccountKey = new ServiceAccountKey(token)
    
        const account = await serviceAccount.get(projectId)
        const privateKey = await serviceAccountKey.create(projectId, account)
    
        storage.save('credentials/json/', `credential-${projectId}.json`, privateKey)
        msg = 'criado novo'
    }

    res.status(200).send(msg)

}