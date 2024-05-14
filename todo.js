const inputField = document.querySelector(".input");
const addList = document.querySelector(".fa-plus");
const newDiv = document.querySelector(".list");

const Values = [];

function addVal() {
    const newVal = inputField.value;
    if(newVal === ""){
        alert("Input field cannot be empty")
    }else{
        console.log("Is this working");
        const createDiv = document.createElement("div");
        newDiv.appendChild(createDiv);
        createDiv.classList.add("newdiv");
        
        const div = document.createElement("div");
        const createInput = document.createElement("input");
        createInput.type = "checkbox";
        createDiv.appendChild(createInput);
        createInput.classList.add("check");
        
        createDiv.appendChild(div);
        const createPara = document.createElement("p");
        createDiv.appendChild(createPara);
        createPara.innerHTML = newVal;
        
        const createSpan = document.createElement("span");
        createSpan.innerHTML = ' <i class="fa-solid fa-delete-left"></i>';
        createDiv.appendChild(createSpan);
        createSpan.classList.add("icons");
        div.appendChild(createInput);
        div.appendChild(createPara);
        div.classList.add("flex1");
    
        check(createInput, createPara);
        clear();
        delList(createSpan, createDiv);
    }
    
}

addList.addEventListener("click", addVal);

function clear() {
    inputField.value = "";
}


function check(input, para) {
    var checkClass = para;

    input.addEventListener("click", () => {
        if (checkClass.classList.contains("line")) {
            checkClass.classList.remove("line");
            checkClass.classList.add("unstrike");
        } else {
            checkClass.classList.remove("unstrike");
            checkClass.classList.add("line");
        }
    });
}


function delList(delBtn, div) {
    delBtn.addEventListener("click", () => {
        div.remove(); 
    });
}
