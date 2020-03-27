document.querySelectorAll(".form-control").forEach(item => {
    item.addEventListener('change', ()=>{
        const btn_save = document.querySelector("#save")
        btn_save.className = "btn btn-success btn-lg btn-block"
        btn_save.disabled = false;
    })
})

const save = ()=>{
    const intents = document.querySelectorAll('.form-control')
    let pos_chautfuel = Math.floor(intents.length / 2)
    const size = pos_chautfuel
    const project = document.location.pathname.split("/")[2]
    let data = {project: project,intents:{}}

    for(let i= 0; i< size; i++){
        data.intents[intents[i].value] = intents[pos_chautfuel].value;
        pos_chautfuel++
    }
    done();
    send(data);
}

const send = (data) =>{
    axios.post('/api/save', data)
      .then(function (response) {
        document.querySelector("#url").innerText = response.data.url
      })
      .catch(function (error) {
        console.log(error);
      });
}

const done = ()=>{
    const btn_save = document.querySelector("#save")
    btn_save.className = "btn btn-secondary btn-lg btn-block"
    btn_save.disabled = true;
}

document.querySelector('#save').addEventListener('click', save)