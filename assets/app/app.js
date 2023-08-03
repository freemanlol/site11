document.addEventListener("DOMContentLoaded", () => {
    btnTeam = document.querySelectorAll("#btn__team");
    btnTeam.forEach((userItem) => {
    	userItem.addEventListener("click", () => {
    		console.log(userItem)
    		btnTeam.forEach((userItem) => {
    			userItem.classList.remove("btn__active")
    		});
    		userItem.classList.add("btn__active")
    	})
	});
});

// Presentation line animation

// Length of path animated
const LINE_LENGTH = 9902;

document.addEventListener("scroll", (event) => {
	const presentationOffset = document.querySelector('.presentation').offsetTop
	const screenHeight = window.innerHeight;
	const screenWidth = window.innerWidth;

	const totalTopOffset = (presentationOffset - (screenHeight / 2))

	// this coef is working for 1920x1080 screen
	// TODO: make it work for all screen sizes
	const coef = 0.95;

	document.querySelector(".line-path").style.strokeDashoffset = LINE_LENGTH - (window.scrollY - totalTopOffset) * coef;

});

// Presentation line animation end