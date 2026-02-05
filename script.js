let input = document.querySelector("#todoInput");
let addBtn = document.querySelector("#btn");
let list = document.querySelector("#todoList");
let taskCnt = document.querySelector("#taskCnt");
let clearAll = document.querySelector("#clearAll");

function updateTaskCnt(){
    const cnt = list.children.length;
    taskCnt.innerText = `${cnt} TASK${(cnt === 1) ? '' : 'S'} REMAINING`;
};

clearAll.addEventListener("click", () =>{
    list.innerHTML = "";
    updateTaskCnt();
    
});

// Adds on Clicking Enter
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addBtn.click();
    }
});

addBtn.addEventListener("click", () => {

    const text = input.value.trim();

    if (text === "") {
        return;
    }

    // list
    const li = document.createElement("li");
    li.className = "mb-3 group"; // Spacing between tasks

    // div
    const div = document.createElement("div");
    div.className = "flex flex-row items-stretch w-full shadow-sm rounded-lg overflow-hidden";

    // Paragraph
    const para = document.createElement("p");
    para.innerText = text;
    para.className = "flex-grow text-gray-700 bg-white border border-gray-200 border-r-0 rounded-l-lg p-3 transition-colors group-hover:bg-gray-50 flex items-center";

    // Remove Button
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Delete";
    removeBtn.className = "bg-red-500 text-white font-semibold px-4 hover:bg-red-600 transition-colors flex items-center justify-center";

    removeBtn.addEventListener("click", () => {
        li.remove();
        updateTaskCnt();
    });

    // adding the created nodes onto the list
    div.appendChild(para);
    div.appendChild(removeBtn);
    li.appendChild(div);
    list.prepend(li);

    input.value = ""; // Reset

    // Changing the task count
    updateTaskCnt();
});




