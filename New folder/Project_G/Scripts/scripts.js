javascript.document.addEventListener("DOMContentLoaded", function() {
    let neopoints = 0;
    const taskList = document.getElementById("taskList");
    const newTaskInput = document.getElementById("newTask");
    const addTaskButton = document.getElementById("addTask");
    const neopointsDisplay = document.getElementById("neopoints");

    addTaskButton.addEventListener("click", function() {
        const taskText = newTaskInput.value;
        if (taskText.trim() !== "") {
            const newTaskItem = document.createElement("li");
            newTaskItem.textContent = taskText;
            taskList.appendChild(newTaskItem);

            newTaskItem.addEventListener("click", function() {
                taskList.removeChild(newTaskItem);
                neopoints += 10;
                neopointsDisplay.textContent = neopoints;
            });

            newTaskInput.value = "";
        }
    });
});







