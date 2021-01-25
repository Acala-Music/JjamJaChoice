var foods = ["jajang 짜장면", "jjambbong 짬뽕"];

function init() {
	var html= "", food = "";
	
	foods.forEach(function(value, index){
		food = value.split(" ");
		html += `<img src="./images/${food[0]}.jpg" data-index="${index}">`;
	});
	
	console.log(html);
	
	document.querySelector(".img-thumb").innerHTML = html;
	
	choiceImg(0);
	
	document.querySelector("#addBtn").addEventListener("click", addImg);
	
	var thumbs = document.querySelectorAll(".img-thumb>img");
	for(var i=0; i<thumbs.length; i++){
		thumbs[i].addEventListener("click", function() {
			choiceImg(this.getAttribute("data-index"));
		});
	}
}

function addImg() {
	choiceImg(parseInt(Math.random() * 2));
}

function choiceImg(index) {
	var food = foods[index].split(" ");
	document.querySelector(".img-view > img").setAttribute("src", `./images/${food[0]}.jpg`);
	document.querySelector("#foodName").innerHTML = food[1];
	
	var thumbs = document.querySelectorAll(".img-thumb > img");
	for(var i = 0; i<thumbs.length; i++){
		thumbs[i].classList.remove("choice");
	}
	thumbs[index].classList.add("choice");
}

init();