let submitForm = document.getElementById("submit");
let alertBox = document.getElementById("alertBox");
let seeMore = document.getElementById("seeMore");
alertBox.addEventListener("click", function () {
  alertBox.classList.remove("displayBlock");
});
function showAlert() {
  alertBox.classList.add("displayBlock");
}
