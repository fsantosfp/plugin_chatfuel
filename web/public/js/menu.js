function filterProjects(){
    dropdow = document.querySelector('#dropdown')
    options = Array.from(dropdow.querySelectorAll('a'))
    
    filter = document.querySelector('#dropdown-filter').value.toUpperCase()
    
    options.map((option)=>{
        txtoption = option.textContent || option.innerText
        if(txtoption.toUpperCase().indexOf(filter) > -1){
            option.style.display = "block"
        }else{
            option.style.display = "none"
        }
    })
}

// FILTRAR PROJETOS
window.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('#dropdown-filter').addEventListener('keyup', filterProjects)
})