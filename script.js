var btn = document.getElementById("btn");
var wText = document.getElementById("welcome");

btn.addEventListener("click", changeText);

function changeText() {
	wText.innerHTML = "Yoooo!";
}