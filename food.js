var foodContainer = document.getElementById("foodContainer");

function makeDom(xhrData){

	var newString = "";
	var currentdog;

	for (var i=0; i<xhrData.badges.length; i++){
		currentdog = xhrData.badges[i];
	 
	 newString += ``;
	 newString += ``;
	 food += ``;
	 } 

	 foodContainer.innerHTML = newString;
}

function executeThisCodeAfterFileLoaded(){
	var doggieData = JSON.parse(this.responseText);
	//var kittyData = JSON.parse(this.responseText);
	console.log(doggieData);
	//console.log(kittyData);
	makeDom(doggieData);
	//makeDom(kittyData)
}

function executeThisCodeAfterFileFails(){
	console.log("failed");

}

var dogRequest = new XMLHttpRequest();
dogRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
dogRequest.addEventListener("error", executeThisCodeAfterFileFails);
dogRequest.open("GET","dogFood.json");
dogRequest.send();
console.log("dogRequest", dogRequest);

// var catRequest = new XMLHttpRequest();
// catRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
// catRequest.addEventListener("error", executeThisCodeAfterFileFails);
// catRequest.open("GET","catFood.json");
// catRequest.send();
// console.log("catRequest", catRequest);