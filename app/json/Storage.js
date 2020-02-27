const fs = require('fs')
const path = require('path')
const os = require('os')

class Storage {

    constructor(project){
        this.path = path.join(__dirname,'../storage/')
        this.json = {
            url: "",
            intents: {}
        }
        this.url = `http://pluginchatfuel-env-1.eba-zsxfxqix.sa-east-1.elasticbeanstalk.com/api/${project}/detectIntent`;
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

module.exports = Storage