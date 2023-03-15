// add button
const addShowButton = document.querySelector(".add");
// label for the add button
const showInput = document.querySelector(".add-show input");
// unordered list (not yet visible)
const showList = document.querySelector(".show-list");
// span class for number of favorite shows
const showCount = document.querySelector(".number");

//you’ve only used prompt() to gather input you can also gather input  a with box and the value property. The value property will capture the content entered into the input box:
addShowButton.addEventListener("click", function () {
  const show = showInput.value;
  if (show !== "") {
    let listItem = document.createElement("li");
    listItem.innerText = show;
    showList.append(listItem);
    let shows = document.querySelectorAll(".show-list li");
    showCount.innerText = shows.length;
   
  }
});