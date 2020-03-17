const fs = require('fs')
const path = require('path')

class Mapping {

    constructor(project){
        this.path = path.join(__dirname,'../mapping/')
        this.json = {
            url: "",
            intents: {}
        }
        this.url = `http://ec2-13-57-183-130.us-west-1.compute.amazonaws.com/api/${project}/detectIntent`;
        this.project = project
    }

    save(data){

        const fileName = `getbot-etl_${this.project}.json`
        const body = JSON.stringify(data.intents)

       fs.writeFile(this.path + fileName, body, function (err) {
            if (err) throw err;
        });

        return this.url;
    }

    getFile(){
        const fileName = `getbot-etl_${this.project}.json`
        const file = path.join(this.path, fileName);

        try{
            if(fs.existsSync(file)){
                const rawdata = fs.readFileSync(file)
                this.json.intents = JSON.parse(rawdata)
                this.json.url = this.url
            }
        }catch(error){
            throw error
        }
        
        return this.json
    }

}

module.exports = Mapping