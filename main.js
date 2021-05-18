let formInputTask = document.getElementById("form-input-task");
let inputTask = document.getElementById("input-task");
let todoList = document.getElementById("todo-list");

const tasks = [];

const completeTask = (id) => {
    tasks.map((task) => task.id === id ? task.state = "completed": task)
    paintTasks();
} 

const deleteTask = (id) => {
    console.log(id);
    tasks.filter(task => task.id !== id? task : '');
    console.log(tasks);

}

const paintTasks = () => {
    todoList.innerHTML="";

    tasks.forEach((task) => {
        let li = document.createElement('li');
        li.classList.add('item');
        let btnComplete = document.createElement('span');
        btnComplete.classList.add('icon-circle');
        let btnDelete = document.createElement('span');
        btnDelete.classList.add('icon-cross');

        li.textContent = task.task;
        li.prepend(btnComplete);
        li.appendChild(btnDelete);

        if(task.state === "completed"){
            li.classList.add("completed");
        }

        // Complete Task Function
        btnComplete.addEventListener('click', () => completeTask(task.id));

        // Delete Task Function
        btnDelete.addEventListener('click', () => deleteTask(task.id))

        todoList.appendChild(li);
    })
}

const createTask = (e) => {
    e.preventDefault();

    let newtask = {
        id: Date.now(),
        task: inputTask.value,
        state: 'active',
    }

    tasks.push(newtask);
    
    inputTask.value = "";
    paintTasks();
}







formInputTask.addEventListener("submit", createTask);