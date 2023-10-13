const activityInput = document.getElementById("activity");
const dateInput = document.getElementById("date");
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

export { validateForm };

// , getActivities, reset