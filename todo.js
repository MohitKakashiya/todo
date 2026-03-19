const input = document.querySelector('.todoInput');
const button = document.querySelector('.todoButton');
const list = document.querySelector('.todoList');

button.addEventListener("click", () => {
    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.textContent = task;
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    li.style.cursor = "pointer";

    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "X";
    deleteBtn.style.color = "red";
    deleteBtn.style.fontWeight = "bold";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.style.marginLeft = "100px";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = "";

    li.addEventListener("click", function () {
        li.style.color = "gray";
        li.style.textDecoration = "line-through";
    });
});