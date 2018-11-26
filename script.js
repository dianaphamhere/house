var btn = document.getElementById("btn");
var wText = document.getElementById("welcome");
var wArray = ["bienvenido", "willkommen", "irasshaimase", "welcome"];
var index = 0;

btn.addEventListener("click", change);

function change() {
	wText.innerHTML = wArray[index];
	index = (index + 1) % wArray.length;
}

// function changeText() {
// 	for (i = 0; i < wArray.length; i++) {
// 		console.log(wArray[i]);
// 		wText.innerHTML = wArray[i];

// 		tmp = []
// 		// what was that one tmp thing? it was like iterating or sorting through the array?
// 		i++;
			// leaving all this here to try to remember it for later
// 	}
// }

