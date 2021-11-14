let projects = [{
    "project-name": "Project 1",
    "tasks-list": [
        {
            "name": "Task 1",
            "create-date": "10.11.21",
            "deadline-date": "10.11.21",
        },
        {
            "name": "Task 2",
            "create-date": "11.11.21",
            "deadline-date": "15.11.21",
        },
    ],
},{
    "project-name": "Project 2",
    "tasks-list": [
        {
            "name": "Task 1",
            "create-date": "10.11.21",
            "deadline-date": "15.11.21",
        },
        {
            "name": "Task 2",
            "create-date": "11.11.21",
            "deadline-date": "15.11.21",
        },
    ],
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

    console.log(taskNameInput.value);
    console.log(taskDeadlineInput.value);
})
