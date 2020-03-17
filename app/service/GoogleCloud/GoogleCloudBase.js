class GoogleCloudBase {

    constructor(token){
        this.header = {
            headers : {
                "Authorization" : `Bearer ${token}`,
                "Accept": "application/json"
            }
        }
    }

}

module.exports = GoogleCloudBase