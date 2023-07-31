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


