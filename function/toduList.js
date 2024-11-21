let tasks = [
    { id: 101, description: "HTML tag", dueDate: "2024-10-15", status: "working", hour: 8 },
    { id: 102, description: "CSS", dueDate: "2024-10-15", status: "pending", hour: 0 }
];

class Task {
    constructor(id, description, dueDate, status, hour) {
        this.id = id;
        this.description = description;
        this.dueDate = dueDate;
        this.status = status;
        this.hour = hour;
    }
}

function displayTasks() {
    tasks.forEach(function(detail) {
        console.log(`${detail.description} - ${detail.dueDate} (${detail.status})`);
    });
}

function addTask(id, description, dueDate, status, hour) {
    const newTask = new Task(id, description, dueDate, status, hour);
    tasks.push(newTask);
}

function updateTask(id, newStatus) {
    var task = tasks.find(function(task) {
        return task.id === id;
    });

    if (task) {
        task.status = newStatus;
        return "Task with ID " + id + " updated to " + newStatus + ".";
    } else {
        return "Task with ID " + id + " not found.";
    }
}

function updateTaskWithMap(id, newStatus) {
    tasks = tasks.map(function(task) {
        if (task.id === id) {
            return {
                ...task,
                status: newStatus
            };
        }
        return task;
    });

    return "Task with ID " + id + " updated to " + newStatus + ".";
}

function removeTask(id) {
    const initialLength = tasks.length;
    tasks = tasks.filter(function(task) {
        return task.id !== id;
    });

    if (tasks.length < initialLength) {
        return "Task with ID " + id + " has been removed.";
    } else {
        return "Task with ID " + id + " not found.";
    }
}

displayTasks();  
addTask(103, "JavaScript", "2024-10-20", "pending", 5);  
console.log(updateTask(102, "completed"));  
displayTasks(); 
console.log(removeTask(101));  
displayTasks();  