const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
  if (inputBox.value === "") {
    alert("you must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  try {
    localStorage.setItem("data", listContainer.innerHTML);
    console.log("Data saved:", listContainer.innerHTML);
  } catch (error) {
    console.error("Error saving data to local storage:", error);
  }
}
function showTask() {
  try {
    const items = localStorage.getItem("data");
    console.log(items, "items");
    if (items) {
      listContainer.innerHTML = items;
    }
  } catch (error) {
    console.error("Error retrieving data from local storage:", error);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  showTask();
});