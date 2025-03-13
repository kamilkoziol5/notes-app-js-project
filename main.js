const notesContainer = document.querySelector(".notes-container")
const createButton = document.querySelector(".create_btn")

function showNotes() {
	notesContainer.innerHTML = localStorage.getItem("notes") || ""
	addEventListenersToNotes()
}

showNotes() //

function updateStorage() {
	localStorage.setItem("notes", notesContainer.innerHTML)
}

createButton.addEventListener("click", () => {
	let inputBox = document.createElement("p")
	let img = document.createElement("img")

	inputBox.className = "input-box"
	inputBox.setAttribute("contenteditable", "true")
	inputBox.textContent = "Twoja notatka..."

	img.src = "images/delete.png"

	notesContainer.appendChild(inputBox).appendChild(img)

	updateStorage()
	addEventListenersToNotes()
})

notesContainer.addEventListener("click", function (e) {
	if (e.target.tagName === "IMG") {
		e.target.parentElement.remove()
		updateStorage()
	}
})

function addEventListenersToNotes() {
	document.querySelectorAll(".input-box").forEach(nt => {
		nt.addEventListener("keyup", updateStorage)
	})
}
