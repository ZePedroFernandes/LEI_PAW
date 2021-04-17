var tasks = ["Estudar PAW"];

function removeFromList(task) {
    if (task) {
        let index = tasks.indexOf(task);
        tasks.splice(index, 1);
    }
    saveInStorage(tasks);
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
    saveInStorage(tasks);
}

function loadFromStorage() {
    let taskList = JSON.parse(localStorage.getItem("taskList"));
    tasks = taskList;
    clearHtmlTasks();
    loadHtmlTasks();
}

function saveInStorage(taskList) {
    localStorage.setItem("taskList", JSON.stringify(taskList));
}

function removeTask(task) {
    removeFromList(task);
    let articles = document.getElementById("taskList").childNodes;

    for (let i = 0; i < articles.length; i++) {
        if (articles[i].firstChild) {
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

function reloadTasks() {
    clearHtmlTasks();
    loadHtmlTasks();
}

function clearHtmlTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
}

function loadHtmlTasks() {
    tasks.forEach(function (item) {
        createItemTaskInHtml(item);
    })
}

function init() {
    saveInStorage(tasks);
    loadHtmlTasks();
    document.getElementById('addButton').addEventListener("click", addTask);
}

init();