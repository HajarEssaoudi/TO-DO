const InputAdd = document.getElementById("input-add");
const ListContainer = document.getElementById("list-container");

function AddTask() {
    if (InputAdd.value === '') {
        alert("You must write something.");
    } else {
        let li = document.createElement('li');
        li.innerHTML = InputAdd.value;
        ListContainer.appendChild(li);
        
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    InputAdd.value = '';
    saveData();
}

InputAdd.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Enter key is pressed
        event.preventDefault();
        AddTask();
    }
});

ListContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", ListContainer.innerHTML);
}

function showTask() {
    ListContainer.innerHTML = localStorage.getItem("data");
}

showTask();
