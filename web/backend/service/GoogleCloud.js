const axios = require('axios')

class GoogleCloud {

    constructor(){
        this.endpoint = 'https://cloudresourcemanager.googleapis.com/v1/projects?key=AIzaSyClNdYqiPf6z4nD425Q1Dv20xShZQ4k8v0'
    }

    async getProjects(token){
        const header = {
            headers:{
                Authorization: `Bearer ${token}`,
                Accept: 'application/josn'
            }
        }

        const result = await axios.get(this.endpoint, header)
        
        const projects =  result.data.projects.map((project)=>{
            return {projectId:  project.projectId, name:  project.name}
        })

        return projects

    }

}

module.exports = GoogleCloud