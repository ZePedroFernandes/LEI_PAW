const tasks = ["Estudar PAW"];

function removeFromList(task) {
    if (task) {
        let index = tasks.indexOf(task);
        tasks.splice(index, 1);
    }
}

function addToList(task) {
    tasks.push(task);
}

function addTask() {
    const task = document.getElementById("taskText").value;
    if (task) {
        addToList(task);
        createItemTaskInHtml(task);
    }
}

function loadFromStorage(taskList) {
    //ToDo load from the storage api
}

function saveInStorage(taskList) {
    //ToDo save taskList in the storage api
}

function removeTask(task) {
    removeFromList(task);
    let articles = document.getElementById("taskList").childNodes;
    
    for(let i = 0; i < articles.length; i++){
        if(articles[i].firstChild){
            articles[i].childNodes[1].removeEventListener;
            articles[i].parentNode.removeChild(articles[i]);
            return;
        }
    }
}

function createItemTaskInHtml(task) {
    let taskList = document.getElementById("taskList");
    let article = document.createElement("article");
    let taskElem = document.createElement("span");
    taskElem.innerText = task;
    taskElem.classList.add("taskText");

    let closeButtom = document.createElement("button");
    closeButtom.innerText = "X";
    closeButtom.classList.add("taskClose");
    closeButtom.addEventListener("click", function (ev) {
        ev.preventDefault();
        removeTask(task);
    })

    article.appendChild(taskElem);
    article.appendChild(closeButtom);
    taskList.appendChild(article);
}

function init() {
    document.getElementById('addButton').addEventListener("click", addTask);
    tasks.forEach(function (item) {
        createItemTaskInHtml(item);
    })

}

init();