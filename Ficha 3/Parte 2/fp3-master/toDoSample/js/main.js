const tasks = ["Estudar PAW"];

function removeFromList(task){
    // ToDo
}

function addToList(task){
    tasks.push(task);
    // ToDo
}

function addTask(){
    // ToDo
}

function loadFromStorage(taskList){
    //ToDo load from the storage api
}

function saveInStorage(taskList){
    //ToDo save taskList in the storage api
}

function removeTask(ev){
    // ToDo
}

function createItemTaskInHtml(task){
    // ToDo
}



function init(){
    document.getElementById('addButton').addEventListener("click", addTask );
    document.body.addEventListener("load", ()=>{
        tasks.forEach( function(item){
            createItemTaskInHtml(item);
        })
    })
    
}

init();