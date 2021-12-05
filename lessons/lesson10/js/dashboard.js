let tasks = [];
let task;

let projects = [{
    "project-name": "Project 1",
    // "tasks-list": task[0],
},{
    "project-name": "Project 2",
    // "tasks-list": task[1],
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


let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
