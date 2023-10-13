import { validateForm } from './utility.js'

const form = document.querySelector("form");

form.addEventListener("submit", function()
{
    const isValidated = validateForm();

    if (isValidated)
    return;
    
    // const fieldValues = getActivities();
    // reset();
    // console.log(fieldValues);

    // tasks.push(fieldValues);
    // console.log(tasks)
})
