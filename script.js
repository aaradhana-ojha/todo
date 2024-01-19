
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// javascript for the add function
function addTask(){
    if(inputBox.value === ''){
        alert("you must write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData(); // whenever we add any task this saveData() will be called and it will save the updated content in the browser. 

}

// javascript for the click function 
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData(); // whenever we add any task this saveData() will be called and it will save the updated content in the browser. 

    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData(); // whenever we add any task this saveData() will be called and it will save the updated content in the browser. 

    }

}, false)

// to restore the task list even after refreshing
function saveData(){
    try {
        localStorage.setItem("data", listContainer.innerHTML);
    } catch (error) {
        console.error("Error saving data to local storage:", error);
    }
}
// now we have to display the data when the website is opened  again.
function showTask(){
    try {
        listContainer.innerHTML = localStorage.getItem("data");
    } catch (error) {
        console.error("Error retrieving data from local storage:", error);
    }}
saveData(); // whenever we add any task this saveData() will be called and it will save the updated content in the browser. 

