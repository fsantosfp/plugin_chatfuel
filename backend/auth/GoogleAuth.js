const {google} = require('googleapis')

class GoogleAuth{

    constructor(){
        this.scopes = [
            'https://www.googleapis.com/auth/cloud-platform',
            'https://www.googleapis.com/auth/cloud-platform.read-only',
            'https://www.googleapis.com/auth/dialogflow'
        ];

        this.redirect = "http://localhost:3000/auth"
        this.appSecret = "92wrb2bt11cmiuqCbg6ttcwY"
        this.serviceAccounts = "739933332602-hes3efajls5h3rig10m3k4snc4i1umqa.apps.googleusercontent.com"
        this.oauth2Client = new google.auth.OAuth2(this.serviceAccounts, this.appSecret,this.redirect)
    }

    generateURL(){
        return this.oauth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: this.scopes
        })
    }

    async getAccessToken(code){
        const {tokens :{access_token} } = await this.oauth2Client.getToken(code)
        return access_token;
    }

}

module.exports = GoogleAuth;