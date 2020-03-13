const axios = require('axios')
const dialogflow = require('dialogflow')

class DialogflowAPI{

    constructor(token){
        this.dialogClient = new dialogflow.IntentsClient()
        this.header = {
            headers: {
                "Authorization" : `Bearer ${token}`,
                "Accept": "application/json"
            }
        }
    }

    async agentList(){
        const url = 'https://dialogflow.googleapis.com/v2/projects/-/agent:search';
        const result = await axios.get(url, this.header)

        const agents = result.data.agents.map((agent)=>{
            const id = agent.parent.split("projects/")[1]
            return {projectId: id, name: agent.displayName}
        })

        return agents
    }

    async intentsList(projectId){
        
        const projectAgentPath = this.dialogClient.projectAgentPath(projectId)
        const url = `https://dialogflow.googleapis.com/v2/${projectAgentPath}/intents`

        const result = await axios.get(url, this.header)
       
        const intents = result.data.intents.map((intent)=>{
            return {displayName: intent.displayName}
        })

        return intents
    }

}

module.exports = DialogflowAPI