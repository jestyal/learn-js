let tasks = [];
let task;

let projects = [{
    "project-name": "Project 1",
    "tasks-list": task[0],
},{
    "project-name": "Project 2",
    "tasks-list": task[1],
}]

let taskAddBlock = document.querySelector(".task-block__form");
let taskAddBtn = document.querySelector(".btn__add");

let taskNameInput = document.querySelector("#task-name");
let taskDeadlineInput = document.querySelector("#task-deadline");
let newTaskAddBtn = document.querySelector("#task-add-btn");

taskAddBtn.addEventListener("click", (event) => {
    if(taskAddBlock.classList.contains("task-block__form_none")){
        taskAddBlock.classList.remove("task-block__form_none");
    } else {
        taskAddBlock.classList.add("task-block__form_none");
    }
})

newTaskAddBtn.addEventListener("click", (event) => {
    event.preventDefault();

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    task = {
        "name": taskNameInput.value,
        "create-date": today,
        "deadline-date": taskDeadlineInput.value,
    }
    tasks.push(task);

    createTask(task);
})

let tasksBlock = document.querySelector(".tasks-list__wrap");

function createTask(task) {
    let taskItem = document.createElement("div");
    taskItem.classList.add("tasks-list__item");
    tasksBlock.append(taskItem);

    let taskName = document.createElement("div");
    taskName.classList.add("tasks-list__item-name");
    taskName.innerText = task.name;
    taskItem.append(taskName);

    let taskDate = document.createElement("div");
    taskDate.classList.add("tasks-list__item-date");
    taskDate.innerText = `Создана: ` + task["create-date"];
    taskItem.append(taskDate);

    let taskDeadline = document.createElement("div");
    taskDeadline.classList.add("tasks-list__item-deadline");
    taskDeadline.innerText = `Дедлайн: ` + task["deadline-date"];
    taskItem.append(taskDeadline);
}