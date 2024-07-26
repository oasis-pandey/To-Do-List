function addItemToList(){
    var item = document.querySelector(".TaskInput").value.trim();
    if (item === '') {
        return; 
    }
    var newItem = document.createElement('li');

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    var itemText = document.createElement('span');
    itemText.textContent = item;

    var deleteButton = document.createElement('button');
    
    var icon= document.createElement('i');
    icon.className="fa-solid fa-trash";
    deleteButton.appendChild(icon);
    

    newItem.appendChild(checkbox);
    newItem.appendChild(itemText);
    newItem.appendChild(deleteButton);

    document.querySelector("#TaskList").appendChild(newItem);
    document.querySelector(".TaskInput").value = "";

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            itemText.style.textDecoration = 'line-through';
            itemText.style.color = 'grey';
        } else {
            itemText.style.textDecoration = 'none';
            itemText.style.color = 'black';
        }
    });

    deleteButton.addEventListener('click', function() {
        newItem.remove();
    });
}

document.querySelector(".add").addEventListener("click", function (event) {
    addItemToList();
})

document.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addItemToList();
    }
})

