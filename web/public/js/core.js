/*
document.querySelectorAll('.dropdown-item')
    .forEach(item => {
        item.addEventListener('click',  event => {
            event.preventDefault();
            getIntents(item.id);
        })
    })

const getIntents = (projectId)=>{
    axios({
        method: 'post',
        url: '/intents/show',
        data: {
            projectId: projectId
        }
    }).then(response =>{
        console.log(response.data)
    })
}*/

document.querySelectorAll(".form-control").forEach(item => {
    item.addEventListener('change', ()=>{
        const btn_save = document.querySelector("#save")
        btn_save.className = "btn btn-success btn-lg btn-block"
        btn_save.disabled = false;
    })
})