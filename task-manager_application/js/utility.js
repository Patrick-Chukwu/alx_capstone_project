const activityInput = document.getElementById("activity");
const taskDate = document.getElementById("date").value;
const timeInput = document.getElementById("time");
const rangeInput = document.getElementById("range");

const validateForm = (e)  => {
    e.preventDefault();
    // const inputs = document.querySelectorAll("input");
    // inputs.forEach((input) => {
    //     inputs.classList.add("error-prompt");
    // });
    const activity = activityInput.value.trim();
    const date = dateInput.value.trim();
    const time = timeInput.value.trim();
    const range = rangeInput.value.trim();
    
    if (!activity|| !date| !time|| !range) {
        // inputs.forEach((input) => {
        //     input.classList.add("error-prompt");
        // });
        // return false;
   
        alert("Fill all the spaces");
    } else {
        this.submit();
        alert("You've done very well");
    }
    // return true;

};

// const getActivities = () => {
//     return {
//         activity, date, time
//     }
// }

// const reset = () => {
//     activity = "";
//     date = "";
//     time = "";
// }

// Function to add a new task
function addTask() {
    const taskName = document.getElementById('task-name').value;
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;
    
    if (taskName !== '') {
        const task = {
            name: taskName,
            dueDate: dueDate,
            priority: priority,
            completed: false
        };
        tasks.push(task);
        updateTaskList();
        saveTasksToLocalStorage();
        document.getElementById('task-name').value = '';
    }
}
export { validateForm };

// , getActivities, reset