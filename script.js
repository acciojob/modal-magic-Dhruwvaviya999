//your JS code here. If required.

const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const closeBtn = document.getElementById("close-btn");

btn.onclick = () => {
	modal.style.display = "block";
}

closeBtn.onclick=()=>{
	modal.style.display = "none";
}

window.onclick = (event) => {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}