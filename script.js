let inputBox = document.querySelector("#task-text");
let inputButton = document.querySelector("#add-task-butt");
let taskList = document.querySelector("ul");
let mainContainer = document.querySelector(".container")
function addTask(){
    if(inputBox.value === ''){
        alert("Add your Task!!")
    } else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
     inputBox.value = "";
     getData();
}

inputBox.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        inputButton.click();
    }
    getData();
})

taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
       
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();

    
    }
    getData();

})
