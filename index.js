const express = require('express')
const path = require('path')
const axios = require('axios')
const session = require('express-session')
//const dialogflow = require('dialogflow')

const GoogleAuth = require('./backend/auth/GoogleAuth')
const GoogleCloud = require('./backend/service/GoogleCloud')

const app = express()
app.use(session({secret: 'teste',saveUninitialized: true,resave: true}))
app.set('views', path.join(__dirname,'backend/views'))
app.set('view engine', 'ejs')

app.get("/", (req, res) => {

    const google = new GoogleAuth;
    let url = google.generateURL();
    res.redirect(url);
})

app.get('/auth', async (req,res) => {

    const google = new GoogleAuth;
    const tokens = await google.getAccessToken(req.query.code)

    req.session.token = tokens;

    res.redirect('./home');
})


app.get('/home', (req, res)=>{
    //res.sendFile(path.join(__dirname+'/public/home.html'))
    res.render('pages/index')
})

app.get('/projects',async (req,res)=>{
    const googleCloud = new GoogleCloud;
    const projetcs = await googleCloud.getProjects(req.session.token)

    console.log(projetcs)
})

app.get('/list', async (req, res) => {
    const aipKey = "AIzaSyClNdYqiPf6z4nD425Q1Dv20xShZQ4k8v0"
    const projectId = "actions-codelab-92615"
    const intentsClient = new dialogflow.IntentsClient()
    const projectAgentPath = intentsClient.projectAgentPath(projectId)
    
    const url = `https://dialogflow.googleapis.com/v2/${projectAgentPath}/intents`

    const header = {
        headers:{
            "Authorization": "Bearer ya29.ImC_B_CVKoytDv4xBNYpg5AUqbkUe2ldBEnoMH9QvZDmtG3YZNYnRZ_WWF9gY1a2UXIRs5BXusHn5vZ776PSp7Pa06iVcn3WTWmGNFHo2R11hsGou4Lucez_20AKjS3gGA0",
            "Accept": "application/json"
        }
    }

    const result = await axios.get(url,header)
    console.log(result.data)
    //console.log(result)
    
    //res.json(result.data)

})

app.listen(3000)